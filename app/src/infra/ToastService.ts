import { balToastController } from '@baloise/design-system-components'
import { NotificationService } from '../services/interfaces/NotificationService'

export class ToastService implements NotificationService {
  success(message: string) {
    balToastController.create({ color: 'success', message })
  }
}
