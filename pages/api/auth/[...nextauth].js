import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        session: ({ session, token }) => {
            console.log("Session Callback", { session, token });
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    randomKey: token.randomKey,
                },
            };
        },
        jwt: ({ token, user }) => {
            console.log("JWT Callback", { token });
            if (user) {
                const u = user;
                return {
                    ...token,
                    id: u.id,
                    randomKey: u.randomKey,
                };
            }
            return token;
        },
    }
};
export default NextAuth(authOptions);