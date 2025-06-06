import React from 'react';
import Wall from '../Wall/Wall';
import WindowFrame from '../WindowFrame/WindowFrame';
import Glass from '../Glass/Glass';

const Building = () => {
  
    return (
        <>
            <Wall 
                position={[0, 0, -13.5]}
                modelUrl={process.env.PUBLIC_URL + "/assets/3D/Wall/scene.gltf"}
                mapUrl={process.env.PUBLIC_URL + "/assets/3D/Wall/Textures/White_Wall.jpg"}
                normalMapUrl={process.env.PUBLIC_URL + "/assets/3D/Wall/Textures/White_Wall_NORMAL.jpg"}
            />

            {/* side windows */}
            <WindowFrame 
                scale={[0.008, 0.008, 0.008]}
                position={[6.5, 8.5, -15]}
                rotation={[0, Math.PI ,0]}
                modelUrl={process.env.PUBLIC_URL + "/assets/3D/WindowNoGlassL/scene.gltf"}
                mapUrl={process.env.PUBLIC_URL + "/assets/3D/WindowNoGlassL/Textures/Material_49_baseColor.png"}
            />
            <WindowFrame 
                scale={[0.008, 0.008, 0.008]}
                position={[-6.5, 8.5, -15]}
                rotation={[0, Math.PI ,0]}
                modelUrl={process.env.PUBLIC_URL + "/assets/3D/WindowNoGlassR/scene.gltf"}
                mapUrl={process.env.PUBLIC_URL + "/assets/3D/WindowNoGlassR/Textures/Material_49_baseColor.png"}
            />
            <Glass            
                scale={[0.008, 0.008, 0.008]}
                position={[6.5, 8.5, -15]}
                rotation={[0, 0, 0]}
                url={process.env.PUBLIC_URL + "/assets/3D/WindowGlassL/scene.gltf"}                        
            />
            <Glass            
                scale={[0.008, 0.008, 0.008]}
                position={[-6.5, 8.5, -15]}
                rotation={[0, 0, 0]}
                url={process.env.PUBLIC_URL + "/assets/3D/WindowGlassR/scene.gltf"}                        
            />

            {/* roof */}
            <WindowFrame 
                scale={[2.7, 2.7, 2.7]}
                position={[0, 27, 13.2]}
                rotation={[0, 0, 0]}
                modelUrl={process.env.PUBLIC_URL + "/assets/3D/RoofNoGlass/scene.gltf"}
                mapUrl={process.env.PUBLIC_URL + "/assets/3D/RoofNoGlass/Textures/Material_49_baseColor.png"}
            />
            <Glass            
                scale={[2.7, 2.7, 2.7]}
                position={[0, 27, 13.2]}
                rotation={[0, 0, 0]}
                url={process.env.PUBLIC_URL + "/assets/3D/RoofGlass/scene.gltf"}                        
            />
        </>

    )
  }

  export default Building;