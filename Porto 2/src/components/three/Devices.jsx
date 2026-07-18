'use client';

import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function useScreenTexture(image, planeAspect) {
  const texture = useTexture(image);
  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
    texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    // "Cover" crop so tall page screenshots aren't squashed; keep the page top visible.
    const img = texture.image;
    if (img?.width && img?.height) {
      const imgAspect = img.width / img.height;
      if (imgAspect > planeAspect) {
        const r = planeAspect / imgAspect;
        texture.repeat.set(r, 1);
        texture.offset.set((1 - r) / 2, 0);
      } else {
        const r = imgAspect / planeAspect;
        texture.repeat.set(1, r);
        texture.offset.set(0, 1 - r);
      }
    }
    texture.needsUpdate = true;
  }, [texture, planeAspect]);
  return texture;
}

/**
 * Stylized MacBook. `lidAngle` is the hinge rotation in radians:
 * 0 = closed flat, about -1.78 = comfortably open.
 * Pass `lidAngleRef` (a ref holding a number) to drive it per-frame (scroll scenes).
 */
export function Laptop({ image, hovered = false, lidAngle = -1.78, lidAngleRef = null }) {
  const group = useRef();
  const hinge = useRef();
  const screenMat = useRef();

  const texture = useScreenTexture(image, 3.15 / 1.98);

  useFrame((state, delta) => {
    // Mouse parallax + slow rotation on hover
    const targetY = state.pointer.x * 0.35 + (hovered ? Math.sin(state.clock.elapsedTime * 0.6) * 0.18 : 0);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.pointer.y * 0.12, 0.05);

    if (lidAngleRef) {
      hinge.current.rotation.x = lidAngleRef.current;
    } else {
      hinge.current.rotation.x = THREE.MathUtils.lerp(hinge.current.rotation.x, lidAngle, 0.08);
    }

    // Screen brightness up on hover
    const target = hovered ? 1 : 0.78;
    screenMat.current.color.setScalar(
      THREE.MathUtils.lerp(screenMat.current.color.r, target, delta * 6)
    );
  });

  return (
    <group ref={group} position={[0, -0.55, 0]}>
      {/* Base */}
      <RoundedBox args={[3.4, 0.13, 2.2]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color="#181b27" metalness={0.85} roughness={0.35} />
      </RoundedBox>
      {/* Keyboard deck */}
      <mesh position={[0, 0.068, 0.08]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3.1, 1.6]} />
        <meshStandardMaterial color="#10121c" metalness={0.6} roughness={0.6} />
      </mesh>
      {/* Trackpad */}
      <mesh position={[0, 0.069, 0.78]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.1, 0.55]} />
        <meshStandardMaterial color="#1c2030" metalness={0.7} roughness={0.4} />
      </mesh>

      {/* Lid, hinged at the rear edge */}
      <group ref={hinge} position={[0, 0.065, -1.06]}>
        <group position={[0, 0, 1.06]}>
          <RoundedBox args={[3.4, 0.09, 2.2]} radius={0.04} smoothness={4}>
            <meshStandardMaterial color="#1c1f2e" metalness={0.9} roughness={0.3} />
          </RoundedBox>
          {/* Screen (inner face of the lid) */}
          <mesh position={[0, -0.06, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry args={[3.15, 1.98]} />
            <meshBasicMaterial ref={screenMat} map={texture} toneMapped={false} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

/** Stylized iPhone with the project screenshot as its screen. */
export function Phone({ image, hovered = false }) {
  const group = useRef();
  const screenMat = useRef();

  const texture = useScreenTexture(image, 1.08 / 2.32);

  useFrame((state, delta) => {
    const targetY = state.pointer.x * 0.45 + (hovered ? Math.sin(state.clock.elapsedTime * 0.6) * 0.22 : -0.25);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.pointer.y * 0.15, 0.05);

    const target = hovered ? 1 : 0.78;
    screenMat.current.color.setScalar(
      THREE.MathUtils.lerp(screenMat.current.color.r, target, delta * 6)
    );
  });

  return (
    <group ref={group} scale={1.05}>
      {/* Body */}
      <RoundedBox args={[1.2, 2.45, 0.1]} radius={0.09} smoothness={4}>
        <meshStandardMaterial color="#1c1f2e" metalness={0.9} roughness={0.28} />
      </RoundedBox>
      {/* Screen */}
      <mesh position={[0, 0, 0.055]}>
        <planeGeometry args={[1.08, 2.32]} />
        <meshBasicMaterial ref={screenMat} map={texture} toneMapped={false} />
      </mesh>
      {/* Dynamic island */}
      <mesh position={[0, 1.02, 0.06]} rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.035, 0.18, 6, 12]} />
        <meshStandardMaterial color="#05060a" roughness={0.4} />
      </mesh>
    </group>
  );
}
