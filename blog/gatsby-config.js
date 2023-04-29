require('dotenv').config
({
  path: `.env.${process.env.NODE_ENV}`
})
module.exports = {
  siteMetadata: {
    title: `The Great Gatsby`,
    description: `ITDEV-164-600`,
    author: `Jason Hicks`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    contact: 
    {
      name: `Jason Hicks`,
      company: `Queston Mark Entertainment`,
      address: `At The Corner Of Nowhere And Everyhwere`
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: 
      {
        spaceId: `pod1l97v302s`,
        accessToken: `mkzQ-tsqyonvLa_riN5LBfJHsDmF3BhDQzhOtDXGh2g`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
