"use client";
import Head from 'next/head'
import { useRouter } from 'next/navigation';


export default function HomePage() {
    const router = useRouter(); // Inicializa o hook
  
    const handleBackClick = () => {
      router.push('/'); // Redireciona sempre para a página principal (app/page.jsx)
    }; 
    
    return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Página inicial do app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-gray-800">
          Bem-vindo ao Exclusive Finance
        </h1>

        <p className="mt-3 text-xl text-gray-600">
          Cuidando de você e do seu bolso!
        </p>

        <div className="mt-5">
        <button
          onClick={handleBackClick}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
        >
          Voltar para Página Inicial
        </button>
      </div>

      </main>

      <footer className="w-full h-24 flex items-center justify-center border-t">
        <p className="text-gray-500">© 2024 EXF Exclusive Finance</p>
      </footer>
    </div>
  )
}
