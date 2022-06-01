import styled from "@emotion/styled"


export const AppWrapper = styled.main`
display: grid;
place-items: center;
height: 100vh;
`

export const Card = styled.div`
width: 340px;  
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 10px;
`

export const HeaderWapper = styled.nav`
background-color: #DBF9F0;
height: 100px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
@media (min-width: 768px) {
  width: 340px;
}
`
export const MainWrapper = styled.div`
height: 600px;
`