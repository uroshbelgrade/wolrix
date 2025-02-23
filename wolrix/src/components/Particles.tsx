'use client';

import { useRef } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import { random } from 'maath';
import { useFrame } from '@react-three/fiber';

export function Particles({ count = 5000 }) {
  const ref = useRef<any>();
  const sphere = random.inSphere(new Float32Array(count * 3), { radius: 1.5 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
} 