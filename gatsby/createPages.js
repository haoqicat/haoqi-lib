const path = require(`path`)

module.exports = ({ boundActionCreators }) => {
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
