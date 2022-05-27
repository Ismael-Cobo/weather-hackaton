import styled from '@emotion/styled'

export const Tomorrow = () => {
  return (
    <Section>
      <Wrap>
        <Fecha>25 de mayo, 13:29</Fecha>
        <DiaNoche>Día: 21° · Noche: 15°</DiaNoche>
        <TemperaturaWrap>
          <Temperatura>19 °</Temperatura><TemperaturaSign>C</TemperaturaSign>
        </TemperaturaWrap>
        <DiaNoche>Sensación térmica de 19 °</DiaNoche>
      </Wrap>
      <Wrap>
        <img src='assets/icon/64x64/day/116.png' alt="" />
        <p>Parcialmente nublado</p>
      </Wrap>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  padding-top: 1rem;
  justify-content: space-around;
  width: 100%;
  color: white;
  background-image: url('assets/bg/warm.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Wrap = styled.div`
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    &:nth-of-type(2) {
      width: 25%;
      text-align: center;
    }
`

const Fecha = styled.p`
  color: black;
  font-weight: bold;
  margin-top: 0;
`
const DiaNoche = styled.p`
  font-size: 14px;
`

const TemperaturaWrap = styled.div`
  display: flex;
  align-items: start;
`

const Temperatura = styled.h1`
  font-weight: 300;
  font-size: 70px;
  margin: 0;
`

const TemperaturaSign = styled.span`
  font-size: 50px;
`
