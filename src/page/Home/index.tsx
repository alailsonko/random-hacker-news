import { FC } from 'react'
import {
  Header,
  Container,
  Nav,
  H2,
  WrapperNews,
  Card
} from './styles'

const Home: FC = () => {
    return (
           <Container>
              <Nav>
                 <Header>Random 10 HackerNews</Header>                  
              </Nav>
              <WrapperNews>
                  
                  <Card>
                       <H2>
                         #1 - 2021/09/21 - 22:12:45PM                        
                       </H2>
                  </Card>
              </WrapperNews>
           </Container>
    )
}

export default Home