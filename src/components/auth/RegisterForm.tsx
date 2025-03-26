'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { signUp } from '@/lib/supabase/auth';

interface RegisterFormProps {
  className?: string;
  onSuccess?: () => void;
}

export default function RegisterForm({ className = '', onSuccess }: RegisterFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    }
  });

  const password = watch('password');

  async function onSubmit(data: { email: string; password: string; confirmPassword: string }) {
    if (data.password !== data.confirmPassword) {
      setError('两次输入的密码不一致');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      await signUp({ email: data.email, password: data.password });
      if (onSuccess) {
        onSuccess();
      } else {
        router.push('/verify-email');
      }
    } catch (err: any) {
      setError(err.message || '注册失败，请重试');
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
      
      <div>
        <label htmlFor="confirmPassword" className="form-label">
          确认密码
        </label>
        <input
          id="confirmPassword"
          type="password"
          className="form-input"
          disabled={isLoading}
          {...register('confirmPassword', { 
            required: '请确认密码',
            validate: value => value === password || '两次输入的密码不一致'
          })}
        />
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
        )}
      </div>
      
      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={isLoading}
      >
        {isLoading ? '注册中...' : '注册'}
      </button>
    </form>
  );
} 