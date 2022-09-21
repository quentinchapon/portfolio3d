import { useState, useEffect } from "react"

const useViewportSize = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    handleWindowResize()
    window.addEventListener("resize", handleWindowResize)
  }, [])

  return [width, height]
}

export default useViewportSize
