"use client"; // Adicione essa linha se estiver usando o modo cliente no Next.js

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GoogleRegisterFake() {
  const [name, setName] = useState(''); // Estado para o campo "Nome"
  const [lastName, setLastName] = useState(''); // Estado para o campo "Sobrenome"
  const [email, setEmail] = useState(''); // Estado para o campo "Email"
  const [password, setPassword] = useState(''); // Estado para o campo "Senha"
  const [confirmPassword, setConfirmPassword] = useState(''); // Estado para o campo "Confirmar senha"
  const router = useRouter(); // Para navegação

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("As senhas não coincidem.");
      return;
    }
    console.log(`Nome: ${name}, Sobrenome: ${lastName}, Email: ${email}, Password: ${password}`);
    // Redirecionar para /principal após o registro
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
        <h2 className="text-center text-xl font-semibold mb-6 text-black">Criar conta no Google</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Sobrenome"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirmar senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Criar conta
          </button>
          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <a href="/Google" className="hover:underline">Já tem uma conta? Faça login</a>
          </div>
        </form>
      </div>
    </div>
  );
}
