/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: 'viktree',
    author: 'Vikram Venktaramanan',
    description: 'My persional blog and site',
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
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-reading-time',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vikram's site and blog`,
        short_name: 'viktree',
        start_url: '/',
        display: `standalone`,
        icon: `src/assets/avatar.png`,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    'gatsby-plugin-stylus',
    'gatsby-remark-prismjs',
    'gatsby-transformer-sharp',
  ],
}
