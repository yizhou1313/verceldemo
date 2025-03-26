'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { signIn } from '@/lib/supabase/auth';

interface LoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

export default function LoginForm({ className = '', onSuccess }: LoginFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  async function onSubmit(data: { email: string; password: string }) {
    setIsLoading(true);
    setError(null);
    
    try {
      await signIn(data);
      if (onSuccess) {
        onSuccess();
      } else {
        router.push('/dashboard');
      }
    } catch (err: any) {
      setError(err.message || '登录失败，请重试');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-4 ${className}`}>
      {error && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="form-label">
          邮箱
        </label>
        <input
          id="email"
          type="email"
          className="form-input"
          disabled={isLoading}
          {...register('email', { 
            required: '请输入邮箱', 
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '请输入有效的邮箱地址'
            }
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="password" className="form-label">
          密码
        </label>
        <input
          id="password"
          type="password"
          className="form-input"
          disabled={isLoading}
          {...register('password', { 
            required: '请输入密码',
            minLength: {
              value: 6,
              message: '密码至少6个字符'
            }
          })}
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>
      
      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={isLoading}
      >
        {isLoading ? '登录中...' : '登录'}
      </button>
    </form>
  );
} 