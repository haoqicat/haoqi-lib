const path = require(`path`)

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators
  createPage({
    path: '001-setup',
    component: path.resolve(`./src/templates/episode.js`)
  })
}
