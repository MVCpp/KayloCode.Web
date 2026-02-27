import { useEffect, useRef } from 'react'

const CHARS = '01'

function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let animationId
    let columns
    let drops
    let lastTime = 0

    const FONT_SIZE = 16
    const FRAME_INTERVAL = 120 // ms between frames — much slower

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      columns = Math.floor(canvas.width / FONT_SIZE)

      const oldDrops = drops || []
      drops = new Array(columns).fill(0).map((_, i) =>
        i < oldDrops.length ? oldDrops[i] : Math.random() * -100
      )
    }

    function draw(timestamp) {
      animationId = requestAnimationFrame(draw)

      // Throttle: only update every FRAME_INTERVAL ms
      if (timestamp - lastTime < FRAME_INTERVAL) return
      lastTime = timestamp

      // Slower fade for longer trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${FONT_SIZE}px monospace`

      for (let i = 0; i < columns; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const x = i * FONT_SIZE
        const y = drops[i] * FONT_SIZE

        const roll = Math.random()
        if (roll < 0.5) {
          ctx.fillStyle = '#00ff41'
        } else if (roll < 0.75) {
          ctx.fillStyle = '#00b330'
        } else {
          ctx.fillStyle = Math.random() < 0.5 ? '#6a6a6a' : '#3a3a3a'
        }

        ctx.fillText(char, x, y)

        if (y > canvas.height && Math.random() > 0.985) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    resize()
    animationId = requestAnimationFrame(draw)

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    />
  )
}

export default MatrixRain
