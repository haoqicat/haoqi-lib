import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

export default ({ data, pathContext }) => {
  const { edges: episodes } = data.allTocJson
  const { bookId } = pathContext

  return (
    <ul>
      {episodes.map(ep => (
        <StyledLink
          key={ep.node.episodeId}
          to={`${bookId}/${ep.node.episodeId}`}
        >
          {ep.node.title}
        </StyledLink>
      ))}
    </ul>
  )
}

export const pageQuery = graphql`
  query TocQuery($bookId: String!) {
    allTocJson(filter: { fields: { bookId: { eq: $bookId } } }) {
      edges {
        node {
          episodeId
          title
        }
      }
    }
  }
`

const StyledLink = styled(Link)`
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  display: block;
  line-height: 40px;
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.87);
  &:hover {
    background: rgb(232, 232, 232);
  }
`
