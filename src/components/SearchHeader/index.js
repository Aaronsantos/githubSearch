import React from 'react'
import PropTypes from 'prop-types'

import SearchInput from '../../components/SearchInput'
import Logo from '../../assets/logo.svg'
import history from '../../routes/history'
import { Container } from './styles'

const SearchHeader = props => {
  const goSearch = (value) => {
    history.push(`/search/${value}`)
  }

  return (
    <Container rowLayout>
      < img src={Logo} alt='GitHubSearch' />
      <SearchInput onSubmit={goSearch} />
    </Container>
  )
}

SearchHeader.propTypes = {
  rowLayout: PropTypes.bool
}

export default SearchHeader
