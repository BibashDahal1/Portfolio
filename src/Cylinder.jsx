import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const Cylinder = () => {
  return (
    <>
      <Canvas flat camera={{ fov: 60 }}>
        <ambientLight intensity={1.5} />
        <OrbitControls enableZoom={false} />
        <Scene />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={1}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
        </EffectComposer>
      </Canvas>
    </>
  );
};

const Scene = () => {
  const texture = useTexture("/Portfolio/merged.png");
  let cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rotation.y -= delta; // Rotate the cylinder
  });

  return (
    <>
      <group rotation={[0, 1.4, 0.3]}>
        <mesh ref={cyl}>
          <cylinderGeometry args={[2, 2, 2, 32, 32, true]} />
          <meshStandardMaterial
            side={THREE.DoubleSide}
            map={texture}
            transparent
          />
        </mesh>
      </group>
    </>
  );
};

export default Cylinder;
