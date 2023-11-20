import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const useSignIn = () => {
  const [signInError, setSignInError] = useState<string | null>(null);
  const router = useRouter();
  const callbackUrl = '/';
  const formSchema = z.object({
    email: z
      .string()
      .min(1, { message: 'Required' })
      .email('enter correct email'),
    password: z.string().min(1, { message: 'Required' }),
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSignInError(null);
    const response = await signIn('credentials', {
      callbackUrl: callbackUrl,
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (response?.error) {
      setSignInError(response.error);
      return;
    }

    router.push('/');
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return {
    signInError,
    form,
    onSubmit,
  };
};
