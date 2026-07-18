import { useEffect, useState } from 'react';
import { ContactShadows, PresentationControls, RoundedBox } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { CanvasTexture, SRGBColorSpace } from 'three';

const MAX_TEXTURE_WIDTH = 768;

// Screenshots are full-resolution marketing images (~1-2MB); downscaling
// before upload keeps GPU memory sane and avoids WebGL context loss on
// constrained/software-rendered devices. When targetAspect is given, the
// source is center/top-cropped to that ratio first (like CSS object-fit:
// cover) so a wide desktop screenshot doesn't get squashed into a phone's
// portrait screen.
const useScaledTexture = (url, targetAspect) => {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    let cancelled = false;
    let createdTexture;
    const img = new Image();
    img.onload = () => {
      if (cancelled) return;

      let sx = 0;
      let sy = 0;
      let sw = img.width;
      let sh = img.height;
      if (targetAspect) {
        const srcAspect = img.width / img.height;
        if (srcAspect > targetAspect) {
          sw = img.height * targetAspect;
          sx = (img.width - sw) / 2;
        } else {
          sh = img.width / targetAspect;
        }
      }

      const scale = Math.min(1, MAX_TEXTURE_WIDTH / sw);
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(sw * scale);
      canvas.height = Math.round(sh * scale);
      canvas.getContext('2d').drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
      createdTexture = new CanvasTexture(canvas);
      createdTexture.colorSpace = SRGBColorSpace;
      setTexture(createdTexture);
    };
    img.src = url;

    return () => {
      cancelled = true;
      createdTexture?.dispose();
    };
  }, [url, targetAspect]);

  return texture;
};

// Thin diagonal streak of light over the screen glass — cheap fake of a
// specular reflection so the display doesn't read as a flat decal.
const GlassSheen = ({ width, height }) => (
  <mesh position={[0, 0, 0.001]} rotation={[0, 0, 0.5]}>
    <planeGeometry args={[width * 0.55, height * 1.6]} />
    <meshBasicMaterial color="#ffffff" transparent opacity={0.05} depthWrite={false} toneMapped={false} />
  </mesh>
);

const SCREEN_HEIGHT = 1.5;
// Rotation of the hinge pivot: 0 = screen standing straight up, negative =
// reclined back (top leans away from camera) like a laptop opened for viewing.
const OPEN_ANGLE = -0.42;

const SCREEN_W = 2.2;
const SCREEN_H = 1.32;

const Screen = ({ screenImage, color }) => {
  const texture = useScaledTexture(screenImage, SCREEN_W / SCREEN_H);

  return (
    <group position={[0, 0.06, -0.8]} rotation={[OPEN_ANGLE, 0, 0]}>
      <group position={[0, SCREEN_HEIGHT / 2, 0]}>
        <RoundedBox args={[2.4, SCREEN_HEIGHT, 0.06]} radius={0.05} smoothness={4}>
          <meshPhysicalMaterial color="#0a0f0d" roughness={0.35} metalness={0.6} clearcoat={0.6} clearcoatRoughness={0.25} />
        </RoundedBox>
        <mesh position={[0, 0, 0.032]}>
          <planeGeometry args={[SCREEN_W, SCREEN_H]} />
          {texture ? (
            <meshBasicMaterial key="loaded" map={texture} toneMapped={false} />
          ) : (
            <meshBasicMaterial key="loading" color={color} toneMapped={false} />
          )}
        </mesh>
        <GlassSheen width={SCREEN_W} height={SCREEN_H} />
      </group>
    </group>
  );
};

