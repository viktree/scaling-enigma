/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: 'viktree',
    author: 'Vikram Venktaramanan',
    description: 'my superawsome site',
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
          // {
          //   resolve: `gatsby-remark-highlight-code`,
          //   options: {
          //     terminal: 'ubuntu',
          //   },
          // },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-reading-time',
          'gatsby-remark-smartypants',
          'gatsby-remark-prismjs',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/assets/avatar.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-stylus`,
    `gatsby-remark-prismjs`,
    `gatsby-transformer-sharp`,
  ],
}
