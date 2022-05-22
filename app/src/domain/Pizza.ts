export class Pizza {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public image: string,
  ) {}

  public isEqual(pizza: Pizza) {
    return this.name === pizza.name
  }
}
