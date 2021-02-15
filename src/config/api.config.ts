import { AxiosRequestConfig } from 'axios'

export const defaultApiConfig: AxiosRequestConfig = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}

export const apiConfig: AxiosRequestConfig = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'https://api.mocki.io',
}
