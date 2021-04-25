import { Router } from 'express'
import { MessagesController } from '../controllers/MessagesController'
const messagesRouter = Router()

const messagesController = new MessagesController()

messagesRouter.get('/:user_id', messagesController.showByUser)

messagesRouter.post('/', messagesController.create)

export { messagesRouter }
