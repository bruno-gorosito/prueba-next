import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";

export default NextAuth({
    providers:  [
        Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    // database: process.env.MONGODB_URI,
    // session: {
    //     jwt: true
    // },
    // jwt: {
    //     secret: 'olatoperri'
    // },
    // adapter: MongoDBAdapter(clientPromise),
    // callbacks: {
    //     async jwt(token, user) {
    //         if (user) {
    //             token.id= user.id
    //         }
    //         return token
    //     },
    //     async session(session, token) {
    //         session.user.id = token.id
    //         return session;
    //     }

    // }
})