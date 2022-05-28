import styled from "@emotion/styled";



export const Item = styled.a`
padding: 1rem 0;
text-decoration: none;
color: black;
font-weight: 600;
padding-bottom: 0;
transition: transform 200ms ease-in-out;
${
  props => {
    const scale = props.active ? '1.3' : '1'
    return `transform: scale(${scale});`
  }
}
`