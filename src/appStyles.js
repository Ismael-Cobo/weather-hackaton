import styled from "@emotion/styled"


export const AppWrapper = styled.main`
display: grid;
place-content: center;
height: 100vh;
`

export const Card = styled.div`
width: 320px;  
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 10px;
@media (min-width: 567px) {
  width: 400px;
}
`

export const HeaderWapper = styled.nav`
background-color: bisque;
height: 100px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
@media (min-width: 768px) {
  width: 400px;
}
`
export const MainWrapper = styled.div`
height: 500px;
@media (min-width: 600px) {
  height: 700px;
}
`