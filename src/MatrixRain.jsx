import { useEffect, useRef } from 'react'

const CHARS = '01'

function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let animationId
    let columns
    let streams
    let lastTime = 0

    const FONT_SIZE = 16
    const FRAME_INTERVAL = 100

    function createStream() {
      return {
        y: Math.random() * -150,
        speed: 0.3 + Math.random() * 0.8,
        opacity: 0.3 + Math.random() * 0.7,
      }
    }

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      columns = Math.floor(canvas.width / FONT_SIZE)

      const oldStreams = streams || []
      streams = new Array(columns).fill(null).map((_, i) =>
        i < oldStreams.length ? oldStreams[i] : createStream()
      )
    }

    function draw(timestamp) {
      animationId = requestAnimationFrame(draw)

      if (timestamp - lastTime < FRAME_INTERVAL) return
      lastTime = timestamp

      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${FONT_SIZE}px monospace`

      for (let i = 0; i < columns; i++) {
        const stream = streams[i]
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const x = i * FONT_SIZE
        const y = stream.y * FONT_SIZE

        const roll = Math.random()
        if (roll < 0.5) {
          ctx.fillStyle = `rgba(0, 255, 65, ${stream.opacity})`
        } else if (roll < 0.75) {
          ctx.fillStyle = `rgba(0, 179, 48, ${stream.opacity})`
        } else {
          ctx.fillStyle = Math.random() < 0.5
            ? `rgba(106, 106, 106, ${stream.opacity})`
            : `rgba(58, 58, 58, ${stream.opacity})`
        }

        ctx.fillText(char, x, y)

        if (y > canvas.height && Math.random() > 0.98) {
          streams[i] = createStream()
        }

        stream.y += stream.speed
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
