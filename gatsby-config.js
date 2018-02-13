module.exports = {
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
