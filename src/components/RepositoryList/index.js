import React from 'react'
import PropTypes from 'prop-types'

import RepositoryResume from '../RepositoryResume'
import { Container } from './styles'

const RepositoryList = (props) => (
  <Container>
    {props.repositoryList
      .map(repo => (
        <li key={repo.id} >
          <RepositoryResume
            description={repo.description}
            stars={repo.stargazers_count}
            title={repo.name}
          />
        </li>
      ))}
  </Container>
)

RepositoryList.propTypes = { repositoryList: PropTypes.array }

export default RepositoryList
