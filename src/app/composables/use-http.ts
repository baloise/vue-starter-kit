import { inject } from 'vue'
import Axios from 'axios'

export const useHttp = (): typeof Axios => inject<typeof Axios>('$http', Axios)
