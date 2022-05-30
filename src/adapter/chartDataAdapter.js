

export const chartDataAdapter = (data, hours) => {
  let dataAdapted = [] 
  console.log(data)
  
  for (let i = 0; i < hours.length; i++) {
    const { temp_c } = data[hours[i]]
    dataAdapted.push(temp_c)
  }


  return dataAdapted
}



// Devolver el eje x y el y
// X: horas
// Y: temp