import React from 'react'
import styled from 'styled-components'
import { English } from '../../context/Data'
import { Icon } from '../../styles/Icon'
import Logo from '../../styles/Logo'
import { StyledLink } from '../../styles/StyledLink'

const Navbar = () => {
  const {
    navbar: { textIcons },
  } = English
  return (
    <Wrapper>
      <picture>
        <Logo />
      </picture>
      {textIcons.map((item) => {
        return <StyledLink key={item.id} {...item} />
      })}
      {textIcons.map((item) => {
        return <Icon key={item.id} {...item} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: 6rem;
  width: 100%;
  display: flex;
  border: none;
  padding: 2rem;
  box-shadow: 0 0 10px 0 #888888;
  gap: 1rem;
  background-color: white;

  p {
    flex-shrink: 0;
    overflow-wrap: break-word;
    font-size: 2rem;
  }

  picture {
    flex: 40%;
    font-size: 1.5rem;
    align-self: center;
  }

  h6,
  p {
    align-self: center;
    font-size: 1rem;
    display: inline-block;
    margin-right: 0;
  }

  a {
    display: none;
  }

  @media screen and (min-width: 768px) {
    a {
      align-self: center;
      font-size: 1rem;
      display: inline-block;
      margin-right: 0;
    }
    p {
      display: none;
    }
  }
`

export default Navbar