const Laptop = ({ screenImage, color }) => (
  <group position={[0, -0.25, 0.2]} rotation={[0.1, 0, 0]}>
    <RoundedBox args={[2.4, 0.12, 1.6]} radius={0.05} smoothness={4} position={[0, 0, 0]}>
      <meshPhysicalMaterial color="#12181a" roughness={0.3} metalness={0.75} clearcoat={0.5} clearcoatRoughness={0.3} />
    </RoundedBox>
    <RoundedBox args={[1.9, 0.01, 1.15]} radius={0.03} smoothness={2} position={[0, 0.065, -0.05]}>
      <meshStandardMaterial color="#060a09" roughness={0.6} metalness={0.4} />
    </RoundedBox>
    <RoundedBox args={[0.55, 0.01, 0.35]} radius={0.03} smoothness={2} position={[0, 0.065, 0.55]}>
      <meshStandardMaterial color="#060a09" roughness={0.5} metalness={0.5} />
    </RoundedBox>
    <Screen screenImage={screenImage} color={color} />
    <pointLight position={[0, 1.2, -0.3]} intensity={0.8} color={color} distance={3.5} />
    <pointLight position={[0, 0.4, -2.2]} intensity={1.2} color={color} distance={4} />
    <ContactShadows position={[0, -0.31, 0]} opacity={0.55} scale={4.5} blur={2.4} far={1} color="#000000" />
  </group>
);

const PHONE_HEIGHT = 2.05;
const PHONE_SCREEN_W = 0.84;
const PHONE_SCREEN_H = PHONE_HEIGHT - 0.2;

const Phone = ({ screenImage, color }) => {
  const texture = useScaledTexture(screenImage, PHONE_SCREEN_W / PHONE_SCREEN_H);

  return (
    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <RoundedBox args={[1.0, PHONE_HEIGHT, 0.09]} radius={0.14} smoothness={4}>
        <meshPhysicalMaterial color="#12181a" roughness={0.25} metalness={0.85} clearcoat={0.7} clearcoatRoughness={0.2} />
      </RoundedBox>
      <mesh position={[0, 0, 0.046]}>
        <planeGeometry args={[PHONE_SCREEN_W, PHONE_SCREEN_H]} />
        {texture ? (
          <meshBasicMaterial key="loaded" map={texture} toneMapped={false} />
        ) : (
          <meshBasicMaterial key="loading" color={color} toneMapped={false} />
        )}
      </mesh>
      <GlassSheen width={PHONE_SCREEN_W} height={PHONE_SCREEN_H} />
      {/* Front camera notch */}
      <mesh position={[0, PHONE_HEIGHT / 2 - 0.14, 0.05]}>
        <circleGeometry args={[0.03, 16]} />
        <meshStandardMaterial color="#060a09" roughness={0.4} metalness={0.5} />
      </mesh>
      <pointLight position={[0, 0.8, 0.6]} intensity={0.6} color={color} distance={3} />
      <pointLight position={[0, -0.6, -1.4]} intensity={1.3} color={color} distance={3.5} />
      <ContactShadows position={[0, -PHONE_HEIGHT / 2 - 0.05, 0]} opacity={0.5} scale={3} blur={2.2} far={1} color="#000000" />
    </group>
  );
};

const ProjectScene = ({ screenImage, color = '#34d399', frameloop = 'always', device = 'laptop' }) => (
  <Canvas
    frameloop={frameloop}
    dpr={[1, 1.5]}
    camera={{ position: device === 'phone' ? [0, 0, 3.2] : [0, 0.45, 3.1], fov: 40 }}
    gl={{ antialias: true, alpha: true }}
  >
    <ambientLight intensity={0.95} />
    <directionalLight position={[2, 3, 2]} intensity={1.4} color="#ffffff" />
    <pointLight position={[-3, 1, -2]} intensity={1.1} color={color} />
    <pointLight position={[3, -1, 2]} intensity={0.6} color="#fbbf24" />
    <PresentationControls global snap speed={1.5} rotation={[0, 0.35, 0]} polar={[-0.3, 0.3]} azimuth={[-1, 1]}>
      {device === 'phone' ? (
        <Phone screenImage={screenImage} color={color} />
      ) : (
        <Laptop screenImage={screenImage} color={color} />
      )}
    </PresentationControls>
  </Canvas>
);

export default ProjectScene;
