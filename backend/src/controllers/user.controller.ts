import { eq } from 'drizzle-orm'
import { db } from '../db/db'
import { UserInsert, usersTable } from '../db/schema/user'
import {
  checkFields,
  comparePassword,
  encryptPassword,
  encryptText,
  isValidEmail,
  TError,
  TryCatch,
} from '../utils'
import { COOKIE_OPTIONS } from '../utils/constant'

const handleRegister = TryCatch(async (req, res) => {
  const newUser = req.body as UserInsert
  checkFields(newUser)
  const [userAlreadyExists] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, newUser.email))
  if (userAlreadyExists) return TError('User Already Exists', 400)
  if (!isValidEmail(newUser.email)) return TError('Invalid Email', 400)
  const passwordHash = encryptPassword(newUser.password)
  const [user] = await db
    .insert(usersTable)
    .values({ ...newUser, password: passwordHash })
    .returning({ id: usersTable.id })

  const token = encryptText(user.id.toString())

  res.cookie('token', token, COOKIE_OPTIONS).json({ message: 'Registration SuccessFull' })
})

const handleLogin = TryCatch(async (req, res) => {
  const userData = req.body as Partial<UserInsert>
  if (!userData.email || !userData.password) return TError('Email or Password is missing', 400)
  const [user] = await db.select().from(usersTable).where(eq(usersTable.email, userData.email))
  if (!user) return TError('User Not Found', 404)
  if (!comparePassword(userData.password, user.password))
    return TError('Invalid Email or Password', 401)
  const token = encryptText(user.id.toString())
  res.cookie('token', token, COOKIE_OPTIONS).json({ message: 'Login SuccessFull' })
})

export { handleRegister, handleLogin }
