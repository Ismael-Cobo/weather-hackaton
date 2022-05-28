import { useState } from "react"
import styled from "@emotion/styled"

import { AccordionItem } from "../AccordionItem/AccordionItem"

export const SevenDays = ({ weather }) => {

  const [active, setActive] = useState(null)

  const handleClick = (i) => {

    if (i === active) {
      return setActive(null)
    }

    setActive(i)
  }


  return (
    <AccordionWrapper>
      {
        weather.map((data, i) =>
          <AccordionItem data={data} key={i} onClick={handleClick} i={i} active={active} />
        )
      }

    </AccordionWrapper>
  )
}

const AccordionWrapper = styled.div`
  width: 100%;
`

