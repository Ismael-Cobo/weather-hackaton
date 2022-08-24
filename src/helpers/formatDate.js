let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

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

export const getDayFormatedWithTime = (date) => {
  const hoy = new Date(date)
  return `${days[hoy.getDay()]}, ${hoy.getDate()} ${months[hoy.getMonth()]}`
}

export const isToday = (date) => {
  let hoy = new Date()
  hoy = `${hoy.getFullYear()}-${addZero(hoy.getMonth()+1)}-${hoy.getDate()}`
  return hoy === date ? true : false
}

export const addZero = (number) => {
  return number < 10 ? `0${number}` : number
}