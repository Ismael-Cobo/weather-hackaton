import styled from '@emotion/styled'
import React from 'react'

export const SixHoursWeather = ({ icon, time }) => {


  return (
    <IconWrap>
      <img src={icon} alt="" />
      <p>{time}:00</p>
    </IconWrap>
  )
}

const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`