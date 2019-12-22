import React from 'react'
import PropTypes from 'prop-types'

import StarIcon from '../../assets/star icon.svg'
import OrganizationIcon from '../../assets/organization icon.svg'
import LocationIcon from '../../assets/location icon.svg'
import RepositoryIcon from '../../assets/repositorie icon.svg'
import FollowersIcon from '../../assets/followers icon.svg'

import { InfoList, InfoItem } from './styles'

const UserInfo = props => (
  <InfoList>
    <InfoItem>
      <img src={OrganizationIcon} />
      <span>
        {props.organization}
      </span>
    </InfoItem>
    <InfoItem>
      <img src={LocationIcon} />
      <span>
        {props.location}
      </span>
    </InfoItem>
    <InfoItem>
      <img src={StarIcon} />
      <span>
        {props.stars}
      </span>
    </InfoItem>
    <InfoItem>
      <img src={RepositoryIcon} />
      <span>
        {props.repositories}
      </span>
    </InfoItem>
    <InfoItem>
      <img src={FollowersIcon} />
      <span>
        {props.followers}
      </span>
    </InfoItem>
  </InfoList>
)

UserInfo.propTypes = {
  organization: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  repositories: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired
}

export default UserInfo
