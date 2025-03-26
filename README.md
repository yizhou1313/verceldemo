# Next.js认证系统

这是一个基于Next.js、Supabase和Tailwind CSS构建的认证系统，部署在Vercel上。

## 功能

- 用户注册
- 用户登录
- 三种不同的登录页面展示

## 开始使用

1. 克隆仓库
2. 安装依赖: `npm install`
3. 在Supabase创建一个新项目，获取API密钥
4. 创建`.env.local`文件，添加Supabase密钥：
```
NEXT_PUBLIC_SUPABASE_URL=你的supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的supabase_anon_key
```
5. 启动开发服务器: `npm run dev`

## 部署到Vercel

该项目可以一键部署到Vercel。 