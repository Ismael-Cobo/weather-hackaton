import styled from "@emotion/styled"


export const ContainerScroll = styled.div`
width: 100%;
height: 100%;
scroll-snap-type: x mandatory;
overflow-x: scroll;
display: flex;
scroll-behavior: smooth;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
&::-webkit-scrollbar{
  display: none;
}
`

export const Section = styled.section`
flex: none;
display: flex;
width: 100%;
height: 100%;
scroll-snap-align: start;
&:nth-of-type(3) {
  background-color: bisque;
}
${props => {
  const error = props.error ? 'assets/bg/sunnyLate.jpg' : ''
  return `background-image:url(${error}) `
}
}
`

export const SectionError = styled.section`
width: 100%;
height: 100%;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-image: url('assets/bg/sunnyLate.jpg');
`
