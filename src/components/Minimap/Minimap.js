import React, { useRef, useContext } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { PlayerStateContext } from '../PlayerStateContext';

const MapCamera = () => {
  const { playerState } = useContext(PlayerStateContext);
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.position.set(
        playerState.position[0],
        playerState.position[1] + 50,
        playerState.position[2]
      );
      ref.current.lookAt(
        playerState.position[0],
        playerState.position[1],
        playerState.position[2]
      );
    }
  });
  return <orthographicCamera ref={ref} args={[-40, 40, 40, -40, 1, 200]} />;
};

const PlayerMarker = () => {
  const { playerState } = useContext(PlayerStateContext);
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.position.set(
        playerState.position[0],
        1,
        playerState.position[2]
      );
      ref.current.rotation.z = playerState.rotationY;
    }
  });
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <coneBufferGeometry args={[1, 2, 3]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};

const MapFloor = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]}>
    <planeBufferGeometry args={[140, 150]} />
    <meshBasicMaterial color="white" wireframe />
  </mesh>
);

const Minimap = () => (
  <Canvas
    orthographic
    className="minimap"
    style={{ position: 'absolute', right: 20, bottom: 20, width: 200, height: 200, pointerEvents: 'none' }}
  >
    <MapCamera />
    <MapFloor />
    <PlayerMarker />
  </Canvas>
);

export default Minimap;
