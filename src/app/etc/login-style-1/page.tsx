'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';

export default function LoginStyle1() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            {isLogin ? '登录您的账户' : '创建新账户'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {isLogin ? '还没有账户？' : '已有账户？'}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1 font-medium text-primary hover:text-blue-500"
            >
              {isLogin ? '立即注册' : '登录'}
            </button>
          </p>
        </div>

        <div className="bg-white px-6 py-8 shadow sm:rounded-lg sm:px-8">
          {isLogin ? (
            <LoginForm 
              onSuccess={() => router.push('/dashboard')}
            />
          ) : (
            <RegisterForm 
              onSuccess={() => {
                alert('注册成功，请查收邮件验证您的账户');
                setIsLogin(true);
              }}
            />
          )}
        </div>

        <div className="text-center mt-4">
          <Link href="/" className="text-sm text-gray-600 hover:text-primary">
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
} 