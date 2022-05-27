import styled from "@emotion/styled"
import { useContext } from "react"
import { WeatherContext } from "../../App"
import { SevenDays } from "../../components/SevenDays/SevenDays"
import { Today } from "../../components/Today/Today"

export const Main = () => {

  const { data, error, loading, dataNow } = useContext(WeatherContext)

  return (
    <ContainerScroll>
      <Section id="hoy">
        {
          loading
            ? 'loading'
            : <Today
              weather={data.forecast.forecastday[0]}
              location={data.location.name}
              feelsLike={dataNow.current.feelslike_c}
            />

        }
      </Section>

      <Section id="mañana">
        {
          loading
            ? 'loading'
            : <Today weather={data.forecast.forecastday[1]} location={data.location.name} />

        }
      </Section>

      <Section id="sieteDias">
        <SevenDays />
      </Section>
    </ContainerScroll>
  )
}

const ContainerScroll = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  display: flex;
  scroll-behavior: smooth;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  &::-webkit-scrollbar{
    display: none;
  }
`

const Section = styled.section`
  flex: none;
  display: flex;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  &:nth-of-type(3) {
    background-color: green;
  }
`