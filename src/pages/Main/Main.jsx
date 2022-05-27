import { useContext } from "react"

import { WeatherContext } from "../../App"

import { Error } from "../../components/Error/Error"
import { SevenDays } from "../../components/SevenDays/SevenDays"
import { Today } from "../../components/Today/Today"

import { ContainerScroll, Section, SectionError } from "./mainStyles"

export const Main = () => {

  const { error, loading, data } = useContext(WeatherContext)

  const { data: weatherWata, feelsLike } = data

  if (error) {
    return (
      <SectionError>
        <Error />
      </SectionError>
    )
  }

  return (
    <ContainerScroll>
      <Section id="hoy">
        {
          loading
            ? 'loading'
            : <Today
              weather={weatherWata.forecast.forecastday[0]}
              location={weatherWata.location.name}
              feelsLike={feelsLike}
            />

        }
      </Section>

      <Section id="mañana">
        {
          loading
            ? 'loading'
            : <Today weather={weatherWata.forecast.forecastday[1]} location={weatherWata.location.name} />

        }
      </Section>

      <Section id="sieteDias">
        <SevenDays />
      </Section>
    </ContainerScroll>
  )
}

