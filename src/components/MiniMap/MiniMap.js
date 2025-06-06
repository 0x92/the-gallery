import React, { useRef } from 'react';
import { Html, useThree, useFrame } from '@react-three/drei';
import * as THREE from 'three';

const MiniMap = ({ size = 150 }) => {
  const dotRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    const x = camera.position.x;
    const z = camera.position.z;
    const px = THREE.MathUtils.mapLinear(x, -120, 120, 0, size);
    const pz = THREE.MathUtils.mapLinear(z, 55, -20, 0, size);
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${px}px, ${pz}px)`;
    }
  });

  return (
    <Html fullscreen>
      <div className="minimap" style={{ width: size, height: size }}>
        <div ref={dotRef} className="minimap-dot" />
      </div>
    </Html>
  );
};

export default MiniMap;
