export type Gender = 'male' | 'female'

export class Contact {
  constructor(
    public gender: Gender,
    public lastName: string,
    public wantsNewsletter: boolean,
    public firstName?: string,
    public email?: string,
  ) {}

  static create() {
    return new Contact('male', '', false, 'Bobby', '')
  }
}
