import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { authConfig } from './auth.config';
import NextAuth from 'next-auth';
import { z } from 'zod';
import { User } from './lib/types';

// const MOCK_USERS: User[] = [
//   {
//     id: '001',
//     name: 'John Doe',
//     email: '1111',
//     password: '1',
//     tags: ['array', 'math', 'binary-search', 'dynamic-programming'],
//     roadmaps: [],
//   },
//   {
//     id: '002',
//     name: 'Cleffairy Young',
//     email: '2222',
//     password: '2',
//     tags: [],
//     roadmaps: [],
//   },
//   {
//     id: '003',
//     name: 'James Snobz',
//     email: '3333',
//     password: '3',
//     tags: ['array', 'math', 'binary-search', 'dynamic-programming'],
//     roadmaps: [],
//   },
//   {
//     id: '004',
//     name: 'Lim Jane',
//     email: 'test123@user.com',
//     password: '123',
//     tags: ['array', 'math', 'binary-search', 'dynamic-programming'],
//     roadmaps: [],
//   },
// ];

// async function getUser(email: string): Promise<User | undefined> {
//   try {
//     const res = MOCK_USERS.find((user) => user.email == email);
//     if (res) {
//       // console.log(res);
//       return res;
//     } else {
//       console.error('Failed to fetch data');
//       throw new Error('Cannot connect to DB');
//     }
//   } catch (error) {
//     console.error(error);
//     throw new Error('failed to get user' + error);
//   }
// }

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      name: 'credential',
      async authorize(credentials) {
        // const parsedCredentials = z
        //   .object({ email: z.string().min(1), password: z.string().min(1) })
        //   .safeParse(credentials);

        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(1) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          try {
            const headers: Record<string, any> = {
              'Content-Type': 'application/json',
            };
            const payload = {
              email,
              password,
            };

            const response = await fetch('https://cosmetic-backend.vercel.app/auth/logIn', {
              method: 'POST',
              headers,
              body: JSON.stringify(payload),
            });

            console.log('[CHECKING AUTH API]', response);
            if (!response.ok) return null;

            const userFromBe = await response.json();

            console.log('[CHECKING AUTH API]', userFromBe);

            // return userFromBe;
            return {
              ...userFromBe,
              id: '001',
              name: userFromBe.firstName + ' ' + userFromBe.lastName,
              tags: ['array', 'math', 'binary-search', 'dynamic-programming'],
              roadmaps: [],
            };
            // ! MOCK
            // const user = await getUser(email);

            // if (!user) return null;
            // const passwordsMatch = password == user.password;

            // if (passwordsMatch) {
            //   // console.log('SUCCESSS');
            //   return user;
            // } else console.log('pwd not match');
          } catch (e) {
            console.error(e);
          }
        } else {
          console.log('parse fail');
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider == 'google') {
        console.log('TEST cb signin!!!', account, profile);
        return true;
      }
      return true;
    },
    async session({ session, token, user }) {
      // session.user = token.user as User;
      // console.log('check session:', session, token, user);
      // const _user = token as User;
      // session.user = { ..._user, emailVerified: null };
      session.user = token as any;
      console.log('[SESSION] Check', session);
      console.log('--- token', token);
      console.log('--- user', user);
      return session;
    },
    async jwt({ token, user, trigger, session, account }) {
      console.log('[JWT] Check ');
      console.log('--- token', token);
      console.log('--- user', user);
      console.log('--- session', session);
      console.log('--- account', account);
      // if (user) {
      //   token.user = user;
      // }
      // if (trigger === 'update' && session) {
      //   token = { ...token, user: session };
      //   return token;
      // }
      // console.log('[JWT] compare now vs iat', Date.now(), token.iat * 1000);
      if (token.exp && Date.now() > token.exp * 1000) {
        console.log('[JWT] expired');
        return null;
      }
      return { ...token, ...user };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
