import React, { Suspense, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import { Physics } from 'use-cannon';
import { Stars, Sky, Stats } from "@react-three/drei";
import Moon from '../Moon/Moon';
import Building from '../Building/Building';
import Ground from '../Ground/Ground';
import Art from '../Art/Art';
import Furniture from '../Furniture/Furniture';
import Camera from '../Camera/Camera';
import Player from '../Player/Player';
import Lights from '../Lights/Lights';
import AmbientSound from '../AmbientSound/AmbientSound';
import DustParticles from '../DustParticles/DustParticles';
import PostProcessing from '../PostProcessing/PostProcessing';


const App = ({ soundscape = false, dust = false, postProcessing = false }) => {
  const [night, setNight] = useState(true)
  const [performance, setPerformance] = useState(true)

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch(e.code) {
        case "KeyN":
          setNight(!night)
          return;
        case "KeyP":
          setPerformance(!performance)
          return;
        case "KeyF":
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
          } else {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            }
          }
          return;
        default: return;
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [night, performance])  


  return (

    <>
      {soundscape && <AmbientSound enabled={soundscape} />}
      <Canvas
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
      >
        <Camera fov={60} />
        
        {night ? 
          <>
            <Stars />
             <Suspense fallback={null}>
                <Moon />
             </Suspense>
            <fog attach="fog" args={["#272730", 30, 250]}/>
          </>
          : 
          <>
            <Sky sunPosition={[110, 170, -250]} /> 
            <fog attach="fog" args={["#f0f4f5", 30, 250]}/>
          </>
        }

        <Lights 
          night={night}
          performance={performance}
        />
             
        <Physics gravity={[0, -30, 0]}>
          <Suspense fallback={null}>
            <Ground />
            <Building />
            <Art />
            <Furniture />
          </Suspense>
          <Player />
        </Physics>
        {dust && <DustParticles />}
        {postProcessing && <PostProcessing />}
        <Stats showPanel={0} className="fps" />
      </Canvas>
    </>
  );
}

export default App;



