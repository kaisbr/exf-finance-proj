"use client";
import Head from 'next/head';
import { useRouter } from 'next/navigation'; // Certifique-se de usar apenas este hook

export default function HomePage() {
    const router = useRouter(); // Inicializa o hook para navegação

    // Função para redirecionar para a página inicial
    const handleBackClick = () => {
      router.push('/'); // Redireciona para a página de login (ou outra página padrão)
    };

    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        
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

      <div className="bg-white bg-opacity-20 backdrop-blur-md text-white flex flex-col justify-center items-center p-10 rounded-lg w-[1100px] h-[500px] shadow-lg">
          <Head>
       
      
        <p>Inicio</p>
        <meta name="description" content="Página inicial do app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex-1 flex flex-col items-center justify-center text-center">
        {/* Alinhando os elementos lado a lado */}
        <div className="flex flex-row items-center -mt-10 space-x-40">
          <h1 className="text-5xl font-bold text-gray-800">
            Início
          </h1>
          <button className="text-xl text-gray-600 px-6 py-3 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition">
            Categorias
          </button>
          <button className="text-xl text-gray-600 px-6 py-3 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition">
            Lista de gastos
          </button>
        </div>

        {/* Botão abaixo dos textos */}
        <div className="mt-5 flex flex-col items-center space-y-5">
          <button
            onClick={handleBackClick} // Botão para voltar para a página inicial (login ou home)
            className="mt-40 px-6 py-3 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
          >
           adicionar gasto
          </button>
        </div>
      </main>

    </div>
  </div>
  );
}
