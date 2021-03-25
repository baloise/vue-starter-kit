import { AxiosRequestConfig } from 'axios'

export const defaultApiConfig: AxiosRequestConfig = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}
