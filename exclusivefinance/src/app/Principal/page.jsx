"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/");
  };

  const handleMainPageClick = () => {
    router.push("/Home");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Onda azul no fundo */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full z-0"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#2168A9", stopOpacity: 1 }}
            />
            <stop
              offset="52%"
              style={{ stopColor: "#6592E9", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#1E1E1C", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          fillOpacity="1"
          d="M0,160 C240,320 720,0 960,160 C1200,320 1680,0 1920,160 L1920,320 L0,320 Z"
        ></path>
      </svg>

      <Head>
        <title>Inicio</title>
        <meta name="description" content="Página inicial do app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white bg-opacity-20 backdrop-blur-md text-white flex flex-col justify-center items-center p-10 rounded-lg w-[1100px] h-[500px] shadow-lg">
        <main className="w-full flex-1 flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-5xl font-bold text-gray-800">
            Bem-vindo ao Exclusive Finance
          </h1>

          <p className="mt-3 text-xl text-gray-600">
            Cuidando de você e do seu bolso!
          </p>

          <div className="mt-5 flex flex-col items-center space-y-5">
            <button
              onClick={handleBackClick}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
            >
              Acesse o Login
            </button>

            <button
              onClick={handleMainPageClick}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
            >
              Continuar
            </button>
          </div>
        </main>
      </div>
      <footer className="w-full h-24 flex items-center justify-center border-t z-10">
        <p className="text-gray-500">© 2024 EXF Exclusive Finance</p>
      </footer>
    </div>
  );
}
