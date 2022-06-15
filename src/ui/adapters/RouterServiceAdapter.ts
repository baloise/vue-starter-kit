import { Router } from 'vue-router'
import { RouterService } from '@/core/ports/RouterService'

export class RouterServiceAdapter implements RouterService {
  constructor(private readonly router: Router) {}

  async goToHome() {
    await this.router.push({ name: 'Home' })
  }

  async goToPokemon() {
    await this.router.push({ name: 'Pokemon' })
  }
}
