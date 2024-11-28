"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

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
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" // Adicionando a cor preta ao texto
      />
      <button
        type="button"
        className="absolute top-1/2 right-3 transform -translate-y-1/2 p-0 m-0 h-5 w-5 flex items-center justify-center"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <EyeSlashIcon className="h-5 w-5 p-0 m-0 text-gray-500" aria-hidden="true" style={{ transform: 'translateY(15px)' }} />
        ) : (
          <EyeIcon className="h-5 w-5 p-0 m-0 text-gray-500" aria-hidden="true" style={{ transform: 'translateY(15px)' }} />
        )}
      </button>
    </div>
  );
};

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(''); // Para mostrar mensagem de erro
  const router = useRouter();

  const fixedUser = {
    email: 'exffinance@hotmail.com.br',
    password: 'senhaSegura', // senha fixa
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se as credenciais estão corretas
    if (email === fixedUser.email && password === fixedUser.password) {
      setError(''); // Limpar erro
      router.push('/Principal'); // Redireciona para a página principal
    } else {
      // Se as credenciais estiverem incorretas, exibe o erro
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="relative min-h-screen bg-white h-full flex justify-center items-center">

      {/* Onda azul no fundo */}
      <svg className="absolute bottom-0 left-0 w-full h-full z-0" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2168A9', stopOpacity: 1 }} />
            <stop offset="52%" style={{ stopColor: '#6592E9', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1E1E1C', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path fill="url(#waveGradient)" fillOpacity="1" d="M0,160 C240,320 720,0 960,160 C1200,320 1680,0 1920,160 L1920,320 L0,320 Z"></path>
      </svg>

      {/* Seção de login e bem-vindo por cima da onda */}
      <div className="relative flex justify-center items-center h-full w-full max-w-5xl space-x-10 z-10">
        <div className="bg-white bg-opacity-20 backdrop-blur-md text-white flex flex-col justify-center items-center p-10 rounded-lg w-[300px] h-[500px] shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-[#313056]">Bem-vindo</h2>
          <p className="text-lg mb-8 text-[#313056]" >Novo por aqui?</p>
          <button 
            onClick={() => router.push('/Registro')}
            className="bg-white text-[#313056] p-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Criar conta
          </button>
        </div>

        {/* Formulário de login */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-md w-[400px] h-[500px]"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-[#313056]">Faça Login</h2>

          {/* Campo de Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Digite seu email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" // Adicionando a cor preta ao texto
            />
          </div>

          {/* Campo de Senha */}
          <PasswordInput
            password={password}
            setPassword={setPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          {/* Exibição de erro */}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          <button 
            type="submit" 
            className="w-full bg-[#313056] text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Entrar
          </button>

          {/* Opção de login com Google */}
          <button 
            type="button" 
            onClick={() => router.push('/Google')}
            className="flex items-center justify-center w-full bg-white mt-5 text-[#313056] border border-gray-300 p-2 rounded hover:bg-gray-100 transition duration-200"
          >
            <img 
              src="https://th.bing.com/th/id/R.7e557f1c0864829c54c300d15bee69f4?rik=G4mxRhO5Jt4asA&pid=ImgRaw&r=0" 
              alt="Google Logo" 
              className="w-5 h-5 mr-2"
            />
            Logar com Google
          </button>

        </form>
      </div>
    </div>
  );
}
