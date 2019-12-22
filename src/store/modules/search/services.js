import api from '../../../util/api'

const userPath = '/users'

export const getUserByName = name => (
  api.get(`${userPath}/${name}`)
    .then(res => res.data)
)

export const getUserRepos = name => (
  api.get(`${userPath}/${name}/repos`)
    .then(res => res.data)
)
