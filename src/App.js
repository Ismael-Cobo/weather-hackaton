import { createContext } from "react";
import { useFetch } from "./hooks/useFetch";

import { Navbar } from "./pages/Header/Navbar";
import { Main } from "./pages/Main/Main";
import { AppWrapper, Card, HeaderWapper, MainWrapper } from "./appStyles";

export const WeatherContext = createContext({
  data: [],
  loading: true,
  error: null,
  dataNow: [],
  errorNow: null
})


function App() {

  const {data, error, loading} = useFetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=Barcelona&days=4')
  
  const { data: dataNow, error: errorNow } = useFetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Barcelona?lang=es')
  


  return (
    <WeatherContext.Provider value={{data, error, loading, dataNow, errorNow}}>
      <AppWrapper>
        <Card>
          <HeaderWapper>
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

