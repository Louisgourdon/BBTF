import { CookieOptions } from 'express'

export const COOKIE_OPTIONS: CookieOptions = {
  path: '/',
  secure: true,
  sameSite: 'none',
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24,
}

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
