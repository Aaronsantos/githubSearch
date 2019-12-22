import React from 'react'

import GlobalStyle from './styles/global'

import RepositoryResume from './components/RepositoryResume'
import UserAvatar from './components/UserAvatar'
import UserInfo from './components/UserInfo'

const App = () => (
  <>
    <RepositoryResume
      title='Hello World!'
      description='It is a Repo description for the chanllenge test'
      stars={93}
    />
    <br/><br/>
    <UserAvatar
      avatarUrl='https://avatars3.githubusercontent.com/u/26466163?s=460&v=4'
      fullName='Aaron Santos'
      userName='aaronsantos'
    />
    <UserInfo
      location='Recife'
      followers={4}
      organization='Concrete Solution'
      repositories={9}
      stars={6}
    />
    <GlobalStyle />
  </>
)

export default App
