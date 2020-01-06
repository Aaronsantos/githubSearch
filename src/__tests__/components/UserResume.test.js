import React from 'react'
import ReactDOM from 'react-dom'
import UserResume from '../../components/UserResume'
import { render } from '@testing-library/react'

import data from '../__mocks__/user.json'

describe('UserResume Component', () => {
  it('UserResume renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <UserResume
        avatarUrl={data.avatar_url}
        followers={data.followers}
        organization={data.company}
        fullName={data.name}
        userName={data.login}
        repositories={data.public_repos}
        location={data.location}
        stars={data.stars}
      />
    ), div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('UserResume renders correctly with some empty fields', () => {
    const userResume = render((
      <UserResume
        avatarUrl={data.avatar_url}
        organization={data.company}
        fullName={data.name}
        userName={data.login}
        location={data.location}
      />
    ))
    const userCountFields = userResume.getAllByTestId('user-count-data')
    userCountFields.forEach(field => {
      expect(field).toHaveTextContent('0')
    })
  })
})
