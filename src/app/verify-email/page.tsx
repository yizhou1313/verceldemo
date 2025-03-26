'use client';

import Link from 'next/link';

export default function VerifyEmail() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-xl shadow-md">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            验证您的邮箱
          </h2>
          <p className="mt-2 text-gray-600">
            我们已经向您的邮箱发送了一封验证邮件。请检查您的收件箱并点击邮件中的链接完成注册。
          </p>
        </div>

        <div className="space-y-4 mt-8">
          <div className="border border-gray-200 p-4 rounded-md bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900 mb-2">没有收到邮件？</h3>
            <p className="text-gray-600 text-sm mb-4">
              请检查您的垃圾邮件文件夹。如果还是没有收到，您可以点击下方按钮重新发送验证邮件。
            </p>
            <button className="btn btn-outline w-full">
              重新发送验证邮件
            </button>
          </div>
          
          <div className="text-center">
            <Link href="/etc/login-style-1" className="text-primary hover:underline">
              返回登录页面
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 