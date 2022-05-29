import { OrderDto } from '../domain.dto'
import { Address } from './Address.entity'
import { Contact } from './Contact.entity'

export class Order implements OrderDto {
  constructor(
    public readonly contact: Contact,
    public readonly deliveryAddress: Address,
  ) {}
}
