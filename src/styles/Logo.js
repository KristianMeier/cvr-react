import React from 'react'
import styled from 'styled-components'

const Logo = () => {
  return <Wrapper src='/images/logo.png' alt='logo' />
}

const Wrapper = styled.img`
  width: 4rem;
  height: 2.2rem;
`

export default Logo
