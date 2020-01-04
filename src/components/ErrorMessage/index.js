import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

const ErrorMessage = ({ text }) => (
  <Container>
    <span>
      {text}
    </span>
  </Container>
)

ErrorMessage.propTypes = { text: PropTypes.string.isRequired }

export default ErrorMessage
