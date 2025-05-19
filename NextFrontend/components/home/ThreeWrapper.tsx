/** @format */

"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import { Galaxy } from "@/components/home/Galaxy";

const ThreeScene = () => {
  return (
    <div className="w-full h-full">
      {/* <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <OrbitControls />
        <Stars />
      </Canvas> */}

      <Canvas
        camera={{ position: [0, 0, 5] }}
        className="absolute top-0 left-0 w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Galaxy />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
