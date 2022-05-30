import { SixHoursWeather } from "../SixHoursWeather/SixHoursWeather"

import { AllWrap, DiaNoche, Fecha, Section, Temperatura, TemperaturaSign, TemperaturaWrap, Title, Wrap } from "./todayStyles"

import { formatDate, getDateFormated, getHourFormated, getHourFormatedWithTime } from "../../helpers/formatDate"
import { separarFecha, separarFechaText } from "../../helpers/changeHours"
import { chartDataAdapter } from "../../adapter/chartDataAdapter"
import { LineChart } from "../Chart/LineChart"


export const Today = ({ weather, location, feelsLike, country }) => {

  const { date, day, hour } = weather
  const { avgtemp_c, condition, maxtemp_c } = day
  const { text, icon } = condition
  const hoursOfDay = separarFecha(getHourFormated())
  const dataChart = chartDataAdapter(hour, hoursOfDay)


  return (
    <AllWrap avgtemp_c={avgtemp_c}>

      <div>
        <Title>{location}, {country}</Title>
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
        <LineChart hours={separarFechaText(hoursOfDay[0])} tempC={dataChart} max_avgc={Math.round(maxtemp_c) + 5} />
      </Section>
      <Section>
        {
          hoursOfDay.map((iconInfo, index) => {
            const { condition, time } = hour[iconInfo]
            return <SixHoursWeather key={index} icon={condition.icon} time={getHourFormatedWithTime(time)} />
          })
        }
      </Section>

    </AllWrap>
  )
}
