import React from 'react'

import { Container } from '../../styles/Container'

import { ErrorH1 } from './errorStyles'

export const Error = () => {
  return (
    <Container>
      <ErrorH1>Error, the country/region could not be found.</ErrorH1>
    </Container>
  )
}

