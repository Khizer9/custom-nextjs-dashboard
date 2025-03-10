"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Login logic here
    console.log('Login with:', { email, password });
    setLoading(false);
    router.push("/users")
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
            <p className="text-gray-600 mt-2">Please sign in to continue</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="you@example.com"
              />
              {email && !validateEmail(email) && (
                <p className="mt-2 text-sm text-red-600">
                  Please enter a valid email address
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}
                  ></i>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 disabled:opacity-50"
              disabled={loading || (email && !validateEmail(email))}
            >
              {loading ? 'Processing...' : 'Sign In'}
            </button>

            <p className="mt-6 text-center text-gray-600">
                <span>Don't have an account?</span>
                <button
                  type="button"
                  className="ml-1 text-red-600 hover:text-red-700 font-semibold focus:outline-none"
                >
                  <span onClick={() => router.push("/auth/signup")}>Sign up</span>
                </button>
              </p>
          </form>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div
        className="hidden lg:block lg:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-12">
            <h2 className="text-4xl font-bold mb-6">Welcome to Our Platform</h2>
            <p className="text-xl">
              Join us to explore exciting opportunities and features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
