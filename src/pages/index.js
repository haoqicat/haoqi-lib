import React from 'react'
import { PRIMARY } from '../constants/Colors'
import styled from 'styled-components'
import Link from 'gatsby-link'

export default ({ data }) => {
  const { edges: books } = data.allIndexJson
  return (
    <ul>
      {books.map(p => (
        <StyledLink key={p.node.bookId} to={`/${p.node.bookId}`}>
          {p.node.title}
        </StyledLink>
      ))}
    </ul>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allIndexJson {
      edges {
        node {
          bookId
          title
        }
      }
    }
  }
`

const StyledLink = styled(Link)`
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  display: flex;
  line-height: 50px;
  color: rgba(0, 0, 0, 0.87);
  &:before {
    content: '';
    width: 5px;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    margin-right: 10px;
  }
  &:hover {
    &:before {
      background: ${PRIMARY};
    }
  }
`
