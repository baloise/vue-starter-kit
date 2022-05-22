import { Address } from './Address'
import { Contact } from './Contact'

export class Order {
  constructor(public contact: Contact, public deliveryAddress: Address) {}

  static create() {
    return new Order(Contact.create(), Address.create())
  }
}
