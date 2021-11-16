import { FC } from 'react'
import {
  Header,
  Container,
  Nav
} from './styles'

const Home: FC = () => {
    return (
           <Container>
              <Nav>
                 <Header>Random 10 HackerNews</Header>                  
              </Nav>
           </Container>
    )
}

export default Home