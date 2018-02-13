import React from 'react'

export default ({ pathContext }) => {
  const { episode } = pathContext
  return <div>{episode}</div>
}
