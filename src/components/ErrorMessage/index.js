import React from 'react'

import { Container } from './styles'

const ErrorMessage = ({ text }) => (
  <Container>
    <span>
      {text}
    </span>
  </Container>
)

export default ErrorMessage
