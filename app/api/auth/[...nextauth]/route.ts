import { authOptionts } from '@/lib/auth/nextAuth';
import NextAuth from 'next-auth/next';

const handler = NextAuth(authOptionts);
export { handler as GET, handler as POST };
