import { ItemNavegation } from '../ItemNavegation/ItemNavegation'
import { NavegationWrapper } from './navegationStyles'

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
