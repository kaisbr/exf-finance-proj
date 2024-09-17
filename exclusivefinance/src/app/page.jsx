"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    router.push('/Principal');
  };

  return (
    <div className="relative min-h-screen bg-white h-full">
   {/* Onda com clip-path aumentada na parte inferior */}
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-500 clip-wave"></div>  {/* Aumente a altura aqui */}

{/* era pra ser uma onda */}
<style jsx>{`
  .clip-wave {
    clip-path: polygon(0 0, 100% 60%, 100% 100%, 0 100%);  {/* Ajuste a curva */}
  }
`}</style>


      /* Conteúdo da página */
      <div className="relative flex justify-center items-center h-screen">
        <form 
          onSubmit={handleSubmit} 
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md z-10"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          
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
            <small className="text-gray-500">Digite um endereço de email válido, como exemplo@dominio.com</small>
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Digite sua senha"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <small className="text-gray-500">A senha deve ter pelo menos 6 caracteres.</small>
          </div>
          
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
