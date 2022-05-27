import styled from "@emotion/styled"
import { separarFecha } from "../../helpers/changeHours"
import { formatDate, getDateFormated, getHourFormated, getHourFormatedWithTime } from "../../helpers/formatDate"
import { SixHoursWeather } from "../SixHoursWeather/SixHoursWeather"

export const Today = ({ weather, location, feelsLike }) => {


  const { date, day, hour } = weather
  const { avgtemp_c, condition } = day
  const { text, icon } = condition
  const iconsFooterNumber = separarFecha(getHourFormated())


  return (
    <AllWrap avgtemp_c={avgtemp_c}>

      <div>
        <Title>{location}</Title>
        <Section>
          <Wrap>
            <Fecha>{formatDate(date)}, {getDateFormated()}</Fecha>
            <TemperaturaWrap>
              <Temperatura>{avgtemp_c} °</Temperatura><TemperaturaSign>C</TemperaturaSign>
            </TemperaturaWrap>
            {
              feelsLike
                ? <DiaNoche>Wind chill of {feelsLike} c°</DiaNoche>
                : ''
            }
          </Wrap>
          <Wrap>
            <img src={icon} alt="" />
            <p>{text}</p>
          </Wrap>
        </Section>
      </div>
      <Section>
        {
          iconsFooterNumber.map((iconInfo, index) => {
            const { condition, time } = hour[iconInfo]
            return <SixHoursWeather key={index} icon={condition.icon} time={getHourFormatedWithTime(time)} />
          })
        }
      </Section>
    </AllWrap>
  )
}

const AllWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
  //background-image: url('assets/bg/sunny.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: space-around;
  ${props => {
    const image = props.avgtemp_c > 10 ? 'assets/bg/sunny.png' : 'assets/bg/cold3.jpg'
    return `background-image:url(${image});`
  }}
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 0;
`

const Section = styled.section`
  display: flex;
  justify-content: space-around;
`

const Wrap = styled.div`
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:nth-of-type(2) {
      width: 25%;
      text-align: center;
    }
`

const Fecha = styled.p`
  color: black;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0.2rem;
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