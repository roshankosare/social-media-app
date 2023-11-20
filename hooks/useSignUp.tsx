import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const useSignUp = () => {
  const [signUpError, setSignUpError] = useState<string | null>(null);
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().min(1, { message: 'Required' }),
    password: z.string().min(1, { message: 'Required' }),
    username: z.string().min(1, { message: 'Required' }),
  });
  const onSignUp = async ({
    email,
    username,
    password,
  }: {
    email: string;
    username: string;
    password: string;
  }) => {
    try {
      await axios.post(
        'api/auth/sign-up',
        {
          email,
          password,
          username,
        },
        {
          withCredentials: true,
        }
      );

      await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          const errorMessage = error.response?.data.error;
          if (errorMessage) {
            throw new Error(errorMessage);
          }
        }
        if (error.response?.status === 500) {
          throw new Error('Something went wrong try again');
        }
      }
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    setSignUpError(null);
    onSignUp({
      email: values.email,
      password: values.password,
      username: values.username,
    })
      .then(() => {
        router.push('/');
      })
      .catch((error: Error) => {
        setSignUpError(error.message || 'something went wrong try again');
      });
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  });

  return {
    signUpError,
    form,
    onSubmit,
  };
};

export default useSignUp;
