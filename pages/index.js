// Next
import Head from "next/head"
import Image from "next/image"
//React
import { useState, useRef } from "react"
//Layout
import Layout from "../components/Layout"
// Three fiber imports
import { Canvas, useFrame, useThree } from "@react-three/fiber"
//3D Objects
import BackgroundCircle from "../components/3D/BackgroundCircle"
import Monitor from "../components/3D/Monitor"
//Hooks
import useMousePosition from "../hooks/useMousePosition"
import useViewportSize from "../hooks/useViewportSize"
//Components
import AnimatedH1 from "../components/AnimatedH1"
import AnimatedH1Almost from "../components/AnimatedH1Almost"
//Parallax
import { Parallax } from "react-scroll-parallax"
// Framer Motion
import { motion } from "framer-motion-3d"

export default function Home() {
  // Text rotation
  const textRotation = {
    hidden: { rotateY: -45 },
    show: {
      rotateY: 0,
      transition: { duration: 2, type: "easeOut" },
    },
  }
  //Device size
  const [viewportWidth, viewportHeight] = useViewportSize()
  //Mouse position
  let [mouseX, mouseY] = useMousePosition()
  mouseX = mouseX / viewportWidth - 0.5
  mouseY = mouseY / viewportHeight - 0.5

  // Animation control
  const [isFirstAnimationPlaying, setIsFirstAnimationPlaying] = useState(true)

  return (
    <Layout>
      <div>
        <section className="flex w-screen h-screen">
          <div className="self-center ml-[8vmax] justify-center">
            <Parallax translateY={[-20, 20]}>
              <AnimatedH1
                title="Hello, I'm Quentin"
                className="overflow-hidden flex  font-sans  text-[4vmax] h-[6vmax]"
                delay={0}
              />
            </Parallax>
            <Parallax translateY={[-40, 40]}>
              <AnimatedH1
                title="an interactive designer"
                className="-mt-6 overflow-hidden flex font-sans  text-[4vmax] h-[6vmax]"
                delay={0.6}
              />
            </Parallax>
            <Parallax translateY={[-100, 100]}>
              {isFirstAnimationPlaying === true ? (
                <AnimatedH1
                  title="UX, UI and front-end development"
                  className="overflow-hidden flex font-serif text-[2vmax] h-[3vmax]"
                  delay={1.5}
                  isFirstAnimationPlaying={isFirstAnimationPlaying}
                  setIsFirstAnimationPlaying={setIsFirstAnimationPlaying}
                />
              ) : (
                <AnimatedH1Almost title="almost" delay={1.5} />
              )}
            </Parallax>
          </div>
          <div className="fixed w-full h-full -z-[1]">
            <Canvas camera={{ zoom: 30, position: [0, 0, 100] }}>
              <ambientLight intensity={0.1} />
              <directionalLight position={[0, 0, 2]} intensity={0.8} />
              <Monitor position={[2, 0, 1]} scale={[0.5, 0.5, 0.5]} />
              <BackgroundCircle mouseX={mouseX} mouseY={mouseY} />
            </Canvas>
          </div>
        </section>
        <section className="w-screen h-screen">
          <h2 className="w-full text-center absolute text-gray-300 font-serif text-[5vmax] -translate-y-[5vmax]">
            Selected work
          </h2>
        </section>
        <section className="w-screen h-screen"></section>
        <section className="w-screen h-screen"></section>
      </div>
    </Layout>
  )
}
