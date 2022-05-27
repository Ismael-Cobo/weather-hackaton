export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en', {
    month: 'long',
    day: 'numeric',
    timeZone: 'utc'
  })
}

export const getDateFormated = () => {
  const hoy = new Date()
  return hoy.getHours() + ':' + addZero(hoy.getMinutes())
}

export const getHourFormated = () => {
  const hoy = new Date()
  return hoy.getHours()
}

export const getHourFormatedWithTime = (date) => {
  const hoy = new Date(date)
  return hoy.getHours()
}

export const addZero = (number) => {
  return number < 10 ? `0${number}` : number
} 