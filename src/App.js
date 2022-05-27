import styled from "@emotion/styled";
import { createContext } from "react";
import { useFetch } from "./hooks/useFetch";

import { Navbar } from "./pages/Header/Navbar";
import { Main } from "./pages/Main/Main";

export const WeatherContext = createContext({
  data: [],
  loading: true,
  error: null,
  dataNow: []
})


function App() {

  const {data, error, loading} = useFetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=Barcelona&days=4')
  
  const { data: dataNow } = useFetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Barcelona?lang=es')
  


  return (
    <WeatherContext.Provider value={{data, error, loading, dataNow}}>
      <Wrapper>
        <Div>
          <HeaderWapper>
            <Navbar />
          </HeaderWapper>
          <MainWrapper>
            <Main />
          </MainWrapper>
        </Div>
      </Wrapper>
    </WeatherContext.Provider>
  );
}

export default App;

const Wrapper = styled.main`
  display: grid;
  place-content: center;
  height: 100vh;
`

const Div = styled.div`
  width: 320px;  
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  @media (min-width: 567px) {
    width: 400px;
  }
`

const HeaderWapper = styled.nav`
  background-color: aqua;
  height: 100px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  @media (min-width: 768px) {
    width: 400px;
  }
`
const MainWrapper = styled.div`
  height: 500px;
  @media (min-width: 600px) {
    height: 700px;
  }
`