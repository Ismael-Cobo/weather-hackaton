

export const weatherDataAdapter = (data) => {

  console.log(data)

  const dataAdapted = {
    forecast: [
      ...data.data.forecast.forecastday
    ],
    feelsLike: data.feelsLike,
    name: data.data.location.name   
  }

  return dataAdapted

}