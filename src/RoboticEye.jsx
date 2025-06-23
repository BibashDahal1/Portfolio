import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Eye(props) {
  const { nodes, materials } = useGLTF('/Portfolio/robotic_eye.glb')
  return (
    <group scale={[35,35,35]} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.056}>
        <group rotation={[-0.062, 0.001, -0.031]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Eyeball_Segment_Low_Poly_0.geometry}
            material={materials.White_Plastic}
          />
          <group position={[0, -1.444, 0]} scale={0.711}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera005_0.geometry}
              material={materials.Camera_Plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera005_1.geometry}
              material={materials.Camera_Lens}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Eyeball_Segment_Low_Poly002_0.geometry}
            material={materials.White_Plastic}
            rotation={[Math.PI, -Math.PI / 3, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Eyeball_Segment_Low_Poly001_0.geometry}
            material={materials.White_Plastic}
            rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Battery_0.geometry}
            material={materials.Copper}
            position={[0, -1.444, 0]}
            rotation={[Math.PI, -Math.PI / 3, Math.PI]}
            scale={0.711}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Battery002_0.geometry}
            material={materials.Copper}
            position={[0, -1.444, 0]}
            rotation={[-Math.PI, 1.047, -Math.PI]}
            scale={0.711}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Battery001_0.geometry}
            material={materials.Copper}
            position={[0, -1.444, 0]}
            scale={0.711}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Armature002_0.geometry}
            material={materials['Metal.001']}
            position={[0, 0.832, -0.001]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_Low_Poly_0.geometry}
            material={materials.Black_Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve005_0.geometry}
            material={materials['BezierCurve.006_0']}
            position={[-0.378, -0.902, 0.818]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Clip_0.geometry}
            material={materials.Metal}
            position={[0, 0.911, -0.697]}
            rotation={[-0.946, 0, 0]}
            scale={[0.145, 0.061, 0.061]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lens_Low_Poly_0.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Light_Low_Poly_0.geometry}
            material={materials.Light}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve006_0.geometry}
          material={materials['BezierCurve.006_0']}
          position={[-0.378, -0.902, 0.818]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Portfolio/robotic_eye.glb')