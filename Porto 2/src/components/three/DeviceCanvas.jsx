'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Float } from '@react-three/drei';
import { Laptop, Phone } from './Devices';

export default function DeviceCanvas({ image, device = 'laptop', accent = '#7c3aed', hovered = false }) {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 4.8], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 4]} intensity={1.6} color="#e0e7ff" />
      <pointLight position={[-4, 2, 3]} intensity={1.4} color={accent} />
      <pointLight position={[4, -2, -2]} intensity={0.8} color="#00f5ff" />
      <Suspense fallback={null}>
        <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.7}>
          {device === 'laptop' ? (
            <Laptop image={image} hovered={hovered} />
          ) : (
            <Phone image={image} hovered={hovered} />
          )}
        </Float>
        <ContactShadows position={[0, -1.6, 0]} opacity={0.45} scale={8} blur={2.6} far={3} color={accent} />
      </Suspense>
    </Canvas>
  );
}
