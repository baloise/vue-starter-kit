import { Result } from '../../lib/domain.lib'
import { CartItem } from '../../domain/entities/CartItem.entity'
import { Pizza } from '../../domain/entities/Pizza.entity'
import { Order } from '../../domain/entities/Order.entity'

export interface PizzaApiCreateDto {
  order: Order
  items: CartItem[]
}

export interface PizzaApi {
  getAll: () => Promise<Result<Pizza[], string>>
  create: (dto: PizzaApiCreateDto) => Promise<Result<void, string>>
}
