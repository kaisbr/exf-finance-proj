"use client";  // Adiciona esta linha para tornar o componente client-side
import { useRouter } from 'next/navigation';  // Importando o useRouter para redirecionamento
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();  // Usando o useRouter para navegação programática

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação aqui (se necessário)
    console.log({ email, password });

    // Após submissão bem-sucedida, redirecionar para a página Principal
    router.push('/Principal');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <h2>Login</h2>
        
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
          placeholder="Digite seu email"  
        style={{ marginBottom: '10px', padding: '8px', fontSize: '16px' , color: 'black'}}
        />
        
        <label htmlFor="password">Senha</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
          placeholder="Digite sua senha"  
          style={{ marginBottom: '20px', padding: '8px', fontSize: '16px', color: 'black' }}
        />
        
        <button 
          type="submit" 
          style={{ padding: '10px', backgroundColor: '#0070f3', color: 'white', fontSize: '16px', cursor: 'pointer' }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
