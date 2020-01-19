import React from "react"
import Companies from "./companies"

export const Company = () => {
  return (
    <section className="company-wrapper">
      {Companies.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.logo} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <img src={item.image} alt={item.title} />
            <a href={item.path}>Visit the site</a>
          </div>
        )
      })}
    </section>
  )
}

export default Company
