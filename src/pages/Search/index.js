import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import UserResume from '../../components/UserResume'
import RepositoryList from '../../components/RepositoryList'
import SearchHeader from '../../components/SearchHeader'
import Spinner from '../../components/Spinner'
import ErrorMessage from '../../components/ErrorMessage'
import useSearch from '../../hooks/useSearch'

import { Container } from './styles'

const SearchPage = props => {
  const {
    search,
    searchUser
  } = useSearch()

  const {
    result,
    loading,
    error
  } = search

  const {
    item,
    repos
  } = result

  const { username } = props.match.params

  useEffect(() => {
    searchUser(username)
  }, [username])

  return (
    <>
      <SearchHeader rowLayout />
      <Container>
        {
          loading
            ? <Spinner />
            : error
              ? (<ErrorMessage text={error} />)
              : (
                <>
                  <UserResume
                    avatarUrl={item.avatar_url}
                    followers={item.followers}
                    organization={item.company}
                    fullName={item.name}
                    userName={item.login}
                    repositories={item.public_repos}
                    location={item.location}
                    stars={item.stars}
                  />
                  <RepositoryList repositoryList={repos.list} loading={repos.loading} />
                </>
              )
        }
      </Container>
    </>
  )
}

SearchPage.propTypes = {
  match: PropTypes.object
}

export default withRouter(SearchPage)
