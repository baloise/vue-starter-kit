import Vue from 'vue'
import { AxiosInstance } from 'axios'
import { Rest } from '../lib/http/rest'

declare module 'vue/types/vue' {
  interface VueConstructor {
    $http: AxiosInstance
    $rest: Rest
  }

  interface Vue {
    $http: AxiosInstance
    $rest: Rest
  }
}
