import React, { useRef, useEffect } from 'react';
import { useThree, useFrame, extend } from 'react-three-fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass';
import * as THREE from 'three';

extend({ EffectComposer, RenderPass, UnrealBloomPass, BokehPass });

const PostProcessing = () => {
  const { scene, gl, size, camera } = useThree();
  const composer = useRef();

  useEffect(() => {
    composer.current.setSize(size.width, size.height);
  }, [size]);

  useFrame(() => composer.current && composer.current.render(), 1);

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      <unrealBloomPass attachArray="passes" args={[new THREE.Vector2(size.width, size.height), 0.8, 0.4, 0]} />
      <bokehPass attachArray="passes" args={[scene, camera, { focus: 1.0, aperture: 0.025, maxblur: 0.01 }]} />
    </effectComposer>
  );
};

export default PostProcessing;
