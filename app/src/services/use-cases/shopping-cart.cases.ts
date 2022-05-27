import { ShoppingCartItem } from '../../domain/ShoppingCartItem'
import { ShoppingCart } from '../../domain/ShoppingCart'
import { Pizza } from '../../domain/Pizza'
import { UseCase } from './use-case'

/**
 * ADD PIZZA - USE CASE
 * -----------------------------------------
 * Adds a pizza to the shopping cart or if there is already a pizza
 * in increases the amount.
 */

interface AddPizzaContext {
  pizza: Pizza
  list: ShoppingCartItem[]
}

interface AddPizzaSuccessContext {
  list: ShoppingCartItem[]
  total: number
  amount: number
}

export const addPizzaUseCase: UseCase<
  AddPizzaContext,
  AddPizzaSuccessContext
> = async ({ pizza, list }, { onSuccess, onError }) => {
  try {
    const shoppingCart = new ShoppingCart(list)
    shoppingCart.add(pizza)
    onSuccess({
      list: shoppingCart.list,
      total: shoppingCart.sum(),
      amount: shoppingCart.amount(),
    })
  } catch (error) {
    onError(error)
  }
}

/**
 * Remove PIZZA - USE CASE
 * -----------------------------------------
 * Removes a pizza to the shopping cart or if there is already a pizza
 * in decreases the amount.
 */

interface RemovePizzaContext {
  pizza: Pizza
  list: ShoppingCartItem[]
}

interface RemovePizzaSuccessContext {
  list: ShoppingCartItem[]
  total: number
  amount: number
}

export const removePizzaUseCase: UseCase<
  RemovePizzaContext,
  RemovePizzaSuccessContext
> = ({ pizza, list }, { onSuccess, onError }) => {
  try {
    const shoppingCart = new ShoppingCart(list)
    shoppingCart.remove(pizza)
    onSuccess({
      list: shoppingCart.list,
      total: shoppingCart.sum(),
      amount: shoppingCart.amount(),
    })
  } catch (error) {
    onError(error)
  }
}

/**
 * RESET SHOPPING CART - USE CASE
 * -----------------------------------------
 * Set the selected pizzas to 0, to have an empty shopping cart at the end.
 */

interface ResetSuccessContext {
  list: ShoppingCartItem[]
  total: number
  amount: number
}

export const resetUseCase: UseCase<unknown, ResetSuccessContext> = (
  _,
  { onSuccess, onError },
) => {
  try {
    const shoppingCart = new ShoppingCart([])
    shoppingCart.reset()
    onSuccess({
      list: shoppingCart.list,
      total: shoppingCart.sum(),
      amount: shoppingCart.amount(),
    })
  } catch (error) {
    onError(error)
  }
}
