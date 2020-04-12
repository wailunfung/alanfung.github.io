const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Full Stack Designer`,
    description: `This is the portfolio of Alan Fung`,
    author: `Alan Fung`,
    image: `https://alanfung.design/about4.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `journal`,
        path: `${__dirname}/src/content/journal`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/content/portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          portfolio: path.resolve(`./src/templates/portfolio.js`),
          journal: path.resolve(`./src/templates/journal.js`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1600,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Montserrat:400,500,900', 'Open Sans']
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-163309460-1"
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alan Fung | Portfolio`,
        short_name: `AF`,
        start_url: `/`,
        background_color: `#1a1a1a`,
        theme_color: `#1a1a1a`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
