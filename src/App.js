import styled from "@emotion/styled";

import { Navbar } from "./pages/Header/Navbar";
import { Main } from "./pages/Main/Main";

function App() {
  return (
    <Wrapper>
      <HeaderWapper>
        <Navbar />
      </HeaderWapper>
      <MainWrapper>
        <Main />
      </MainWrapper>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  display: grid;
  grid-template-rows:8rem calc(100% - 8rem);
`

const HeaderWapper = styled.nav`
  background-color: aqua;
`
const MainWrapper = styled.div`
  background-color: crimson;
`