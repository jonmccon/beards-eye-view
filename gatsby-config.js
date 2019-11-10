module.exports = {
  siteMetadata: {
    title: 'Beards Eye View',
    description: 'Photography book',
    language: 'en',
    email: 'jonmccon@gmail.com',
    siteInstagramURL: 'https://www.instagram.com/jonmccon/',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        /* eslint-disable @typescript-eslint/camelcase */
        name: 'Beards Eye View',
        short_name: 'BEV',
        start_url: '/',
        background_color: '#3d3d3d',
        theme_color: '#f8485e',
        display: 'standalone',
        icon: 'src/assets/favicon.png',
        legacy: true,
        /* eslint-enable */
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-151954429-1',
      },
    },
    'gatsby-plugin-remove-serviceworker',
    '@rhysforyou/gatsby-plugin-react-helmet-async',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
  ],
};
