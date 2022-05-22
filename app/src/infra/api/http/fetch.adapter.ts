import { HttpAdapter, HttpRequestConfig, HttpResponse } from './http'

export class FetchAdapter extends HttpAdapter {
  async request<JsonBody = unknown>(
    config: HttpRequestConfig,
  ): Promise<HttpResponse<JsonBody>> {
    const baseURL = config.baseURL ? config.baseURL : this.defaults?.baseURL
    const resource = new URL(config.url || '', baseURL)

    const response = await fetch(resource.toString(), {
      method: config.method,
      body: config.body,
    })

    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      json: () => response.json(),
      text: () => response.text(),
      blob: () => response.blob(),
    }
  }
}
