import React, { useState } from 'react'
import PropTypes from 'prop-types'

import SearchIcon from '../../assets/Search Icon.svg'
import { Container } from './styles'

const SearchInput = props => {
  const [value, setValue] = useState('')

  const changeHandler = e => setValue(e.target.value)
  const submitHandler = e => {
    e.preventDefault()
    props.onSubmit(value)
  }

  return (
    <Container onSubmit={submitHandler} >
      <input
        type='text'
        name='search'
        value={value}
        onChange={changeHandler}
      />
      <button
        type='submit'
        onClick={props.onSubmit}
      >
        <img src={SearchIcon} alt='Pesquisar' />
      </button>
    </Container>
  )
}
SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SearchInput
