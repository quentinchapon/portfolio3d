import { useState, useEffect } from "react"

const useViewportSize = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize()
    window.addEventListener("resize", handleWindowResize)
    // unsubscribe from the event on component unmount
  }, [])

  return [width, height]
}

export default useViewportSize
