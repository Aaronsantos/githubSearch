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
    followers,
    loading
  } = props

  if (loading) {
    return (<span>loading...</span>)
  } else {
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
}

UserResume.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  repositories: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  loading: PropTypes.bool

}

export default UserResume
