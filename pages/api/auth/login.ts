// /* eslint-disable import/no-anonymous-default-export */
// import { serialize } from 'cookie'
// import { sign } from '../../../services/jwt_sign_verify'

// const secret = process.env.NEXTAUTH_SECRET || 'secret'

// export default async function (req: any, res: any) {
//   const { username, password } = req.body

//   // Check-in the database for a match,
//   //serialize and check your data before doing any operations.
//   //This IF statement is for checking demo purposes only.
//   if (username === 'Admin' && password === 'Admin') {
//     const token = await sign(
//       'testing', //do some magic here
//       secret
//     )

//     const serialised = serialize('OursiteJWT', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV !== 'development',
//       sameSite: 'strict',
//       maxAge: 60 * 60 * 24 * 30,
//       path: '/',
//     })

//     res.setHeader('Set-Cookie', serialised)

//     res.status(200).json({ message: 'Success!' })
//   } else {
//     res.status(401).json({ message: 'Invalid credentials!' })
//   }
// }
