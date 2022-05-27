
import { Navegation } from '../../components/Navegation/Navegation'
import { Searcher } from '../../components/Searcher/Searcher'
import { Container } from '../../styles/Container'


export const Navbar = () => {
  return (
    <Container>
      <Searcher />
      <Navegation />
    </Container>
  )
}
