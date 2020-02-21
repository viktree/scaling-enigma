/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: 'viktree',
    author: 'Vikram Venktaramanan',
    description: 'A starter blog demonstrating what Gatsby can do.',
    siteUrl: process.env.GATSBY_SITE_URL,
    disqusShortname: process.env.GATSBY_DISQUS_SHORTNAME,
    resources: {
      resumeLink: process.env.GATSBY_RESUME_LINK,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Bitter`, `Abril Fatface`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-reading-time',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-plugin-stylus`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
