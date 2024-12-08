import { Metadata } from 'next';
import LoginForm from '@/components/auth/LoginForm';

export const metadata: Metadata = {
  title: 'Client Portal | Your Fashion Portfolio',
  description: 'Access your exclusive client portal for personalized designs, collaboration tools, and more.',
};

export default function ClientPortalPage() {
  const handleLogin = async (email: string, password: string) => {
    // TODO: Implement authentication logic
    console.log('Login attempt:', email);
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-white to-accent-pearl dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <LoginForm onSubmit={handleLogin} isLoading={false} />
      </div>
    </div>
  );
}
