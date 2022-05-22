export class Address {
  constructor(
    public postalCode: string,
    public city: string,
    public street: string,
    public streetNumber: string,
  ) {}

  static create() {
    return new Address('', '', '', '')
  }
}
