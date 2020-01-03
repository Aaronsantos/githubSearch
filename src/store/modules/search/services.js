import api from '../../../util/api'

const userPath = '/users'

export const getUserByName = name => (
  api.get(`${userPath}/${name}`)
    .then(res => res.data)
)

export const getUserRepos = name => (
  api.get(`${userPath}/${name}/repos`)
    .then(res => {
      const { data } = res

      data.sort((a, b) => {
        if (a.stargazers_count < b.stargazers_count) {
          return 1
        } else if (a.stargazers_count > b.stargazers_count) {
          return -1
        } else return 0
      })

      return data
    })
)
