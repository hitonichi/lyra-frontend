'use client';

import { useFormState } from 'react-dom';
import { Button } from '../ui/button';
import { authenticate, googleAuthenticate } from '@/lib/actions';
import STRINGS from '@/lib/strings';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Loader2 } from 'lucide-react';
import { LabeledSeparator } from '../ui/labeled-separator';
import googleIcon from '../../../public/google.svg';
import Link from 'next/link';
import Image from 'next/image';

const S = STRINGS.login.form;

const loginFormSchema = z.object({
  email: z.string().min(1, {
    message: 'Username/Email cannot be empty',
  }),
  // email: z.string().email({
  //   message: 'Username must be an email',
  // }),
  password: z.string().min(1, {
    message: 'password cannot be empty',
  }),
});

export type TLoginFormSchema = z.infer<typeof loginFormSchema>;

export default function LoginForm() {
  const form = useForm<TLoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { formState, control, handleSubmit, setError } = form;

  const onSubmit = async (value: TLoginFormSchema) => {
    // console.log('Form data:', value);
    const res = await authenticate(value);
    if (res == 'Wrong credentials.') {
      setError('password', { type: 'manual', message: 'Wrong email or password.' });
      setError('email', { type: 'manual', message: 'Wrong email or password.' });
    }
    // console.log('login--- ', res);
  };

  // console.log(formState.errors);

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* TODO: Refactor this to a dedicated cpn */}
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">{S.email.label}</FormLabel>
                <FormControl>
                  <Input placeholder={S.email.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">{S.password.label}</FormLabel>
                <FormControl>
                  <Input type="password" placeholder={S.password.placeholder} {...field} />
                </FormControl>
                <FormMessage />
                {/* {formState.errors.password && <FormMessage>{formState.errors.password.message}</FormMessage>} */}
              </FormItem>
            )}
          />
          <div className="w-full flex justify-end ">
            <Link href={'/recover'} className="text-sm text-primary font-bold hover:underline hover:text-primary/80">
              {S.forgetPassword}
            </Link>
          </div>
          <div className="w-full mt-2">
            {formState.isSubmitting ? (
              <Button disabled className="w-full">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading
              </Button>
            ) : (
              <Button type="submit" className="w-full">
                Submit
              </Button>
            )}
          </div>
        </form>
      </Form>

      {/* <div className="my-2">or</div> */}
      <LabeledSeparator
        text="OR"
        className="mt-6 mb-2 w-4/5 mx-auto"
        textClassName=" font-bold"
        separatorClassName="bg-black text-2xl h-[2px]"
      />
      <GoogleLoginButton />
    </>
  );
}

function GoogleLoginButton() {
  const [_, dispatch] = useFormState(googleAuthenticate, undefined);

  return (
    <form action={dispatch} className="w-full">
      <Button variant={'outline'} className="w-full">
        <Image height={24} width={24} className="mr-2" src={googleIcon} alt="Google icon" />
        {STRINGS.login.withGoogle}
      </Button>
    </form>
  );
}
