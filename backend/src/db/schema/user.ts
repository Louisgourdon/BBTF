import { pgEnum, pgTable, serial, varchar } from 'drizzle-orm/pg-core'

export const USER_ROLES = pgEnum('role', ['Admin', 'Contributor', 'Visitor'])

export const usersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  roles: USER_ROLES('roles').array().notNull().default(['Visitor']),
})

export type UserObject = typeof usersTable.$inferSelect
export type UserInsert = typeof usersTable.$inferInsert
export type UserRoles = (typeof USER_ROLES.enumValues)[number]
