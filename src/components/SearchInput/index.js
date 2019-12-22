import React from 'react'
import PropTypes from 'prop-types'

import SearchIcon from '../../assets/Search Icon.svg'
import { Container } from './styles'

const SearchInput = props => (
  <Container onSubmit={props.onSubmit} >
    <input
      type='text'
      name='search'
      onChange={props.onChange}
    />
    <button
      type='submit'
      onClick={props.onSubmit}
    >
      <img src={SearchIcon} alt='Pesquisar' />
    </button>
  </Container>
)

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func
}

export default SearchInput
