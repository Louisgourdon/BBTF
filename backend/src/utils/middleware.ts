import { eq } from 'drizzle-orm'
import { decryptText, TError, TryCatch } from '.'
import { db } from '../db/db'
import { UserRoles, usersTable } from '../db/schema/user'

export const authMiddleware = (role?: UserRoles[]) =>
  TryCatch(async (req, res, next) => {
    const token = req.cookies.token
    if (!token) return TError('Please Login To Continue', 400)
    const userId = decryptText(token)
    const [user] = await db.select().from(usersTable).where(eq(usersTable.id, +userId))
    if (!user) return TError('User Not Found', 404)
    if (role) {
      const userAllowed = await new Promise((resolve) => {
        let isUserAllowed = false
        role.forEach((role) => {
          if (user.roles.includes(role)) {
            isUserAllowed = true
          }
        })
        resolve(isUserAllowed)
      })
      if (!userAllowed) return TError('Unauthorized', 401)
    }
    req.user = user
    next()
  })
