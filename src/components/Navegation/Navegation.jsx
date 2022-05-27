import styled from '@emotion/styled'
import React from 'react'
import { ItemNavegation } from '../ItemNavegation/ItemNavegation'

export const Navegation = () => {
  return (
    <NavegationWrapper>
      <ItemNavegation to={'#hoy'}>
        Today
      </ItemNavegation>
      <ItemNavegation to={'#mañana'}>
        Tomorrow
      </ItemNavegation>
      <ItemNavegation to={'#sieteDias'}>
        3 days
      </ItemNavegation>
    </NavegationWrapper>
  )
}

const NavegationWrapper = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-around;
`