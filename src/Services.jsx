import Navbar from "./NavBar"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import { useLoader } from "@react-three/fiber"
import { Suspense } from "react";

const TourusKnot =()=>{
    return(
        <mesh>
            <torusGeometry args={[10,0.8,64,100]} />
            <meshStandardMaterial color="orange" /> 
        </mesh>
    )
}

const ImageInsideTorus = () => {
    const texture = useLoader(THREE.TextureLoader, 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80');

    return (
        <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[8,10, 10]}  />
            <meshBasicMaterial map={texture} transparent={true} />
        </mesh>
    );
};

const Service = () =>{


    return(
        <>
        <Navbar />
        <Canvas camera={{ position: [10,10,10] }}>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} />
            <TourusKnot />
            <Suspense fallback={null}>
            <ImageInsideTorus />
            </Suspense>
            <OrbitControls 
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2}
            autoRotate={true}
            autoRotateSpeed={4.0}/>
        </Canvas>
        </>
    )
}

export default Service