import { HttpAdapter, HttpRequestConfig, HttpResponse } from './http'
import axios from 'axios'

export class AxiosAdapter extends HttpAdapter {
  async request<JsonBody = unknown>(
    requestConfig: HttpRequestConfig,
  ): Promise<HttpResponse<JsonBody>> {
    const config = { ...this.defaults, ...requestConfig }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const headers: { [key: string]: any } = {}
    config.headers?.forEach((value, key) => {
      headers[key] = value
    })

    const response = await axios.request({
      baseURL: config.baseURL,
      url: config.url,
      method: config.method,
      data: config.body,
      headers,
    })

    const responseHeaders = new Headers()
    for (const header in response.headers) {
      responseHeaders.append(header, response.headers[header])
    }

    return {
      ok: response.status >= 200 && response.status <= 299,
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
      json: () => JSON.parse(response.data),
      text: () => response.data,
      blob: () => response.data,
    }
  }
}
