import { createContext, useEffect, useReducer } from "react";

import { Navbar } from "./pages/Header/Navbar";
import { Main } from "./pages/Main/Main";
import { AppWrapper, Card, HeaderWapper, MainWrapper } from "./appStyles";
import { weatherReducer } from "./reducer/weatherReducer";
import { types } from "./types/types";
import { options } from "./services/options";
import { weatherDataAdapter } from "./adapter/weatherDataAdapter";

const initialState = {
  data: [],
  loading: true,
  error: null
}

export const WeatherContext = createContext()


function App() {

  const [state, dispatch] = useReducer(weatherReducer, initialState)


  const getWeather = async(city='Barcelona') => {
    dispatch({type: types.START_LOADING})

    try {
      const res = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=4`, options)
      const data = await res.json()
           
      const finalData = {data}
    
      dispatch({type: types.ADD_QUERY, payload: weatherDataAdapter(finalData)})
      dispatch({type: types.DELETE_ERROR})
      dispatch({type: types.FINISH_LOADING})

    } catch (error) {
      console.log(error)
      dispatch({type: types.SET_ERROR})
      dispatch({type: types.FINISH_LOADING})
    }
  
  }

  useEffect(() => {
    getWeather()
  }, [])

  
  
  return (
    <WeatherContext.Provider value={
        {
          data: state.data, 
          error: state.error,
          loading: state.loading,
          getWeather
        }
      }
    >
      <AppWrapper>
        <Card>
          <HeaderWapper >
            <Navbar />
          </HeaderWapper>
          <MainWrapper>
            <Main />
          </MainWrapper>
        </Card>
      </AppWrapper>
    </WeatherContext.Provider>
  );
}

export default App;

