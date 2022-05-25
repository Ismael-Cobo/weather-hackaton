import styled from '@emotion/styled'
import React from 'react'
import { ItemNavegation } from '../ItemNavegation/ItemNavegation'

export const Navegation = () => {
  return (
    <NavegationWrapper>
      <ItemNavegation to={'#hoy'}>
        Hoy
      </ItemNavegation>
      <ItemNavegation to={'#mañana'}>
        Mañana
      </ItemNavegation>
      <ItemNavegation to={'#sieteDias'}>
        7 dias
      </ItemNavegation>
    </NavegationWrapper>
  )
}

const NavegationWrapper = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-around;
`