"use client";
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function HomePage() {
    const router = useRouter(); // Inicializa o hook para navegação

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 relative">
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

            <div className="bg-white bg-opacity-20 backdrop-blur-md text-white flex flex-col justify-start items-start p-10 rounded-lg min-w-[300px] max-w-[1100px] min-h-[500px] h-auto shadow-lg">
                <Head>
                    <title>Início</title>
                    <meta name="description" content="Página inicial do app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <button 
                    type="button" 
                    onClick={() => router.push('/Principal')}
                    className="absolute top-4 left-4 flex items-center p-2"
                >
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/134/134226.png" 
                        alt="seta de back" 
                        className="w-5 h-5 mr-2"
                    />
                </button>

                <main className="w-full flex flex-col items-start justify-start text-left mt-10">
                    <div className="flex flex-col md:flex-row items-start md:space-x-4 mb-4">
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-0">
                            Início
                        </h1>
                        <div className="flex flex-col md:flex-row">
                            <button className="text-black bg-white bg-opacity-40 border backdrop-blur-md text-lg md:text-xl px-4 py-2 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition mb-2 md:mb-0 md:mr-2">
                                Categorias
                            </button>
                            <button className=" text-black bg-white bg-opacity-40 border backdrop-blur-md text-lg md:text-xl px-4 py-2 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition">
                                Lista de gastos
                            </button>
                        </div>
                    </div>

                    {/* Botão abaixo dos textos */}
                    <div className="flex flex-col items-center space-y-5 ">
                        <button
                            onClick={() => router.push('/novogasto')}
                            className="text-black bg-white bg-opacity-40 border backdrop-blur-md px-6 py-3 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
                        >
                            Adicionar gasto
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}
