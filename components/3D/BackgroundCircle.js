//React
import React, { useRef } from "react"
// Three fiber
import { useFrame } from "@react-three/fiber"
//Framer motion

export default function BackgroundCircle({ mouseX, mouseY }) {
  const mesh = useRef()

  return (
    <mesh
      ref={mesh}
      position={[2, 0, 0]}
      scale={[1.5, 1.5, 1.5]}
      rotation={[mouseY * 0.5, mouseX * 0.5, 0]}
    >
      <circleGeometry args={[1, 64]} />
      <meshBasicMaterial color="#ff4d00" />
    </mesh>
  )
}
