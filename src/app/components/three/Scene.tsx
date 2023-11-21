"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Float, Stage, MeshRefractionMaterial, Text3D } from "@react-three/drei";
import { Mesh } from "three";

function MeshComponent() {

  return (
    <Float
      speed={0.5} // Animation speed, defaults to 1
      rotationIntensity={1} // XYZ rotation intensity, defaults to 1
      floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[0, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      <Text3D font={"/gt.json"}>
      {`>_`}
        <meshNormalMaterial />
      </Text3D>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Canvas className='h-2xl w-2xl' shadows>
        <OrbitControls />
        <Stage adjustCamera intensity={0.5} shadows="accumulative" environment="city" >
          <MeshComponent />
        </Stage>
      </Canvas>
    </div>
  );
}