import React from 'react'
import ReactDOM from 'react-dom'
import RepositoryList from '../../components/RepositoryList'
import { render } from '@testing-library/react'

import data from '../__mocks__/repos.json'

describe('RepositoryList Component', () => {
  it('RepositoryList renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<RepositoryList repositoryList={[]} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('RepositoryList renders a RepoResume for each repository in list', () => {
    const repositoryList = render(<RepositoryList repositoryList={data} />)
    const repositories = repositoryList.getAllByTestId('repo-resume')
    expect(repositories.length).toBe(data.length)
  })
})
