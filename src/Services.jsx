import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./NavBar";
import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene1 from "./Scene1";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { Sphere } from "./Shape";
import { Box } from "./Shape";

const Service = () => {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  const [animationIndex, setAnimationIndex] = useState(5);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scale: 1.5,
          scrub: 1,
          onUpdate: (self) => {
            setProgress(self.progress);
          },
        },
      })
      .to(sceneRef.current, {
        ease: "none",
        x: "0vw", // Reduced from 25vw to stay within viewport
        y: "100vh",
        scale: 1,
        onUpdate: () => setAnimationIndex(5),
      })
      .to(sceneRef.current, {
        ease: "none",
        x: "20vw", // Changed from -50vh to -15vw for consistency
        y: "200vh",
        scale: 1.2,
        onUpdate: () => setAnimationIndex(3),
      })
      .to(sceneRef.current, {
        ease: "none",
        x: "20vw", // Changed from 25vh to 10vw and reduced
        y: "300vh",
        onUpdate: () => setAnimationIndex(2),
      })
      .to(sceneRef.current, {
        ease: "none",
        x: "-30vw", // Changed from -70vh to -20vw for consistency
        y: "400vh",

        onUpdate: () => setAnimationIndex(0),
      });
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="bg-gray-100">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="bg-red-500 origin-left w-full h-2 md:h-3 fixed top-16 left-0 rounded-full z-40"
        />
      </div>

      <div
        ref={mainRef}
        className="w-full bg-gray-800 text-white overflow-hidden"
      >
        <div className="">
          <div
            ref={sceneRef}
            className="relative w-full h-screen flex items-center justify-center"
          >
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
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={2.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <Sphere />
            </Suspense>
            <OrbitControls autoRotate={true} enableZoom={false} />
          </Canvas>
          <h1 className="text-center text-2xl px-10 font-bold font-mono">
            Proefficient in React based Web Development. Also expertise in 3d
            based web development.
          </h1>
        </div>

        <div className="w-full h-screen flex items-center justify-center ">
          <h1 className="text-center text-2xl px-10 font-bold font-mono">
            React Native development with Expo.
          </h1>
          <div className="w-full h-full flex items-center justify-start">
            <Canvas camera={{ position: [4, 4, 5] }} className="pr-100">
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Suspense fallback={null}>
                <Box className="flex items-centre justify-start" />
              </Suspense>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>

        <div className="w-full h-screen flex items-center justify-start ">
          <h1 className="text-center text-2xl px-10 font-bold font-mono">
            I specialize in React, Tailwind CSS, Node.js, etc.<br></br>I enjoy
            turning complex problems into
            <br></br>simple, elegant solutions.
          </h1>
        </div>

        <div className="w-full h-screen flex items-center justify-end ">
          <h1 className="text-center text-2xl px-20 font-bold font-mono">
            I'm always curious about learning new technologies, <br></br>
            Python programming with django and Machine learning. CNN for
            projects.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Service;
