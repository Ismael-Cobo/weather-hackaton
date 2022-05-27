import { IconWrap } from './sixHoursWeatherStyles'

export const SixHoursWeather = ({ icon, time }) => {


  return (
    <IconWrap>
      <img src={icon} alt="" />
      <p>{time}:00</p>
    </IconWrap>
  )
}

