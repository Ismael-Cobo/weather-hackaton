import { useState } from 'react'
import { ItemNavegation } from '../ItemNavegation/ItemNavegation'
import { NavegationWrapper } from './navegationStyles'

export const Navegation = () => {

  const [active, setActive] = useState('hoy')

  const handleClick = (path) => {
    setActive(path)
  }

  return (
    <NavegationWrapper>
      <ItemNavegation onClick={() => handleClick('hoy')} active={active === 'hoy'} to={'#hoy'}>
        Today
      </ItemNavegation>
      <ItemNavegation onClick={() => handleClick('mañana')} active={active === 'mañana'} to={'#mañana'}>
        Tomorrow
      </ItemNavegation>
      <ItemNavegation onClick={() => handleClick('tresDias')} active={active === 'tresDias'} to={'#tresDias'}>
        3 days
      </ItemNavegation>
    </NavegationWrapper>
  )
}
