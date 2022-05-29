export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK'

export interface HttpRequestConfig {
  baseURL?: string
  url?: string
  method?: Method | string
  headers?: Headers
  body?: BodyInit | null
}

export interface HttpResponse<JsonBody> {
  readonly headers: Headers
  readonly ok: boolean
  readonly status: number
  readonly statusText: string
  json(): Promise<JsonBody>
  blob(): Promise<Blob>
  text(): Promise<string>
}

export abstract class HttpAdapter {
  constructor(public defaults?: HttpRequestConfig) {}

  abstract request<JsonBody = unknown>(
    config: HttpRequestConfig,
  ): Promise<HttpResponse<JsonBody>>

  public get<JsonBody = unknown>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<HttpResponse<JsonBody>> {
    return this.request({ ...this.defaults, ...config, url })
  }

  public delete<JsonBody = unknown>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<HttpResponse<JsonBody>> {
    return this.request({ ...this.defaults, ...config, url, method: 'delete' })
  }

  public post<JsonBody = unknown>(
    url: string,
    body?: BodyInit | null,
    config?: HttpRequestConfig,
  ): Promise<HttpResponse<JsonBody>> {
    return this.request({
      ...this.defaults,
      ...config,
      url,
      body,
      method: 'post',
    })
  }

  public put<JsonBody = unknown>(
    url: string,
    body?: BodyInit | null,
    config?: HttpRequestConfig,
  ): Promise<HttpResponse<JsonBody>> {
    return this.request({
      ...this.defaults,
      ...config,
      url,
      body,
      method: 'put',
    })
  }
}
