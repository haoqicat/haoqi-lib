const path = require(`path`)

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const episodes = ['001-setup', '002-clone']
  episodes.forEach(episode => {
    createPage({
      path: episode,
      component: path.resolve(`./src/templates/episode.js`),
      context: {
        episode
      }
    })
  })
}
