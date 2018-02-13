import React from 'react'
import '../assets/global.css'

export default ({ children }) => {
  return (
    <div>
      LAYOUT
      {children()}
    </div>
  )
}
