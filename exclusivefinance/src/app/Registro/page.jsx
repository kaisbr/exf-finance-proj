"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importando useRouter
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const PasswordInput = ({ id, password, setPassword, showPassword, setShowPassword, label }) => {
  return (
    <div className="relative mb-6">
      <label htmlFor={id} className="block text-gray-700 font-semibold mb-2">{label}</label>
      <input
        type={showPassword ? 'text' : 'password'}
        id={id}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder={id === "password" ? "Crie sua senha" : "Confirme sua senha"}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
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

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(''); 
  const router = useRouter(); // Inicializa o useRouter

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se a senha e confirmação de senha são iguais
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    // Lógica para registro de usuário pode ser colocada aqui
    setError('');
    router.push('/'); // Redireciona para a página page.jsx após o registro
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

      {/* Formulário de registro */}
      <form 
        onSubmit={handleSubmit} 
        className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-md w-[400px] h-[500px] z-10"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-[#313056]">Criar Conta</h2>

        {/* Campo de Nome */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nome</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Digite seu nome"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>

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
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>

        {/* Campo de Senha */}
        <PasswordInput
          id="password"
          password={password}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          label="Senha"
        />

        {/* Campo de Confirmação de Senha */}
        <PasswordInput
          id="confirmPassword"
          password={confirmPassword}
          setPassword={setConfirmPassword}
          showPassword={showConfirmPassword}
          setShowPassword={setShowConfirmPassword}
          label="Confirme sua senha"
        />

        {/* Exibição de erro */}
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <button 
          type="submit" 
          className="w-full bg-[#313056] text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Criar Conta
        </button>
      </form>
    </div>
  );
}
