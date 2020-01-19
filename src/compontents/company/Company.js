import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import LogoImg from 'gatsby-image'
import "./company.css"

const Company = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allContentfulNineteenTen {
      edges {
        node {
          mainImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          businessLogo {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          businessTitle
          aboutText {
            json
          }
          buttonUrl
        }
      }
    }
  }
  
  `)

  return (
      <div>
              {data.allContentfulNineteenTen.edges.map((edge, index) => {
                  return (
                      <div className="company-grid" key={index}>
                        <div className="company-img">
                        <Img fluid={edge.node.mainImage.fluid} alt={edge.node.businessTitle}/>
                        </div>
                        <div className="company-info">
                        <LogoImg fluid={edge.node.businessLogo.fluid} alt={edge.node.businessTitle}/>
                              <h2>{edge.node.businessTitle}</h2>
                              <article>
                              {documentToReactComponents(edge.node.aboutText.json)}
                              </article>
                  <Link to ={edge.node.buttonUrl}>Visit {edge.node.businessTitle}</Link>
                  </div>
         </div>
                  )
              })}
      </div>
  )
}

export default Company
