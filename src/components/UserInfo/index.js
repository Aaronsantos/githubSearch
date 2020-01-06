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
      <img alt='Organização' src={OrganizationIcon} />
      <span>
        {props.organization}
      </span>
    </InfoItem>
    <InfoItem>
      <img alt='Localização' src={LocationIcon} />
      <span>
        {props.location}
      </span>
    </InfoItem>
    <InfoItem>
      <img alt='Avaliação' src={StarIcon} />
      <span data-testid='user-count-data'>
        {props.stars || 0}
      </span>
    </InfoItem>
    <InfoItem>
      <img alt='Repositórios' src={RepositoryIcon} />
      <span data-testid='user-count-data'>
        {props.repositories || 0}
      </span>
    </InfoItem>
    <InfoItem>
      <img alt='Seguidores' src={FollowersIcon} />
      <span data-testid='user-count-data'>
        {props.followers || 0}
      </span>
    </InfoItem>
  </InfoList>
)

UserInfo.propTypes = {
  organization: PropTypes.string,
  location: PropTypes.string,
  stars: PropTypes.number,
  repositories: PropTypes.number,
  followers: PropTypes.number
}

export default UserInfo
