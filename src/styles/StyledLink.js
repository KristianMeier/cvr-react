import React from 'react'
import styled, { css } from 'styled-components'

export const StyledLink = ({
  odd,
  first,
  linktype,
  link,
  text,
  size,
  bold,
}) => {
  return (
    <Link
      odd={odd}
      first={first}
      linktype={linktype}
      bold={bold}
      size={size}
      key={text}
      href={link}
    >
      {text}
    </Link>
  )
}

const Link = styled.a`
  text-decoration: none;
  color: black;
  font-size: ${({ size }) => size};
  font-weight: ${({ bold }) => (bold ? 750 : 250)};
  ${({ linktype }) => {
    if (linktype === 'top') {
      return css`
        margin-top: 2rem;
        display: inline-block;
        margin-right: 2.2rem;
      `
    }
    if (linktype === 'footer') {
      return css`
        display: block;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        font-weight: 300;
      `
    }
    return css``
  }}

  ${({ odd }) => {
    return odd
      ? css`
          font-weight: 800;
        `
      : css``
  }}
  
  ${({ first }) => {
    return first
      ? css`
          font-weight: 800;
        `
      : css``
  }}
`
