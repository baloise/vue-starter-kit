export type Gender = 'male' | 'female'

export class Contact {
  constructor(
    public firstName: string,
    public lastName: string,
    public gender: Gender,
    public email: string,
  ) {}

  static create() {
    return new Contact('', '', 'male', '')
  }
}
