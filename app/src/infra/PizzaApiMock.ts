import { PizzaApi, PizzaApiCreateDto } from '../services/interfaces/PizzaApi'
import { Result } from '../lib/domain.lib'

export class PizzaApiImpl implements PizzaApi {
  async getAll() {
    await this.wait()
    return Result.ok(PizzaApiImpl.pizzas)
  }

  async create(dto: PizzaApiCreateDto) {
    await this.wait()
    if (dto) {
      return Result.ok()
    }
    return Result.fail('Empty body')
  }

  private wait() {
    return new Promise((resolve) => setTimeout(() => resolve(undefined), 1200))
  }

  static pizzas = [
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
}
