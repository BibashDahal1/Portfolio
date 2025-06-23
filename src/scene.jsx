import React, {useRef, useEffect} from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { Eye } from './RoboticEye';
import { useGLTF } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);
const scene = ({progress=0}) => {

    const cameraRef= useRef(null);
    
    
    useFrame(()=>{
        // console.log(cameraRef.current.position);
        cameraRef.current.lookAt(0,0,0)
    })

    useEffect(()=>{
        const updateCamPos=()=>{
            const position= [[-3.4896, -4.664,4.345],
            [14.0307, 0.2348,6.3555],
            [-6.9387,-9.1954, 4.9783],
            [8.3154, -1.24786, 7.58479],
            [-12.964856, -7.7783, 2.9529]

        ];

        if (!cameraRef.current) return;


        if(position>=1){
            const [x, y, z] = position[position.length - 1];
            gsap.to(cameraRef.current.position,{
                x:7.4711,
                y:-12.4009,
                z:2.1379,
                duration:0.5,
                ease:"power1.out"
            })
            return
        }
        else{
        const segmentProgress = 1 / (position.length - 1);
        const segmentIndex = Math.min(
                Math.floor(progress / segmentProgress),
                position.length - 2
            );
        const percentage= (progress% segmentProgress)/ segmentProgress;
        
        const [startX, startY, startZ]= position[segmentIndex]
        const [endX, endY, endZ]= position[segmentIndex+1]

        const startPos = position[segmentIndex] || [0, 0, 0];
        const endPos = position[segmentIndex + 1] || [0, 0, 0];

        if (
      segmentIndex < 0 ||
      segmentIndex >= position.length - 1
        ) {
      console.warn("Invalid segmentIndex:", segmentIndex);
      return;
        }


        const x= startX+(endX-startX)*percentage;
        const y= startY+(endY-startY)*percentage;
        const z= startZ+(endZ-startZ)*percentage;
        gsap.to(cameraRef.current.position,{
            x:x,
            y:y,
            z:z,
            duration:.5,
            ease:'power1.out'
        })

        }
        
        };
        updateCamPos()
    },[progress])
  
  
    return (
    <>
    <PerspectiveCamera makeDefault 
    ref={cameraRef}
    // position={[-3.4896, -4.664,4.345]} 
    fov={45} near={.1} 
    far={1000}
    />
    <Environment preset='city' />
    <Eye />
    {/* <axesHelper args={[5]} /> */}
    {/* <OrbitControls /> */}
    </>
  )
}

export default scene