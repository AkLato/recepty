import React from "react"
import socialCardStyles from "./socialCard.module.scss"

const Card = () => {
  return (
    <div>
      <div className={socialCardStyles.card}>
        <div className={socialCardStyles.bg}>
          <p>Bc. Tomáš Rajsigl</p>
          <p>JavaScript Dev </p>
          <a href="https://www.aklato.eu/">
            <p>Portfolio</p>{" "}
          </a>
          <span>
            <a href="mailto:rajsigltom@gmail.com">
              <button>Mail</button>
            </a>
            <a href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-rajsigl-660683b9/">
              <button>LinkedIn</button>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
