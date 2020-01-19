/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4nlw2v6q7d79`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `jsDn84No7gst2-M71hNuSmoXmaHz7s5HdxYiA_Pscb0`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:"coimages",
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
