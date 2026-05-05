"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import styles from './Background3D.module.css';

function AbstractNodes(props) {
  const ref = useRef();
  
  const sphere = useMemo(() => {
    // Increase points to make the background richer
    return random.inSphere(new Float32Array(3000 * 3), { radius: 20 });
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#10b981"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.3}
        />
      </Points>
    </group>
  );
}

function GridFloor() {
  const gridRef = useRef();

  useFrame((state, delta) => {
    if (gridRef.current) {
      // Create a forward moving effect
      gridRef.current.position.z = (state.clock.elapsedTime * 0.5) % 2;
    }
  });

  return (
    <group ref={gridRef} position={[0, -3, 0]}>
      {/* Subtle Floor grid */}
      <gridHelper args={[60, 60, '#334155', '#1e293b']} />
    </group>
  );
}

export default function Background3D() {
  return (
    <div className={styles.canvasContainer}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <fog attach="fog" args={['#0b1121', 10, 30]} />
        <AbstractNodes />
        <GridFloor />
      </Canvas>
    </div>
  );
}
