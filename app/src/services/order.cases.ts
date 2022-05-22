import { ShoppingCartItem } from './../domain/ShoppingCartItem'
import { Order } from '../domain/Order'
import { ShoppingCart } from '../domain/ShoppingCart'
import { User } from '../domain/Contact'
import { UseCase } from './use-case'
import { EmptyShoppingCartException } from '../domain/Exceptions'

/**
 * CHECKOUT ORDER - USE CASE
 * -----------------------------------------
 * Removes a pizza to the shopping cart or if there is already a pizza
 * in decreases the amount.
 */

interface CheckoutOrderContext {
  items: ShoppingCartItem[]
  navigateToCheckout: () => void
}

interface CheckoutOrderSuccessContext {
  order: Order
}

export const checkoutOrderUseCase: UseCase<
  CheckoutOrderContext,
  CheckoutOrderSuccessContext
> = ({ items, navigateToCheckout }, { onSuccess, onError }) => {
  try {
    const shoppingCart = new ShoppingCart(items)
    const amount = shoppingCart.amount()

    if (amount <= 0) {
      throw new EmptyShoppingCartException()
    }
    const order = Order.create()
    navigateToCheckout()
    onSuccess({ order })
  } catch (error) {
    onError(error)
  }
}

interface MakeOrderContext {
  user: User
  shoppingCart: ShoppingCart
}

export const makeOrderUseCase: UseCase<MakeOrderContext> = (
  { user, shoppingCart },
  { onSuccess, onError },
) => {
  try {
    const order = new Order(user, shoppingCart)
    onSuccess(order)
  } catch (error) {
    onError(error)
  }
}
