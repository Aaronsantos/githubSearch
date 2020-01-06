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
    <Container
      rowLayout={props.rowLayout}
      data-testid='search-header-container'
    >
      < img src={Logo} alt='GitHubSearch' onClick={() => history.push('/')} />
      <SearchInput onSubmit={goSearch} value={props.value}/>
    </Container>
  )
}

SearchHeader.propTypes = {
  rowLayout: PropTypes.bool,
  value: PropTypes.string
}

export default SearchHeader
