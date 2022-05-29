import { Pizza } from '../../domain/entities/Pizza.entity'
import { CartItem } from './../../domain/entities/CartItem.entity'

export interface CartStoreState {
  items: CartItem[]
  loading: boolean
  failed: boolean
}

export interface CartStoreActions {
  addPizza(pizza: Pizza): Promise<void>
  removePizza(pizza: Pizza): Promise<void>
  reset(): void
}

export interface CartStore extends CartStoreActions {}
