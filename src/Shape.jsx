import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Decal } from "@react-three/drei";
import * as THREE from "three";

export const Sphere = () => {
  const texture = useLoader(TextureLoader, "/Portfolio/react.png");
  const texture1 = useLoader(TextureLoader, "/Portfolio/gradientGreen.jpg");

  return (
    <>
      <mesh>
        <sphereGeometry args={[2, 8, 64]} />
        <meshStandardMaterial color=" #C5E8B7" map={texture1} />
        <Decal
          position={[0, 0, 1.766]}
          rotation={[0, 0, 0]}
          scale={2}
          map={texture}
        />

        <Decal
          position={[0, 0, -1.766]}
          rotation={[0, Math.PI, 0]}
          scale={2}
          map={texture}
        />

        <Decal
          position={[-1.766, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={2}
          map={texture}
        />

        <Decal
          position={[1.766, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={2}
          map={texture}
        />

        <Decal
          position={[0, -1.766, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={2}
          map={texture}
        />

        <Decal
          position={[0, 1.766, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={2}
          map={texture}
        />

        {/* <mesh position={[0, 0, 1]}>
                <planeGeometry args={[2, 2]} />
                <meshBasicMaterial map={texture} transparent />
            </mesh> */}
      </mesh>
    </>
  );
};

export const Box = () => {
  const texture = useLoader(TextureLoader, "/Portfolio/b.png"); // Image for one face

  //   const materials = [
  //     new THREE.MeshStandardMaterial({ color: 'white' }),     // right
  //     new THREE.MeshStandardMaterial({ color: 'white' }),     // left
  //     new THREE.MeshStandardMaterial({ color: 'white' }),     // top
  //     new THREE.MeshStandardMaterial({ color: 'white' }),     // bottom
  //     new THREE.MeshStandardMaterial({ map: texture }),       // front ✅ (apply image here)
  //     new THREE.MeshStandardMaterial({ color: 'white' }),     // back
  //   ];

  return (
    <>
      {/* <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial attachArray="material" args={materials} />
            </mesh> */}

      {/* Main box */}
      <mesh>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Sticker image plane */}
      <mesh position={[0, 0, 1.51]}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>

      <mesh position={[0, 0, -1.51]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>
    </>
  );
};

// export default {Sphere, Box};

{
  /* Front */
}
//   <mesh position={[0, 0, 0.51]} rotation={[0, 0, 0]}>
//     <planeGeometry args={[0.5, 0.5]} />
//     <meshBasicMaterial map={texture} transparent />
//   </mesh>

{
  /* Back */
}
//   <mesh position={[0, 0, -0.51]} rotation={[0, Math.PI, 0]}>
//     <planeGeometry args={[0.5, 0.5]} />
//     <meshBasicMaterial map={texture} transparent />
//   </mesh>

{
  /* Right */
}
//   <mesh position={[0.51, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
//     <planeGeometry args={[0.5, 0.5]} />
//     <meshBasicMaterial map={texture} transparent />
//   </mesh>

{
  /* Left */
}
//   <mesh position={[-0.51, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
//     <planeGeometry args={[0.5, 0.5]} />
//     <meshBasicMaterial map={texture} transparent />
//   </mesh>

{
  /* Top */
}
//   <mesh position={[0, 0.51, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//     <planeGeometry args={[0.5, 0.5]} />
//     <meshBasicMaterial map={texture} transparent />
//   </mesh>

{
  /* Bottom */
}
//   <mesh position={[0, -0.51, 0]} rotation={[Math.PI / 2, 0, 0]}>
//     <planeGeometry args={[0.5, 0.5]} />
//     <meshBasicMaterial map={texture} transparent />

// For decal

{
  /* Front */
}
// <Decal
//   position={[0, 0, 1.5]}
//   rotation={[0, 0, 0]}
//   scale={0.7}
//   map={texture}
// />

// {/* Back */}
// <Decal
//   position={[0, 0, -1.5]}
//   rotation={[0, Math.PI, 0]}
//   scale={0.7}
//   map={texture}
// />

// {/* Right */}
// <Decal
//   position={[1.5, 0, 0]}
//   rotation={[0, -Math.PI / 2, 0]}
//   scale={0.7}
//   map={texture}
// />

// {/* Left */}
// <Decal
//   position={[-1.5, 0, 0]}
//   rotation={[0, Math.PI / 2, 0]}
//   scale={0.7}
//   map={texture}
// />

// {/* Top */}
// <Decal
//   position={[0, 1.5, 0]}
//   rotation=[[-Math.PI / 2, 0, 0]]
//   scale={0.7}
//   map={texture}
// />

// {/* Bottom */}
// <Decal
//   position={[0, -1.5, 0]}
//   rotation={[Math.PI / 2, 0, 0]}
//   scale={0.7}
//   map={texture}
// />
