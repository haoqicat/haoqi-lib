import React from 'react'

export default ({ data }) => {
  const post = data.markdownRemark
  return <div dangerouslySetInnerHTML={{ __html: post.html }} />
}

export const query = graphql`
  query BlogPostQuery {
    markdownRemark {
      html
    }
  }
`