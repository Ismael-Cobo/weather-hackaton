

export const weatherDataAdapter = (data) => {
  
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