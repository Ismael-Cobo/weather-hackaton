import styled from "@emotion/styled"
import { SevenDays } from "../../components/SevenDays/SevenDays"
import { Today } from "../../components/Today/Today"
import { Tomorrow } from "../../components/Tomorrow/Tomorrow"

export const Main = () => {
  return (
    <ContainerScroll>
      <Section>
        <Today />
      </Section>

      <Section>
        <Tomorrow />
      </Section>

      <Section>
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
  &::-webkit-scrollbar{
    display: none;
  }
`

const Section = styled.section`
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 8rem);
  scroll-snap-align: start;
  &:nth-of-type(1) {
    background-color: blue;
  }
  &:nth-of-type(2) {
    background-color: red;
  }
  &:nth-of-type(3) {
    background-color: green;
  }
`