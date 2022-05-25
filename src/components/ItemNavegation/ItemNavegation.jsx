import styled from '@emotion/styled'
import React from 'react'

export const ItemNavegation = ({ children, active, to }) => {
  return (
    <Item href={to}>{children}</Item>
  )
}

const Item = styled.a`
  padding: 1rem 0;
  text-decoration: none;
  color: white;
  font-weight: 700;
`