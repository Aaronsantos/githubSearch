import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import UserResume from '../../components/UserResume'
import RepositoryList from '../../components/RepositoryList'
import SearchHeader from '../../components/SearchHeader'
import WithSearch from '../../components/WithSearchHoc'

import { Container } from './styles'

const SearchPage = props => {
  const {
    result,
    loading
  } = props.search

  const {
    item,
    repos
  } = result

  return (
    <>
      <SearchHeader rowlayout />
      <Container>
        {
          loading
            ? 'Carregando'
            : (
              <>
                <UserResume
                  avatarUrl={item && item.avatar_url}
                  followers={item && item.followers}
                  organization={item && item.company}
                  fullName={item && item.name}
                  userName={item && item.login}
                  repositories={item && item.public_repos}
                  location={item && item.location}
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
  search: PropTypes.object,
  searchUser: PropTypes.func,
  match: PropTypes.object
}

export default withRouter(WithSearch(SearchPage))
