import { Router } from 'express'

import { messagesRouter } from './messages.routes'
import { settingsRouter } from './settings.routes'
import { usersRouter } from './users.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/settings', settingsRouter)
routes.use('/messages', messagesRouter)

export default routes
