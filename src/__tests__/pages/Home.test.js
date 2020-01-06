import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from '../../pages/Home'

describe('Home Page', () => {
  it('Home page renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<HomePage />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
