const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const episode = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `episode`,
      value: episode
    })
  }
}
