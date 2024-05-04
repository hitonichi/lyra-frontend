import type { NextAuthConfig } from 'next-auth';

const isOnProtectedRoute = (route: string): boolean => {
  return (
    route.startsWith('/dashboard') ||
    route.startsWith('/settings') ||
    route.startsWith('/profile') ||
    route.startsWith('/cart ')
  );
};

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      // const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnProtectedRoute(nextUrl.pathname)) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        // return Response.redirect(new URL('/', nextUrl));
        return true;
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
