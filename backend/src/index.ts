import express, { NextFunction, Request, Response } from 'express'
import { ApiError } from './utils'
import cors from 'cors'
import router from './routes'
import { config } from 'dotenv'
import path from 'path'
import cookieParser from 'cookie-parser'
import { UserObject } from './db/schema/user'
config({ path: path.join(__dirname, '../.env') })

const app = express()
const PORT = process.env.PORT || 5000

declare module 'express' {
  // Inject additional properties on express.Request
  interface Request {
    user?: UserObject
  }
}

app.use(express.json({ limit: '100mb' }))
app.use(cookieParser())
app.use(
  cors({
    origin: process.env.FRONTEND_URL!,
    credentials: true,
  }),
)

app.use('/', router)

app.use((err: ApiError, _req: Request, res: Response, next: NextFunction) => {
  console.log(err)
  res.json({ error: err.message, status: err?.status || 500 })
  next()
})

app.get('/', (_req, res) => {
  res.send('Hello TypeScript with Express!')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
