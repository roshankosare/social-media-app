'use client';
import Link from 'next/link';
import Logo from '../nav/Logo';
import { Button } from '../ui/button';
import { Card, CardHeader } from '../ui/card';
import { Input } from '../ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { useSignIn } from '@/hooks/useSignIn';

interface SignInProps {}

const SignIn: React.FC<SignInProps> = ({}) => {
  const { form, onSubmit } = useSignIn();
  return (
    <Card className="mx-auto my-auto flex w-96 flex-col border-none px-8 pb-10 sm:border-solid sm:px-2">
      <CardHeader>
        <Logo />
      </CardHeader>
      <div className="flex flex-col gap-y-8">
        <Form {...form}>
          {/* {signInError && <ErrorBox className="my-2">{signInError}</ErrorBox>} */}
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-8 px-5"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Sign In
            </Button>
          </form>
        </Form>

        <div className="flex flex-row justify-between px-5">
          <p className="text-sm"> Already a User?</p>
          <Link href={'/sign-in'} className="text-sm text-blue-500">
            Sign In
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default SignIn;
