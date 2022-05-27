import styled from '@emotion/styled'
import React from 'react'
import { Container } from '../../styles/Container'

export const Error = () => {
  return (
    <Container>
      <H1>Error, the country/region could not be found.</H1>
    </Container>
  )
}

const H1 = styled.h1`
  margin: 0;
  padding-top: 1rem;
`
