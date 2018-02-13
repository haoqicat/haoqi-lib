const books = require('../data/index.json')
const git = require('./git-cmd')

const cwd = './data'
const promiseArr = books.map(book =>
  git.clone(`git@github.com:${book.githubAccount}/${book.bookId}.git`, cwd)
)

Promise.all(promiseArr).then(result => console.log('clone finished'))
