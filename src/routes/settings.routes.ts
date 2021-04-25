import { Router } from 'express'
import { SettingsController } from '../controllers/SettingsController'
const settingsRouter = Router()

const settingsController = new SettingsController()

settingsRouter.get('/:username', settingsController.findByUsername)
settingsRouter.put('/:username', settingsController.update)

settingsRouter.post('/', settingsController.create)

export { settingsRouter }
