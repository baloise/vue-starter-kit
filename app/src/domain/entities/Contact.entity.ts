import { ContactDto, Gender } from '../domain.dto'

export class Contact implements ContactDto {
  constructor(
    public readonly gender: Gender,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly wantsNewsletter: boolean,
    public readonly email?: string,
  ) {}
}
