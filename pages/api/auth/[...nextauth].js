import NextAuth from 'next-auth'

const tenant = process.env.AZURE_TENANT_ID //or put in your tenant
const clientId = process.env.AZURE_CLIENT_ID
const clientSecret = process.env.AZURE_CLIENT_SECRET
const profilePhotoSize = 64

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    {
      id: 'azure-ad',
      name: 'Azure Active Directory',
      type: 'oauth',
      wellKnown: `https://login.microsoftonline.com/${tenant}/v2.0/.well-known/openid-configuration?appid=${clientId}`,
      authorization: {
        params: {
          scope: 'offline_access openid profile email User.Read ',
        },
      },
      async profile(profile, tokens) {
        // https://docs.microsoft.com/en-us/graph/api/profilephoto-get?view=graph-rest-1.0#examples
        const profilePicture = await fetch(
          `https://graph.microsoft.com/v1.0/me/photos/${profilePhotoSize}x${profilePhotoSize}/$value`,
          {
            headers: {
              Authorization: `Bearer ${tokens.access_token}`,
            },
          }
        )

        // Para usar no work
        let user = await fetch(`https://graph.microsoft.com/v1.0/me`, {
          headers: {
            Authorization: `Bearer ${tokens.access_token}`,
          },
        })
          .then((res) => {
            return res.json()
          })
          .catch((e) => {
            console.log(e)
          })

        // console.log(user)

        // Confirm that profile photo was returned
        if (profilePicture.ok) {
          const pictureBuffer = await profilePicture.arrayBuffer()
          const pictureBase64 = Buffer.from(pictureBuffer).toString('base64')
          return {
            id: profile.sub,
            name: profile.name,
            email: profile.preferred_username,
            image: `data:image/jpeg;base64, ${pictureBase64}`,
          }
        } else {
          return {
            id: profile.sub,
            name: profile.name,
            email: profile.preferred_username,
          }
        }
      },
      // callbacks: {
      //   async jwt({ props }) {
      //     console.log(props, 'jwt')
      //   },
      //   async session({ props }) {
      //     console.log(props, 'session')
      //   },
      //   async redirect({ props, baseUrl }) {
      //     console.log(props, 'redirect')
      //     return baseUrl
      //   },
      //   async authorized({ req, token }) {
      //     console.log(token)
      //     if (token) return true // If there is a token, the user is authenticated
      //   },
      // },
      options: {
        clientId: clientId,
        clientSecret: clientSecret,
      },
    },
  ],
})
