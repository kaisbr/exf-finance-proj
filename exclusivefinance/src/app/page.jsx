"use client"; // Coloque essa linha se estiver usando Next.js com o modo de cliente

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

//não sei como funcionou mas deu certo
const PasswordInput = ({ password, setPassword, showPassword, setShowPassword }) => {
  return (
    <div className="relative mb-6">
    <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Senha</label>
    <input
      type={showPassword ? 'text' : 'password'}
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      placeholder="Digite sua senha"
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
  type="button"
  className="absolute top-1/2 right-3 transform -translate-y-1/2 p-0 m-0 h-5 w-5 flex items-center justify-center"
  onClick={() => setShowPassword(!showPassword)}
  >
      {showPassword ? (
        <EyeSlashIcon className="h-5 w-5 p-0 m-0 text-gray-500" aria-hidden="true" style={{ transform: 'translateY(15px)' }}  />
      ) : (
        <EyeIcon className="h-5 w-5 t-0 p-0 m-0 text-gray-500" aria-hidden="true" style={{ transform: 'translateY(15px)' }}  />
      )}
    </button>
  </div>
  );
};

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    router.push('/Principal');
  };

  return (
    <div className="relative min-h-screen bg-white h-full">

      {/* onda improvisada que deu certo obrigado GPT */}
      <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00ffff', stopOpacity: 1 }} />
            <stop offset="85%" style={{ stopColor: '#160042', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'black', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path fill="url(#waveGradient)" fillOpacity="1" d="M0,160 C240,320 720,0 960,160 C1200,320 1680,0 1920,160 L1920,320 L0,320 Z"></path>
      </svg>

      <div className="relative flex justify-center items-center h-screen">
      <form 
       onSubmit={handleSubmit} 
        className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-md w-full max-w-md z-10"
      >
          <h2 className="text-2xl font-bold mb-4 text-center text-black">Login</h2>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Digite seu email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <small className="text-blue-900">Digite um endereço de email válido, como exemplo@dominio.com</small>
          </div>

          <PasswordInput
            password={password}
            setPassword={setPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          <small className="text-blue-900">A senha deve ter pelo menos 6 caracteres.</small>

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
