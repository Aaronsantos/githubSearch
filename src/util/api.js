import axios from 'axios'

const baseUrl = 'https://api.github.com/'

const headers = {}

const instance = axios.create({ baseUrl, headers })

export default instance
