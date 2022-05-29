import { AddressModel } from './Address.model'
import { ContactModel } from './Contact.model'
import { DomainModel } from '../../lib'
import { Order } from '../entities/Order.entity'

export class OrderModel extends DomainModel<Order> implements Order {
  constructor(
    public contact: ContactModel,
    public deliveryAddress: AddressModel,
  ) {
    super()
  }

  static create(order?: Partial<Order>): OrderModel {
    return new OrderModel(
      ContactModel.create(order?.contact),
      AddressModel.create(order?.deliveryAddress),
    )
  }

  static defaults(): Order {
    return {
      contact: ContactModel.create(),
      deliveryAddress: AddressModel.create(),
    }
  }
}
