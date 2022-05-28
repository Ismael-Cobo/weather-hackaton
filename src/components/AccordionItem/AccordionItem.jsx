import { separarFecha } from "../../helpers/changeHours"

import {
  getDayFormatedWithTime,
  getHourFormated,
  getHourFormatedWithTime,
  isToday
} from "../../helpers/formatDate"
import { SixHoursWeather } from "../SixHoursWeather/SixHoursWeather"
import { Section } from "../Today/todayStyles"
import {
  AccordionMid,
  AccordionStyleItem,
  AccordionTop,
  First,
  LeftSection,
  Second
} from "./accordionStyles"

export const AccordionItem = ({ data, active, onClick, i }) => {
  const { date, day, hour } = data
  const { avgtemp_c, maxtemp_c, condition, maxwind_kph, avghumidity } = day
  const { icon, text } = condition
  const iconsFooterNumber = separarFecha(getHourFormated())

  return (
    <AccordionStyleItem onClick={() => onClick(i)}>
      <AccordionTop>
        <div>
          <First>
            {
              isToday(date)
                ? 'Today'
                : getDayFormatedWithTime(date)
            }
          </First>
          <Second>
            {text}
          </Second>
        </div>
        <LeftSection>
          <img src={icon} alt="" />
          <div>
            <p>{avgtemp_c} °C</p>
            <p>{maxtemp_c} °C</p>
          </div>
        </LeftSection>
      </AccordionTop>

      <div className={`content ${active === i ? 'show' : ''}`}>
        <AccordionMid>
          <div>
            <p>Wind:</p>
            <p>Humidity:</p>
          </div>
          <div>
            <p>{maxwind_kph} Km/h</p>
            <p>{avghumidity}%</p>
          </div>
        </AccordionMid>

        <Section style={{ marginTop: '10px' }}>
          {
            iconsFooterNumber.map((iconInfo, index) => {
              const { condition, time } = hour[iconInfo]
              return <SixHoursWeather key={index} icon={condition.icon} time={getHourFormatedWithTime(time)} />
            })
          }

        </Section>

      </div>
    </AccordionStyleItem>
  )
}

