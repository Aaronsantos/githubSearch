import React from 'react'
import PropTypes from 'prop-types'

import { Container, FullName, UserName } from './styles'

const UserAvatar = props => (
  <Container>
    <img alt={props.fullName} src={props.avatarUrl} />
    <FullName>{props.fullName}</FullName>
    <UserName>{props.userName}</UserName>
  </Container>
)

UserAvatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  fullName: PropTypes.string,
  userName: PropTypes.string.isRequired
}

export default UserAvatar
