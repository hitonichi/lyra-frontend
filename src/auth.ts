import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { authConfig } from './auth.config';
import NextAuth from 'next-auth';
import { z } from 'zod';
import { User } from './lib/types';

const MOCK_USERS: User[] = [
  {
    id: '001',
    name: 'John Doe',
    email: '1111',
    password: '1',
    tags: ['array', 'math', 'binary-search', 'dynamic-programming'],
    roadmaps: [],
  },
  {
    id: '002',
    name: 'Cleffairy Young',
    email: '2222',
    password: '2',
    tags: [],
    roadmaps: [],
  },
  {
    id: '003',
    name: 'James Snobz',
    email: '3333',
    password: '3',
    tags: ['array', 'math', 'binary-search', 'dynamic-programming'],
    roadmaps: [],
  },
];

async function getUser(email: string): Promise<User | undefined> {
  try {
    const res = MOCK_USERS.find((user) => user.email == email);
    if (res) {
      // console.log(res);
      return res;
    } else {
      console.error('Failed to fetch data');
      throw new Error('Cannot connect to DB');
    }
  } catch (error) {
    console.error(error);
    throw new Error('failed to get user' + error);
  }
}

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
        const parsedCredentials = z
          .object({ email: z.string().min(1), password: z.string().min(1) })
          .safeParse(credentials);

        // const parsedCredentials = z
        //   .object({ email: z.string().email(), password: z.string().min(6) })
        //   .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          try {
            const user = await getUser(email);
            if (!user) return null;
            const passwordsMatch = password == user.password;

            if (passwordsMatch) {
              // console.log('SUCCESSS');
              return user;
            } else console.log('pwd not match');
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
      const _user = token.user as User;
      session.user = { ..._user, emailVerified: null };
      return session;
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.user = user;
      }
      if (trigger === 'update' && session) {
        token = { ...token, user: session };
        return token;
      }
      return token;
    },
  },
});
