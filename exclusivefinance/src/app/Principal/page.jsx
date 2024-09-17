import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Head>
        <title>Página Inicial</title>
        <meta name="description" content="Página inicial da sua empresa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-gray-800">
          Bem-vindo à Minha Empresa de Festas
        </h1>

        <p className="mt-3 text-xl text-gray-600">
          Aluguel de festas incríveis para todos os momentos!
        </p>

        <div className="mt-5">
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Saiba Mais
          </a>
        </div>
      </main>

      <footer className="w-full h-24 flex items-center justify-center border-t">
        <p className="text-gray-500">© 2024 Minha Empresa de Festas</p>
      </footer>
    </div>
  )
}
