import axios from 'axios'
import { BASE_URL } from 'config/endpoints'

export const fetcher = axios.create({ baseURL: BASE_URL })
