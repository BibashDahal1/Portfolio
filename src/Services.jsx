import{ useEffect, useState } from "react";
import {motion} from "framer-motion";
import Navbar from "./NavBar";
import { useScroll } from 'framer-motion';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Scene1 from './Scene1';
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";


const Service = () =>{
    const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [progress, setProgress]= useState(0);
  const [animationIndex, setAnimationIndex] = useState(5);
  
  useEffect(()=>{
    gsap.timeline({
      scrollTrigger:{
        trigger:mainRef.current,
        start:"top top",
        end:"bottom bottom",
        scale:1.5,
        scrub:1,
        onUpdate:(self)=>{
          setProgress(self.progress)
        }
      }
    })
    .to(sceneRef.current,{
      ease:'none',
      x:'25vw', // Reduced from 25vw to stay within viewport
      y:'100vh',
      scale:1,
      onUpdate: () => setAnimationIndex(5),
    })
    .to(sceneRef.current,{
      ease:'none',
      x:'-30vw', // Changed from -50vh to -15vw for consistency
      y:'200vh',
      scale:1.2,
      onUpdate: () => setAnimationIndex(3),
    })
    .to(sceneRef.current,{
      ease:'none',
      x:'20vw', // Changed from 25vh to 10vw and reduced
      y:'300vh',
      onUpdate: () => setAnimationIndex(2),
    })
    .to(sceneRef.current,{
      ease:'none',
      x:'-30vw', // Changed from -70vh to -20vw for consistency
      y:'400vh',
    
      onUpdate: () => setAnimationIndex(0),
    });
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    }
  },[])


    return(
        <>
        <Navbar />



        <div ref={mainRef} className="w-full bg-gray-800 text-white overflow-hidden">
        <div className="">
          <div ref={sceneRef} className="relative w-full h-screen flex items-center justify-center">
            <Canvas className="absolute inset-0">
              <Suspense fallback={null}>
                <Scene1 progress={progress} animationIndex={animationIndex} />
              </Suspense>
            </Canvas>
          </div>

          <div className="absolute py-10 inset-0 flex items-center justify-center ">
            <h1 className="text-2xl font-bold font-mono text-white">
              BIBASH DAHAL
            </h1>
          </div>
        </div>

        <div className="relative w-full h-screen flex items-center justify-start">
          <h1 className="text-center text-2xl px-20 font-bold font-mono"> 
            Hi! I'm Bibash Dahal a fullstack developer.<br></br>
            Enjoy and love building beautiful and complex websites.
          </h1>
        </div>
        
        <div className="w-full h-screen flex items-center justify-end ">
          <h1 className="text-center text-2xl px-20 font-bold font-mono">
            I started my journey in my first year of my college.<br></br>
            Continuing the journey in my last year with same <br></br>
            passion and enthusiasm.
          </h1>
        </div>

        <div className="w-full h-screen flex items-center justify-start ">
          <h1 className="text-center text-2xl px-10 font-bold font-mono">
            I specialize in React, Tailwind CSS, Node.js, etc.<br></br>
            I enjoy turning complex problems into 
            <br></br>simple, elegant solutions.
          </h1>
        </div>

        <div className="w-full h-screen flex items-center justify-end ">
          <h1 className="text-center text-2xl px-20 font-bold font-mono">
            I'm always curious about learning new technologies, <br></br>
            pushing creative boundaries, and building things that make an impact.
          </h1>
        </div>
      </div>
        </>
    )
}

export default Service