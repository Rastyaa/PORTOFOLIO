'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import { Laptop } from './Devices';

export default function FeaturedCanvas({ image, lidAngleRef }) {
  return (
    <Canvas
      camera={{ position: [0, 0.7, 6.4], fov: 38 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[3, 6, 4]} intensity={1.8} color="#e0e7ff" />
      <pointLight position={[-5, 2, 3]} intensity={2} color="#7c3aed" />
      <pointLight position={[5, 1, -2]} intensity={1.2} color="#00f5ff" />
      <Suspense fallback={null}>
        <group scale={0.85} position={[0, 0.45, 0]}>
          <Laptop image={image} lidAngleRef={lidAngleRef} />
        </group>
        <ContactShadows position={[0, -0.35, 0]} opacity={0.5} scale={10} blur={2.8} far={3} color="#7c3aed" />
      </Suspense>
    </Canvas>
  );
}
