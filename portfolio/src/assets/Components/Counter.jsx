import { useState, useEffect } from 'react'
import './Counter.css'

function AnimatedCounter({ target, label, duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / (duration / 16) // 60fps

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [target, duration])

  return (
    <div className="animated-counter" data-aos="flip-down" data-aos-duration="1000">
      <div className="counter-number">{count}+</div>
      <div className="counter-label">{label}</div>
    </div>
  )
}

export default function Counter() {
  return (
    <section className="counters-section" id="stats" data-aos= "fade-up" data-aos-duration="1000">
      <div className="counters-container">
        <h2 className="counters-title">My Stats</h2>
        <p> My approach combines creative design thinking with technical expertise 
                        to deliver websites that not only look great but also perform exceptionally well across all devices.
                        I believe every pixel matters and every interaction should feel intentional.</p>
        <div className="counters-grid">
          <AnimatedCounter target={5} label="Years Experience" />
          <AnimatedCounter target={15} label="Projects Completed" />
          <AnimatedCounter target={10} label="Technologies" />
          <AnimatedCounter target={20} label="Happy Clients" />
        </div>
      </div>
    </section>
  )
}