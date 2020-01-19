import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import LogoImg from 'gatsby-image'
import "./company.css"

const Company = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allContentfulNineteenTen(sort: {fields: [date], order: ASC}) {
      edges {
        node {
          idUrl
          idanchor
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
                        <div id={edge.node.idanchor} className="company-img">
                        <Img fluid={edge.node.mainImage.fluid} alt={edge.node.businessTitle}/>
                        </div>
                        <div className="company-info">
                        <LogoImg className="company-logo" fluid={edge.node.businessLogo.fluid} alt={edge.node.businessTitle}/>
                              <article>
                              {documentToReactComponents(edge.node.aboutText.json)}
                              </article>
                  <a href ={edge.node.buttonUrl}>Visit {edge.node.businessTitle}</a>
                  </div>
         </div>
                  )
              })}
      </div>
  )
}

export default Company
