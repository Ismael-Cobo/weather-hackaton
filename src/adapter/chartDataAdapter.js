

export const chartDataAdapter = (data, hours) => {
  let dataAdapted = []
  for (let i = 0; i < hours.length; i++) {
    const { temp_c } = data[Number(hours[i])]
    
    dataAdapted.push(temp_c)
  }


  return dataAdapted
}



// Devolver el eje x y el y
// X: horas
// Y: temp