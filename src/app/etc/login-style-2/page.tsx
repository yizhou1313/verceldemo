'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';

export default function LoginStyle2() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  return (
    <div className="flex min-h-screen">
      {/* 左侧图片区域 */}
      <div className="hidden md:flex md:w-1/2 bg-indigo-600 flex-col items-center justify-center p-12 text-white">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-6">欢迎使用我们的应用</h1>
          <p className="text-xl mb-8">登录以体验更多精彩功能和服务。</p>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <blockquote className="italic text-white/90">
              "这是一个简单而强大的登录系统，提供安全可靠的用户体验。"
            </blockquote>
            <p className="mt-4 text-right text-white/80">— 开发团队</p>
          </div>
        </div>
      </div>
      
      {/* 右侧表单区域 */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center">
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
          
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
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
    </div>
  );
} 