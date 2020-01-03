import React from 'react'

import { Container } from './styles'
import spinnerGif from '../../assets/spinner.gif'

const Spinner = () => (
  <Container>
    <img src={spinnerGif} alt='Carregando...' />
  </Container>
)

export default Spinner
