import{ useEffect, useState } from "react";
import {motion} from "framer-motion";
import Navbar from "./NavBar";
import { useScroll } from 'framer-motion';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Scene from './scene';
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [progress, setProgress]= useState(0);
  
  useEffect(()=>{
    gsap.timeline({
      scrollTrigger:{
        trigger:mainRef.current,
        start:"top top",
        end:"bottom bottom",
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
    })
    .to(sceneRef.current,{
      ease:'none',
      x:'-25vw', // Changed from -50vh to -15vw for consistency
      y:'200vh',
    })
    .to(sceneRef.current,{
      ease:'none',
      x:'20vw', // Changed from 25vh to 10vw and reduced
      y:'300vh',
    })
    .to(sceneRef.current,{
      ease:'none',
      x:'-30vw', // Changed from -70vh to -20vw for consistency
      y:'400vh',
    })
  },[])
  
  return(
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      
      <div className='bg-gray-100'>
        <motion.div 
          style={{ scaleX: scrollYProgress }}
          className='bg-red-500 origin-left w-full h-2 md:h-3 fixed top-16 left-0 rounded-full z-40'
        />
      </div>

      {/* Added overflow-hidden to prevent horizontal scroll */}
      <div ref={mainRef} className="w-full bg-gray-800 text-white overflow-hidden">
        <div className="">
          <div ref={sceneRef} className="relative w-full h-screen flex items-center justify-center">
            <Canvas className="absolute inset-0">
              <Suspense fallback={null}>
                <Scene progress={progress}/>
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

export default About;