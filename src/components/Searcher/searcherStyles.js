import styled from "@emotion/styled"



export const InputContainer = styled.form`
padding-bottom: 0.5rem;
padding-top: 0.5rem;
display: flex;
justify-content: center;
width: 100%;
position: relative;
`

export const Input = styled.input`
width: 100%;
padding: 0.6rem;
padding-left: 2rem;
border-radius: 8px;
border: 1px solid #ccc;
outline: none;
font-weight: 400;
letter-spacing: 0.2ch;
font-size: 18px;
font-family: 'abel', sans-serif;
`

export const Svg = styled.svg`
position: absolute;
display: block;
content: ''; 
left: 7px;
bottom: 16.5px;
cursor: pointer;
height: 25px;
width: 27px;
`