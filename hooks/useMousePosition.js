// React
import { useState, useEffect } from "react"

const useMousePosition = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    // component is mounted and window is available
    window.addEventListener("mousemove", (e) => {
      setY(e.clientY)
      setX(e.clientX)
    })
    // unsubscribe from the event on component unmount
  }, [])

  return [x, y]
}

export default useMousePosition
