import { CartDto } from '../domain.dto'
import { CartItem } from './CartItem.entity'

export class Cart implements CartDto {
  constructor(public items: CartItem[]) {}
}
