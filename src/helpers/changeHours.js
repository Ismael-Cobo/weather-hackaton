import { addZero } from "./formatDate"


export const separarFecha = (num) => {
  let array = []

  for (let i = 0; i < 5; i++) {
    num = addZero(num)
    if (num > 24) array.push(num - 25)
    else array.push(num)
    num++
  }
  return array
}