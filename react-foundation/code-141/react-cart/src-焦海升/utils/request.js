import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:8888'
})

export default request