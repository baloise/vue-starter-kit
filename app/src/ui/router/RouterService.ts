import { Router } from 'vue-router'
import { RouterService } from '../../services/interfaces/RouterService'

export class VueRouterService implements RouterService {
  constructor(private readonly router: Router) {}

  async goToHome() {
    await this.router.push({ name: 'Home' })
  }

  async goToCheckout() {
    await this.router.push({ name: 'Checkout' })
  }
}
