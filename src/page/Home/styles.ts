import styled from 'styled-components'


export const Header = styled.header`
 font-family: 'Roboto Slab', serif;
 font-weight: 500;
 font-size: 24px;
`

export const H2 = styled.h2`
 font-family: 'Roboto Slab', serif;
 font-weight: 400;
 font-size: 18px;
`
export const Title = styled.p`
 font-family: 'Roboto Slab', serif;
 font-weight: lighter;
 font-size: 18px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`

export const Nav = styled.nav`
  display: flex;
  margin-top: 1.5rem;
  width: 100%;
  justify-content: center;
`
export const WrapperNews = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  @media(min-width: 800px) {
    width: 50%;
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`
