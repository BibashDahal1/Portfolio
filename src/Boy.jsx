import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'


const Boy=(props)=> {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Portfolio/boy.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group scale={[3,3,3]} ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="boy" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Ch09"
            geometry={nodes.Ch09.geometry}
            material={materials.Ch09_body}
            skeleton={nodes.Ch09.skeleton}
          />
          <primitive object={nodes.mixamorig6Hips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/boy.glb')

export default Boy