"use client"; // Adicione essa linha se estiver usando o modo cliente no Next.js

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GoogleLoginFake() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Para navegação

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Redirecionar para /principal
    router.push('/Principal');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          alt="Google logo"
          className="h-10 mx-auto mb-6"
        />
        <h2 className="text-center text-xl font-semibold mb-6 text-black">Entrar com o Google</h2>
        <form onSubmit={handleSubmit}> 
          <div className="mb-4">
          <input
            type="email"
            placeholder="Email ou telefone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Próxima
          </button>
          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <a href="#" className="hover:underline">Esqueceu seu e-mail?</a>
            <a href="/Registrogoogle" className="hover:underline">Criar conta</a>
          </div>
        </form>
      </div>
    </div>
  );
}
