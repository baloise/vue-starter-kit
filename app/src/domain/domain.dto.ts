export type Gender = 'male' | 'female'

export interface ContactDto {
  gender: Gender
  firstName: string
  lastName: string
  wantsNewsletter: boolean
  email?: string
}

export interface AddressDto {
  postalCode: string
  city: string
  street: string
  streetNumber: string
}

export interface OrderDto {
  contact: ContactDto
  deliveryAddress: AddressDto
}

export interface PizzaDto {
  name: string
  description: string
  price: number
  image: string
}

export interface CartItemDto {
  pizza: PizzaDto
  amount: number
}

export interface CartDto {
  items: CartItemDto[]
}
