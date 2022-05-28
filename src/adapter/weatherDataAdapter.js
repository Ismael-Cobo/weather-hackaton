

export const weatherDataAdapter = (data) => {

  console.log(data.data.location)
  
  const dataAdapted = {
    forecast: [
      ...data.data.forecast.forecastday
    ],
    feelsLike: data.data.current.feelslike_c,
    name: data.data.location.name,
    country: data.data.location.country
  }

  return dataAdapted

}