import React from 'react'
import ReactDOM from 'react-dom'
import ErrorMessage from '../../components/ErrorMessage'

it('ErrorMessage renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ErrorMessage text='Testing' />, div)
  ReactDOM.unmountComponentAtNode(div)
})
