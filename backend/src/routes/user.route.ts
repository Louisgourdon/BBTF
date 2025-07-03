import { Router } from 'express'
import { handleLogin, handleRegister } from '../controllers/user.controller'
import { authMiddleware } from '../utils/middleware'

const userRouter = Router()

// for testing role based auth
userRouter.route('/').get(authMiddleware(['Admin']), (req, res) => {
  res.send('Hello Admin')
})
userRouter.route('/register').post(handleRegister)
userRouter.route('/login').post(handleLogin)

export default userRouter
