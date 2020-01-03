import { useDispatch, useSelector } from 'react-redux'

import { searchUser, getUserRepos } from '../store/modules/search/actions'

const useSearch = () => {
  const search = useSelector(state => state.search)
  const dispatch = useDispatch()

  const dispatchSearchUser = (name) => dispatch(searchUser(name))
  const dispatchGetuserRepos = (name) => dispatch(getUserRepos(name))

  return {
    search,
    searchUser: dispatchSearchUser,
    getUserRepos: dispatchGetuserRepos
  }
}

export default useSearch
