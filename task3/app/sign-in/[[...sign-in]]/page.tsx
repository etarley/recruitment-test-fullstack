import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-200'>
      <SignIn
        appearance={{ variables: { colorPrimary: '#0f172a' } }}
        afterSignInUrl='/app'
      />
    </main>
  );
}
