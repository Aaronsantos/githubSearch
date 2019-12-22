import React from 'react'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'

import { searchUser, getUserRepos } from '../../store/modules/search/actions'

const WithSearch = ChildComponent => (props) => (<ChildComponent {...props} />)

const mapStateToProps = ({ search }) => ({
  search
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    searchUser,
    getUserRepos
  }, dispatch)

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithSearch
)
