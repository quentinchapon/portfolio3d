import { motion } from "framer-motion"

export default function AnimatedH1Almost({ title }) {
  return (
    <div className="flex">
      <h1 className="overflow-hidden flex font-serif text-[2vmax] h-[6vmax]">
        UX, UI and&nbsp;
      </h1>
      <motion.span
        className="text-acidOrange overflow-hidden flex font-serif text-[2vmax] h-[6vmax]"
        initial={{
          filter: "blur(30px)",
          opacity: 0,
          width: 0,
        }}
        animate={{
          filter: "blur(0px)",
          opacity: 1,
          width: "auto",
          transition: { type: "spring", stiffness: 60 },
        }}
      >
        {title}
      </motion.span>
      <h1 className="overflow-hidden flex font-serif text-[2vmax] h-[6vmax]">
        &nbsp;front-end development
      </h1>
    </div>
  )
}
