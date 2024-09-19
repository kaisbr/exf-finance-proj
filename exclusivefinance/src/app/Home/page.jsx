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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Head>
        <p>Inicio</p>
        <meta name="description" content="Página inicial do app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex-1 flex flex-col items-center justify-center text-center">
        {/* Alinhando os elementos lado a lado */}
        <div className="flex flex-row items-center -mt-40 space-x-40">
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

      <footer className="w-full h-24 flex items-center justify-center border-t">
        <p className="text-gray-500">© 2024 EXF Exclusive Finance</p>
      </footer>
    </div>
  );
}
