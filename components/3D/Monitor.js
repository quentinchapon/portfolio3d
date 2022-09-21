/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF("../Monitor.gltf")
  useFrame(
    (state, delta) => (
      (group.current.rotation.x += 0.001), (group.current.rotation.y += 0.001)
    )
  )

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube_Cube003.geometry}
        rotation={[-3, 4, -3]}
        scale={1}
      >
        <meshLambertMaterial color={"#ffffff"} transparent={true} opacity={1} />
      </mesh>
    </group>
  )
}

useGLTF.preload("/Monitor.gltf")
