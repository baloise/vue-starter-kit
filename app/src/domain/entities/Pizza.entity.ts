import { PizzaDto } from '../domain.dto'

export class Pizza implements PizzaDto {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly price: number,
    public readonly image: string,
  ) {}
}
