import { useEffect, useState } from "react"

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		'X-RapidAPI-Key': 'c95755b25dmshc9655129ed158c8p1e15e8jsn37236ec8846e'
	}
};

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  })

  useEffect(() => {

    fetch(url, options)
      .then(resp => resp.json())
      .then(data => {
        if(data.error) {
          return setState({
            data: data,
            loading: false,
            error: data.error
          })
        }
        setState({
          data: data,
          loading: false,
          error: null
        })
      }
      )
      .catch(err => console.error(err));

  }, [url])
  
  return state

}