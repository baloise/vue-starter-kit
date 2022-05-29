import { Pizza } from '../../domain/entities/Pizza.entity'
import {
  HttpAdapter,
  HttpRequestConfig,
  HttpResponse,
} from '../../lib/http/http'

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
  {
    name: 'Margherita',
    description: 'Tomato sauce, mozzarella, organic oregano',
    price: 16,
    image: 'src/app/assets/Margherita.jpeg',
  },
  {
    name: 'Stromboli',
    description:
      'Tomato sauce, mozzarella, fresh chillies, olives, organic oregano',
    price: 18,
    image: 'src/app/assets/Margherita.jpeg',
  },
  {
    name: 'Napoli',
    description:
      'Tomato sauce, mozzarella, anchovies MSC, capers, organic oregano',
    price: 19,
    image: 'src/app/assets/Margherita.jpeg',
  },
  {
    name: 'Funghi',
    description: 'Tomato sauce, mozzarella, fresh mushrooms, organic oregano',
    price: 20,
    image: 'src/app/assets/Margherita.jpeg',
  },
]

export const mockAdapter = new MockAdapter()
