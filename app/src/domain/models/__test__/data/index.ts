import { Address } from '../../func/Address'
import { Pizza } from '../../Pizza'
import { User } from '../../Contact'

export const pizzaMargherita = new Pizza(
  'Margherita',
  'Tomato sauce, mozzarella, organic oregano',
  16,
  '',
)

export const pizzaStromboli = new Pizza(
  'Stromboli',
  'Tomato sauce, mozzarella, fresh chillies, olives, organic oregano',
  18,
  '',
)

export const addressBasel = new Address('4000', 'Basel', 'Aeschengraben', '21')

export const userJohnDoe = new User(
  'John',
  'Doe',
  'male',
  'john.doe@baloise.com',
  addressBasel,
)
