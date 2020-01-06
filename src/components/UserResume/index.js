import React from 'react'
import PropTypes from 'prop-types'

import UserAvatar from '../UserAvatar'
import UserInfo from '../UserInfo'

import { Container } from './styles.js'

const UserResume = props => {
  const {
    fullName,
    userName,
    avatarUrl,
    stars,
    organization,
    repositories,
    location,
    followers
  } = props

  return (
    <Container>
      <UserAvatar
        avatarUrl={avatarUrl}
        fullName={fullName}
        userName={userName}
      />
      <UserInfo
        followers={followers}
        location={location}
        organization={organization}
        stars={stars}
        repositories={repositories}
      />
    </Container>
  )
}

UserResume.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  fullName: PropTypes.string,
  userName: PropTypes.string.isRequired,
  organization: PropTypes.string,
  location: PropTypes.string,
  stars: PropTypes.number,
  repositories: PropTypes.number,
  followers: PropTypes.number
}

export default UserResume
