'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getSession, signOut } from '@/lib/supabase/auth';

export default function Dashboard() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSession() {
      try {
        const session = await getSession();
        if (session && session.user.email) {
          setUserEmail(session.user.email);
        } else {
          router.push('/etc/login-style-1');
        }
      } catch (error) {
        console.error('Failed to load session:', error);
        router.push('/etc/login-style-1');
      } finally {
        setLoading(false);
      }
    }

    loadSession();
  }, [router]);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl">加载中...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">仪表板</h1>
          <button
            onClick={handleSignOut}
            className="rounded-md bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            退出登录
          </button>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg border-4 border-dashed border-gray-200 p-4 min-h-96">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">欢迎回来！</h2>
                <p className="text-gray-600">
                  您当前登录的账户是: <span className="font-medium">{userEmail}</span>
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">登录页面样式</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/etc/login-style-1" className="block">
                    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-medium mb-2">样式 1</h4>
                      <p className="text-sm text-gray-600">简洁现代的登录页面</p>
                    </div>
                  </Link>
                  
                  <Link href="/etc/login-style-2" className="block">
                    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-medium mb-2">样式 2</h4>
                      <p className="text-sm text-gray-600">带有背景图的登录页面</p>
                    </div>
                  </Link>
                  
                  <Link href="/etc/login-style-3" className="block">
                    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-medium mb-2">样式 3</h4>
                      <p className="text-sm text-gray-600">深色主题登录页面</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 