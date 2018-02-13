import React from 'react'
import '../assets/global.css'
import styled from 'styled-components'
import { PRIMARY } from '../constants/Colors'

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children()}
    </div>
  )
}

const Header = styled.div`
  height: 80px;
  background: ${PRIMARY};
`
