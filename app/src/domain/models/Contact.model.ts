import { clone, DomainModel } from '../../lib'
import { Contact } from '../entities/Contact.entity'
import { Gender } from '../entities/Gender.type'

export class ContactModel extends DomainModel<Contact> implements Contact {
  constructor(
    public gender: Gender,
    public firstName: string,
    public lastName: string,
    public wantsNewsletter: boolean,
    public email?: string,
  ) {
    super()
  }

  static create(contact?: Partial<Contact>): ContactModel {
    const newContact = clone<Contact>({
      ...ContactModel.defaults(),
      ...contact,
    })
    return new ContactModel(
      newContact.gender,
      newContact.firstName,
      newContact.lastName,
      newContact.wantsNewsletter,
      newContact.email,
    )
  }

  static defaults(): Contact {
    return {
      gender: 'male',
      firstName: '',
      lastName: '',
      wantsNewsletter: false,
      email: '',
    }
  }
}
