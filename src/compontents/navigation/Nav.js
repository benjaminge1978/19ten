import React from "react"
import NineLogo from "../../images/19ten_logo.svg"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./navigation.css"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query menuQuery {
      allContentfulNineteenTen(sort: {fields: [date], order: ASC}) {
        edges {
          node {
            businessTitle
            idUrl
          }
        }
      }
    }
  `)

  return (
    <nav>
      <div className="nav-inner">
      <img src={NineLogo} alt="19ten Logo" />
      <ul>
              {data.allContentfulNineteenTen.edges.map((edge, index) => {
                  return (
                      <li key={index}>
                  <Link to ={edge.node.idUrl}>{edge.node.businessTitle}</Link>

                      </li>
                  )
              })}
      </ul>
      </div>
    </nav>
  )
}

export default Nav
