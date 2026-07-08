import { useEffect, useState } from 'react';
import { PresentationControls, RoundedBox } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { CanvasTexture, SRGBColorSpace } from 'three';

const MAX_TEXTURE_WIDTH = 768;

// Screenshots are full-resolution marketing images (~1-2MB); downscaling
// before upload keeps GPU memory sane and avoids WebGL context loss on
// constrained/software-rendered devices.
const useScaledTexture = (url) => {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    let cancelled = false;
    let createdTexture;
    const img = new Image();
    img.onload = () => {
      if (cancelled) return;
      const scale = Math.min(1, MAX_TEXTURE_WIDTH / img.width);
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      createdTexture = new CanvasTexture(canvas);
      createdTexture.colorSpace = SRGBColorSpace;
      setTexture(createdTexture);
    };
    img.src = url;

    return () => {
      cancelled = true;
      createdTexture?.dispose();
    };
  }, [url]);

  return texture;
};

const SCREEN_HEIGHT = 1.5;
// Rotation of the hinge pivot: 0 = screen standing straight up, negative =
// reclined back (top leans away from camera) like a laptop opened for viewing.
const OPEN_ANGLE = -0.42;

const Screen = ({ screenImage, color }) => {
  const texture = useScaledTexture(screenImage);

  return (
    <group position={[0, 0.06, -0.8]} rotation={[OPEN_ANGLE, 0, 0]}>
      <group position={[0, SCREEN_HEIGHT / 2, 0]}>
        <RoundedBox args={[2.4, SCREEN_HEIGHT, 0.06]} radius={0.05} smoothness={4}>
          <meshStandardMaterial color="#0a0f0d" roughness={0.4} metalness={0.3} />
        </RoundedBox>
        <mesh position={[0, 0, 0.032]}>
          <planeGeometry args={[2.2, 1.32]} />
          {texture ? (
            <meshBasicMaterial key="loaded" map={texture} toneMapped={false} />
          ) : (
            <meshBasicMaterial key="loading" color={color} toneMapped={false} />
          )}
        </mesh>
      </group>
    </group>
  );
};

const Laptop = ({ screenImage, color }) => (
  <group position={[0, -0.25, 0.2]} rotation={[0.1, 0, 0]}>
    <RoundedBox args={[2.4, 0.12, 1.6]} radius={0.05} smoothness={4} position={[0, 0, 0]}>
      <meshStandardMaterial color="#12181a" roughness={0.35} metalness={0.7} />
    </RoundedBox>
    <RoundedBox args={[1.9, 0.01, 1.15]} radius={0.03} smoothness={2} position={[0, 0.065, -0.05]}>
      <meshStandardMaterial color="#060a09" roughness={0.6} metalness={0.4} />
    </RoundedBox>
    <RoundedBox args={[0.55, 0.01, 0.35]} radius={0.03} smoothness={2} position={[0, 0.065, 0.55]}>
      <meshStandardMaterial color="#060a09" roughness={0.5} metalness={0.5} />
    </RoundedBox>
    <Screen screenImage={screenImage} color={color} />
    <pointLight position={[0, 1.2, -0.3]} intensity={0.8} color={color} distance={3.5} />
  </group>
);

const ProjectScene = ({ screenImage, color = '#34d399', frameloop = 'always' }) => (
  <Canvas frameloop={frameloop} dpr={[1, 1.5]} camera={{ position: [0, 0.45, 3.1], fov: 40 }} gl={{ antialias: true, alpha: true }}>
    <ambientLight intensity={0.95} />
    <directionalLight position={[2, 3, 2]} intensity={1.4} color="#ffffff" />
    <pointLight position={[-3, 1, -2]} intensity={1.1} color={color} />
    <pointLight position={[3, -1, 2]} intensity={0.6} color="#fbbf24" />
    <PresentationControls global snap speed={1.5} rotation={[0, 0.35, 0]} polar={[-0.3, 0.3]} azimuth={[-1, 1]}>
      <Laptop screenImage={screenImage} color={color} />
    </PresentationControls>
  </Canvas>
);

export default ProjectScene;
