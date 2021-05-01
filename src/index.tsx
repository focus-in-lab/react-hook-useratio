import { useState, useEffect, useCallback } from 'react'

export const useRatio = (
  ratioWidth: number,
  ratioHeight: number,
  ref: React.RefObject<HTMLElement>
) => {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  const handleResize = useCallback(() => {
    if (ref.current) {
      setWidth(ref.current ? ref.current.clientWidth : 0)
    }
  }, [ref])

  window.addEventListener('resize', handleResize)

  useEffect(() => {
    handleResize()
    setHeight(Math.round((width / ratioWidth) * ratioHeight))
    return () => window.removeEventListener('resize', handleResize)
  }, [width, ratioHeight, ratioWidth, ref, handleResize])

  return { width, height }
}
