import React from "react"
import Companies from "../company/companies"

export const Nav = () => {
  return (
    <nav>
            {Companies.map((item, index) => {
              return (
                <ul key={index}>
                  <li><a href={item.anchor}>{item.title}</a></li>
                </ul>
              )
            })}
    </nav>
  )
}

export default Nav
