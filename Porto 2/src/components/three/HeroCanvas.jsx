'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 900 }) {
  const ref = useRef();

  const positions = useMemo(() => {
    // Deterministic PRNG keeps the field stable across re-renders.
    let seed = 1337;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 6 + rand() * 8;
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(phi) - 4;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.02;
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      state.pointer.y * 0.1,
      0.02
    );
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#00f5ff"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Orb() {
  const group = useRef();

  useFrame((state) => {
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      state.pointer.x * 0.5,
      0.04
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -state.pointer.y * 0.35,
      0.04
    );
  });

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh scale={1.35}>
          <icosahedronGeometry args={[1, 24]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            emissive="#4c1d95"
            emissiveIntensity={0.55}
            distort={0.35}
            speed={1.8}
            roughness={0.2}
            metalness={0.7}
          />
        </mesh>
        <mesh scale={2.05} rotation={[Math.PI / 3, 0, Math.PI / 5]}>
          <torusGeometry args={[1, 0.012, 16, 120]} />
          <meshBasicMaterial color="#00f5ff" transparent opacity={0.5} />
        </mesh>
        <mesh scale={2.35} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
          <torusGeometry args={[1, 0.008, 16, 120]} />
          <meshBasicMaterial color="#ff4ecd" transparent opacity={0.35} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} color="#c4b5fd" />
      <pointLight position={[-5, -3, 2]} intensity={2.2} color="#00f5ff" />
      <pointLight position={[5, 2, -3]} intensity={1.6} color="#ff4ecd" />
      <Particles />
      <Orb />
    </Canvas>
  );
}
