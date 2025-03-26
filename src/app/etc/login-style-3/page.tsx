'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';

export default function LoginStyle3() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <div className="m-auto w-full max-w-lg p-6">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-700 pb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            {isLogin ? '欢迎回来' : '创建账户'}
          </h1>
          <p className="text-gray-400">
            {isLogin ? '登录以继续使用应用' : '注册以开始使用应用'}
          </p>
        </div>
        
        <div className="mt-8 bg-gray-800 p-8 rounded-xl shadow-lg">
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-4 py-2 ${
                isLogin
                  ? 'bg-primary text-white'
                  : 'bg-transparent text-gray-400 hover:text-white'
              } rounded-md transition-colors`}
            >
              登录
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 ${
                !isLogin
                  ? 'bg-primary text-white'
                  : 'bg-transparent text-gray-400 hover:text-white'
              } rounded-md transition-colors`}
            >
              注册
            </button>
          </div>

          {isLogin ? (
            <LoginForm 
              className="mt-4"
              onSuccess={() => router.push('/dashboard')}
            />
          ) : (
            <RegisterForm 
              className="mt-4"
              onSuccess={() => {
                alert('注册成功，请查收邮件验证您的账户');
                setIsLogin(true);
              }}
            />
          )}
          
          <div className="mt-6 border-t border-gray-700 pt-6">
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-gray-400 text-center">
                继续即表示您同意我们的
                <a href="#" className="text-primary hover:underline ml-1">服务条款</a>
                和
                <a href="#" className="text-primary hover:underline ml-1">隐私政策</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-primary">
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
} 