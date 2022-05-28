import { SixHoursWeather } from "../SixHoursWeather/SixHoursWeather"

import { AllWrap, DiaNoche, Fecha, Section, Temperatura, TemperaturaSign, TemperaturaWrap, Title, Wrap } from "./todayStyles"

import { formatDate, getDateFormated, getHourFormated, getHourFormatedWithTime } from "../../helpers/formatDate"
import { separarFecha } from "../../helpers/changeHours"

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
