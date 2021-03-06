const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `TocJson`) {
    const fullPath = createFilePath({ node, getNode })
    const bookId = fullPath.split('/')[1]
    createNodeField({
      node,
      name: `bookId`,
      value: bookId
    })
  }
  if (node.internal.type === 'MarkdownRemark') {
    const episode = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `episode`,
      value: episode
    })
  }
}
