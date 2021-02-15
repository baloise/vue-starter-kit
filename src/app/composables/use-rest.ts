import { inject } from 'vue'
import { AxiosRequestConfig } from 'axios'
import { RestBuilder, Rest, createRest } from '@/plugins/rest.plugin'

export const useRest = (config: AxiosRequestConfig = {}): RestBuilder => {
  const rest = inject<Rest>('$rest', createRest)
  return rest(config)
}
