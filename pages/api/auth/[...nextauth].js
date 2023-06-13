import User from '@/models/User'
import db from '@/utils/db'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import bcrypt from "bcrypt"
import NextAuth from 'next-auth'
import Auth0Provider from "next-auth/providers/auth0"
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import clientPromise from './lib/mongodb'


export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
                const email = credentials.email
                const password = credentials.password
                const user = await User.findOne({ email })

                if (user) {
                    return SignInUser({ user, password })
                } else {
                    throw new Error('This email is not registered.')
                }
            }
        }),
        // OAuth authentication providers...
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            issuer: process.env.AUTH0_ISSUER
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            let user = await User.findById(token.sub);
            session.user.id = token.sub || user._id.toSting();
            session.user.role = user.role || "user";
            token.role = user.role || "user";
            return session;
        },
    },
    pages: {
        signIn: '/signin',
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.JWT_SECRET,
})

const SignInUser = async ({ user, password }) => {
    await db.connectDb()
    if (!user.password) {
        throw new Error("Please enter your password.");
    }
    const testPassword = await bcrypt.compare(password, user.password);
    if (!testPassword) {
        throw new Error("Email or password is wrong!");
    }
    return user;
};