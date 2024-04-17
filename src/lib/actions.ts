'use server';

import { TLoginFormSchema } from '@/components/login-form';
import { signIn } from '../auth';
import { AuthError } from 'next-auth';

export async function authenticate(formData: TLoginFormSchema) {
  try {
    // console.log('[new auth] check form', formData);
    const res = await signIn('credentials', {
      email: formData.email,
      password: formData.password,
      redirectTo: '/dashboard',
    });
    // console.log('res:', formData, res);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Authentication ERR: Unknown error.' + error;
      }
    }
    console.error('ERR: Unknown error', error);
    throw error;
  }
}

export async function googleAuthenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn('google');
  } catch (error) {
    if (error instanceof AuthError) {
      return 'google log in failed';
    }
    throw error;
  }
}
