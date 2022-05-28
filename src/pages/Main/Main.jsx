import { useContext } from "react"

import { WeatherContext } from "../../App"

import { Error } from "../../components/Error/Error"
import { SevenDays } from "../../components/SevenDays/SevenDays"
import { Today } from "../../components/Today/Today"

import { ContainerScroll, Section, SectionError } from "./mainStyles"

export const Main = () => {

  const { error, loading, data } = useContext(WeatherContext)

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
              weather={data.forecast[0]}
              location={data.name}
              feelsLike={data.feelsLike}
            />

        }
      </Section>

      <Section id="mañana">
        {
          loading
            ? 'loading'
            : <Today weather={data.forecast[1]} location={data.name} />

        }
      </Section>

      <Section id="sieteDias">
        <SevenDays />
      </Section>
    </ContainerScroll>
  )
}

