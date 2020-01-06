import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import SearchIcon from '../../assets/Search Icon.svg'
import { Container } from './styles'

const SearchInput = props => {
  const [value, setValue] = useState('')

  const changeHandler = e => {
    setValue(e.target.value)
  }
  const submitHandler = e => {
    e.preventDefault()
    props.onSubmit(value)
  }

  useEffect(() => {
    if (props.value) {
      setValue(props.value)
    }
  }, [])

  return (
    <Container
      onSubmit={submitHandler}
      data-testid='search-form'
    >
      <input
        type='text'
        name='search'
        value={value}
        onChange={changeHandler}
      />
      <button
        type='submit'
        onClick={submitHandler}
      >
        <img src={SearchIcon} alt='Pesquisar' />
      </button>
    </Container>
  )
}
SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default SearchInput
