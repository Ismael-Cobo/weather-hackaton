import styled from "@emotion/styled"

export const AllWrap = styled.div`
display: flex;
flex-direction: column;
width: 100%;
color: white;
//background-image: url('assets/bg/sunny.png');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
justify-content: space-between;
${props => {
  const image = props.avgtemp_c < 10 ? 'assets/bg/cold3.jpg' : props.avgtemp_c > 10 && props.avgtemp_c < 25 ? 'assets/bg/sunny.png' : 'assets/bg/warm.jpg'
  return `background-image:url(${image});`
}}
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 0;
  font-size: 1.3rem;
`

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
`

export const Wrap = styled.div`
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:nth-of-type(2) {
    width: 25%;
    text-align: center;
  }
`

export const Fecha = styled.p`
color: black;
font-weight: bold;
margin-top: 0;
margin-bottom: 0.2rem;
`
export const DiaNoche = styled.p`
font-size: 14px;
`

export const TemperaturaWrap = styled.div`
display: flex;
align-items: start;
`

export const Temperatura = styled.h1`
font-weight: 300;
font-size: 70px;
margin: 0;
`

export const TemperaturaSign = styled.span`
font-size: 50px;
`