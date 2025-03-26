import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">Next.js 认证示例</h1>
      <p className="text-xl mb-8">选择一个登录页面样式：</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="/etc/login-style-1" className="block">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">样式 1</h2>
            <p>简洁现代的登录页面</p>
          </div>
        </Link>
        
        <Link href="/etc/login-style-2" className="block">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">样式 2</h2>
            <p>带有背景图的登录页面</p>
          </div>
        </Link>
        
        <Link href="/etc/login-style-3" className="block">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">样式 3</h2>
            <p>深色主题登录页面</p>
          </div>
        </Link>
      </div>
    </div>
  );
} 