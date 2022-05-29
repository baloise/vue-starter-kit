import { CartItemDto } from '../domain.dto'
import { Pizza } from './Pizza.entity'

export class CartItem implements CartItemDto {
  constructor(public readonly pizza: Pizza, public readonly amount: number) {}
}
