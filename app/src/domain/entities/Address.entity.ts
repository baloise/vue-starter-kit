import { AddressDto } from '../domain.dto'

export class Address implements AddressDto {
  constructor(
    public readonly postalCode: string,
    public readonly city: string,
    public readonly street: string,
    public readonly streetNumber: string,
  ) {}
}
