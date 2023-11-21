import { Auth } from '@/lib/auth';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptionts: NextAuthOptions = {
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },

      async authorize(credentials) {
        if (!credentials) return null;
        if (
          credentials?.email === null ||
          '' ||
          credentials?.password === null ||
          ''
        ) {
          return null;
        }
        try {
          const user = await Auth.signIn({
            email: credentials?.email,
            password: credentials?.password,
          });

          return {
            id: user.id,
            email: user.email,
          };
        } catch (error) {
          if (error instanceof Error) throw new Error(error.message);
          return null;
        }
      },
    }),

    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
  ],

  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    // //   if (account?.provider === "google") {
    // //     if (!profile?.email || !profile.name) {
    // //       throw new Error("no profile");
    // //     }

    // if(!profile)
    // return null;
    //     try {
    //       const user = await Auth.createUserProfile({
    //         email: profile.email,
    //         username: profile.name,
    //         avatar: (profile as any).picture || "/avatar.png",
    //       });
    //       if (!user) throw new Error("internal server error");
    //     } catch (error) {
    //       throw new Error("internal server error");
    //     }
    //   }

    //   return true;
    // },
    jwt: async ({ token, user }) => {
      if (!user) {
        return token;
      }
      if (user.email) {
        const userProfile = await Auth.getUserProfile({ email: user.email });

        if (!userProfile) {
          return token;
        }
        return {
          ...token,
          id: userProfile.id,
          username: userProfile.username,
          email: userProfile.email,
          image: userProfile.avatar,
        };
      }
      return token;
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          username: token.username,
          email: token.email,
          picture: token.image,
        },
      };
    },
  },
};
