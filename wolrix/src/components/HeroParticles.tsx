'use client';

import { useRef, useMemo } from 'react';
import { useFrame, RootState } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function HeroParticles() {
  const ref = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const mouseLight = useRef<THREE.PointLight>(null);
  
  // Increase particle count and create multiple layers
  const [particles1, particles2, particles3] = useMemo(() => {
    const count1 = 5000; // Close particles
    const count2 = 3000; // Mid-range particles
    const count3 = 2000; // Far particles
    
    const positions1 = new Float32Array(count1 * 3);
    const positions2 = new Float32Array(count2 * 3);
    const positions3 = new Float32Array(count3 * 3);
    
    // Close layer - dense center
    for (let i = 0; i < count1; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.pow(Math.random(), 0.5) * 3; // Concentrated distribution
      
      positions1[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions1[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions1[i * 3 + 2] = r * Math.cos(phi);
    }

    // Mid layer - wider spread
    for (let i = 0; i < count2; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2 + Math.random() * 2;
      
      positions2[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions2[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions2[i * 3 + 2] = r * Math.cos(phi);
    }

    // Far layer - ambient particles
    for (let i = 0; i < count3; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 4 + Math.random() * 2;
      
      positions3[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions3[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions3[i * 3 + 2] = r * Math.cos(phi);
    }

    return [positions1, positions2, positions3];
  }, []);

  useFrame((state: RootState) => {
    const { clock, mouse, camera } = state;
    if (ref.current) {
      // Enhanced mouse interaction
      mouseRef.current.x += (mouse.x * 0.5 - mouseRef.current.x) * 0.1;
      mouseRef.current.y += (mouse.y * 0.5 - mouseRef.current.y) * 0.1;

      // Dynamic rotation with mouse influence
      ref.current.rotation.x = mouseRef.current.y * 0.2 + Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
      ref.current.rotation.y = mouseRef.current.x * 0.2 + Math.cos(clock.getElapsedTime() * 0.15) * 0.2;
      
      // Breathing effect with mouse distance influence
      const mouseDistance = Math.sqrt(mouse.x * mouse.x + mouse.y * mouse.y);
      const scale = 1 + Math.sin(clock.getElapsedTime() * 0.5) * 0.05 + mouseDistance * 0.1;
      ref.current.scale.set(scale, scale, scale);

      // Update mouse light position
      if (mouseLight.current) {
        const vector = new THREE.Vector3(mouse.x * 5, mouse.y * 5, 2);
        vector.unproject(camera);
        mouseLight.current.position.set(vector.x, vector.y, vector.z);
      }
    }
  });

  return (
    <group>
      {/* Mouse-following light */}
      <pointLight
        ref={mouseLight}
        distance={6}
        intensity={1}
        color="#fff"
      />

      {/* Close layer - bright and responsive */}
      <Points ref={ref} positions={particles1} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Mid layer - subtle movement */}
      <Points positions={particles2} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#aaa"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Far layer - ambient particles */}
      <Points positions={particles3} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#666"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Ambient glow */}
      <mesh position={[0, 0, -2]} rotation={[0, 0, Math.PI / 4]}>
        <planeGeometry args={[12, 12]} />
        <meshBasicMaterial color="#112" transparent opacity={0.1} />
      </mesh>
    </group>
  );
} 