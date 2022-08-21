import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const secret = process.env.NEXTAUTH_SECRET || 'secret'

export default async function middleware(req: NextRequest) {
  const jwt = req.cookies.get('next-auth.session-token')
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/protected-page')) {
    if (jwt === undefined) {
      req.nextUrl.pathname = '/login'
      return NextResponse.redirect(req.nextUrl)
    } else {
      NextResponse.next()
    }

    // try {
    //   await verify(jwt, secret)
    //   return NextResponse.next()
    // } catch (error) {
    //   console.log(error)
    //   req.nextUrl.pathname = '/login'
    //   return NextResponse.redirect(req.nextUrl)
    // }
  }

  return NextResponse.next()
}
