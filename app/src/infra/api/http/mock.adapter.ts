import { Pizza } from '../../../domain/Pizza'
import { HttpAdapter, HttpRequestConfig, HttpResponse } from './http'

export class MockAdapter extends HttpAdapter {
  async request<JsonBody = unknown>(
    config: HttpRequestConfig,
  ): Promise<HttpResponse<JsonBody>> {
    const resource = config.url

    const mockedResponse = {
      ok: true,
      status: 200,
      statusText: 'OK',
      headers: new Headers(),
      json: async () => {
        let json
        switch (resource) {
          case '/pizzas':
            json = pizzas
            break

          default:
            json = {}
            break
        }

        return json as JsonBody
      },
      text: async () => {
        return ''
      },
      blob: async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return null as any
      },
    }

    // add a latency to symbol a api call
    await wait(1200)

    return Promise.resolve(mockedResponse)
  }
}

const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(() => resolve(undefined), ms))

const pizzas: Pizza[] = [
  new Pizza(
    'Margherita',
    'Tomato sauce, mozzarella, organic oregano',
    16,
    'src/app/assets/Margherita.jpeg',
  ),
  new Pizza(
    'Stromboli',
    'Tomato sauce, mozzarella, fresh chillies, olives, organic oregano',
    18,
    'src/app/assets/Stromboli.jpeg',
  ),
  new Pizza(
    'Napoli',
    'Tomato sauce, mozzarella, anchovies MSC, capers, organic oregano',
    19,
    'src/app/assets/Napoli.jpeg',
  ),
  new Pizza(
    'Funghi',
    'Tomato sauce, mozzarella, fresh mushrooms, organic oregano',
    20,
    'src/app/assets/Funghi.jpeg',
  ),
]

export const mockAdapter = new MockAdapter()
