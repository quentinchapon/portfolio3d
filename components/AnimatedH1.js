import { motion } from "framer-motion"

export default function AnimatedH1({
  title,
  delay,
  className,
  isFirstAnimationPlaying,
  setIsFirstAnimationPlaying,
}) {
  const animationCompleted = () => {
    if (isFirstAnimationPlaying) {
      setIsFirstAnimationPlaying(false)
    }
  }
  const container = {
    hidden: {},
    show: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.03,
        duration: 1,
        type: "tween",
      },
    },
  }

  const letter = {
    hidden: { y: 200, marginRight: 50 },
    show: {
      y: 0,
      marginRight: 0,
      transition: { duration: 1, type: "spring" },
    },
  }

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {title.split("").map((char, index) => {
        return (
          <motion.span
            key={char + "-" + index}
            variants={letter}
            onAnimationComplete={(letter) => {
              if (isFirstAnimationPlaying && index === 31) {
                setIsFirstAnimationPlaying(false)
              }
            }}
          >
            {/* If one of the character is a white space, then  effectivly replace it by a white space */}
            {char === " " ? (char = char.replace(/ /g, "\u00a0")) : char}
          </motion.span>
        )
      })}
    </motion.h1>
  )
}
