// React
import { useState, useEffect } from "react"

const useMousePosition = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setY(e.clientY)
      setX(e.clientX)
    })
  }, [])

  return [x, y]
}

export default useMousePosition
