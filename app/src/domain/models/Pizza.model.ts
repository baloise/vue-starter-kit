import { clone, DomainModel } from '../../lib'
import { Pizza } from '../entities/Pizza.entity'

export class PizzaModel extends DomainModel<Pizza> implements Pizza {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public image: string,
  ) {
    super()
  }

  static create(pizza?: Partial<Pizza>): PizzaModel {
    const newPizza = clone<Pizza>({ ...PizzaModel.defaults(), ...pizza })
    return new PizzaModel(
      newPizza.name,
      newPizza.description,
      newPizza.price,
      newPizza.image,
    )
  }

  static defaults(): Pizza {
    return {
      name: '',
      description: '',
      price: 0,
      image: '',
    }
  }

  isEqual(pizza: Pizza): boolean {
    return pizza.name === this.name
  }
}
