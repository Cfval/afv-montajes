import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

// Next.js 16: middleware renamed to proxy, function must be named `proxy`
export const proxy = createMiddleware(routing)

export const config = {
  matcher: [
    // Match all paths except Next.js internals and static files
    '/((?!_next|_vercel|.*\\..*).*)',
    '/([\\w-]+)?/api/(.*)',
  ],
}
