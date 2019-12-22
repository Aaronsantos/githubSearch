import HomePage from '../pages/Home'
import SearchPage from '../pages/Search'

const pathUrl = [{
  path: '/',
  component: HomePage
}, {
  path: '/search/:username',
  component: SearchPage
}]

export default pathUrl
