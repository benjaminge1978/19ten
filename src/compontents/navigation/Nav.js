import React from "react"
import NineLogo from "../../images/19ten_logo.svg"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./navigation.css"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query menuQuery {
      allContentfulNineteenTen {
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
      <div>
              {data.allContentfulNineteenTen.edges.map((edge, index) => {
                  return (
                      <div key={index}>
                  <Link to ={edge.node.idUrl}>{edge.node.businessTitle}</Link>
                      </div>
                  )
              })}
      </div>
      </div>
    </nav>
  )
}

export default Nav
