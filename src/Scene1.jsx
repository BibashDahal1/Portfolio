import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, PerspectiveCamera, useGLTF, useAnimations } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Boy = ({ animationIndex = 5 }) => {
  const { scene, animations } = useGLTF('/Portfolio/boy.glb');
  const { actions, names } = useAnimations(animations, scene);
  const currentAction = useRef(null);

  useEffect(() => {
    if (!actions || names.length === 0) return;

    const animName = names[animationIndex];
    const nextAction = actions[animName];

    if (!nextAction) return;

    if (currentAction.current && currentAction.current !== nextAction) {
      currentAction.current.fadeOut(0.3);
    }

    nextAction
      .reset()
      .fadeIn(0.3)
      .play();

    currentAction.current = nextAction;
  }, [animationIndex, actions, names]);

  return <primitive object={scene} scale={[2,2,2]} />;
};

const Scene1 = ({ progress = 0 ,animationIndex }) => {
  const cameraRef = useRef(null);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  useEffect(() => {
    const updateCamPos = () => {
      const position = [
        [0, 0, 10],
        [0,0,10],
        [0,0,10],
        [0,0,10],
        [0,0,10]
      ];

      if (!cameraRef.current) return;

      if (progress >= 1) {
        gsap.to(cameraRef.current.position, {
          x: 7.4711,
          y: -12.4009,
          z: 2.1379,
          duration: 0.5,
          ease: 'power1.out'
        });
        return;
      }

      const segmentProgress = 1 / (position.length - 1);
      const segmentIndex = Math.min(
        Math.floor(progress / segmentProgress),
        position.length - 2
      );
      const percentage = (progress % segmentProgress) / segmentProgress;

      if (
        segmentIndex < 0 ||
        segmentIndex >= position.length - 1
      ) {
        console.warn('Invalid segmentIndex:', segmentIndex);
        return;
      }

      const [startX, startY, startZ] = position[segmentIndex];
      const [endX, endY, endZ] = position[segmentIndex + 1];

      const x = startX + (endX - startX) * percentage;
      const y = startY + (endY - startY) * percentage;
      const z = startZ + (endZ - startZ) * percentage;

      gsap.to(cameraRef.current.position, {
        x,
        y,
        z,
        duration: 0.5,
        ease: 'power1.out'
      });
    };

    updateCamPos();
  }, [progress]);

  return (
    <>
      <PerspectiveCamera
        makeDefault
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={1000}
      />
      <Environment preset="city" />
      <Boy animationIndex={animationIndex } />
      {/* <axesHelper args={[5]} /> */}
      {/* <OrbitControls /> */}
    </>
  );
};

export default Scene1;
