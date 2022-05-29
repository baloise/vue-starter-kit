import { clone, DomainModel } from '../../lib'
import { Address } from '../entities/Address.entity'

export class AddressModel extends DomainModel<Address> implements Address {
  constructor(
    public postalCode: string,
    public city: string,
    public street: string,
    public streetNumber: string,
  ) {
    super()
  }

  static create(address?: Partial<Address>): AddressModel {
    const newAddress = clone<Address>({
      ...AddressModel.defaults(),
      ...address,
    })
    return new AddressModel(
      newAddress.postalCode,
      newAddress.city,
      newAddress.street,
      newAddress.streetNumber,
    )
  }

  static defaults(): Address {
    return {
      postalCode: '',
      city: '',
      street: '',
      streetNumber: '',
    }
  }
}
