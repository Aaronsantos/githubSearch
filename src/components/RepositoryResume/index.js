import React from 'react'
import PropTypes from 'prop-types'

import { Container, Title, Description, Star } from './styles'
import StarIcon from '../../assets/star icon.svg'

const RepositoryResume = props => (
  <Container data-testid='repo-resume'>
    <Title>
      {props.title}
    </Title>
    <Description>
      {props.description}
    </Description>
    <Star>
      <img alt='Estrelas' src={StarIcon} />
      <span>
        {props.stars}
      </span>
    </Star>
  </Container>
)

RepositoryResume.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired
}

export default RepositoryResume
