"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "react-modal";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");
  const [valor, setValor] = useState(0);
  const [despesas, setDespesas] = useState([]);
  const [selectedButton, setSelectedButton] = useState("");
  const MAX_DESCRICAO_LENGTH = 45;

  // Calcula as entradas e saídas totais com base nas despesas.
  const summary = despesas.reduce(
    (acc, despesa) => {
      if (despesa.tipo === "Valor adicionado") {
        acc.entradas += despesa.valor;
      } else {
        acc.saidas += despesa.valor;
      }
      return acc;
    },
    {
      entradas: 0,
      saidas: 0,
    }
  );

  const total = summary.entradas - summary.saidas;

  // Formata valores para o formato brasileiro (R$ X.XXX,XX).
  const formatarValor = (valor) => {
    return valor
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const router = useRouter();

  // Função para adicionar um gasto à lista.
  function submitForm() {
    const data = new Date().toLocaleDateString();
    const newDespesa = {
      descricao,
      valor: parseFloat(valor),
      tipo,
      data,
    };

    setDespesas([...despesas, newDespesa]);
    setDescricao("");
    setValor(0);
    setTipo("");
    setIsOpen(false);
  }

  function excluirDespesa(index) {
    const updatedDespesas = despesas.filter((_, i) => i !== index);
    setDespesas(updatedDespesas);
  }

  function adicionarEntradas() {
    if (valor > 0) {
      const newDespesa = {
        descricao: "Valor adicionado",
        valor: parseFloat(valor),
        tipo: "Valor adicionado",
        data: new Date().toLocaleDateString(),
      };
      setDespesas([...despesas, newDespesa]);
      setValor(0);
      setDescricao("");
    }
  }

  function selecionarTipo(tipoSelecionado) {
    setTipo(tipoSelecionado);
    setSelectedButton(tipoSelecionado);
    if (tipoSelecionado === "Entradas") {
      setTipo("Valor adicionado");
    } else {
      setTipo("Gasto");
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 relative">
      {/* SVG com fundo de onda (visual decorativo). */}
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
      <div className="bg-white bg-opacity-80 backdrop-blur-md text-gray-800 flex flex-col justify-start items-start p-6 sm:p-10 rounded-lg min-w-[300px] max-w-[1100px] min-h-[500px] shadow-lg relative">
        <Head>
          <title>Início</title>
          <meta name="description" content="Página inicial do app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex space-x-12 mt-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 sm:mb-1">
            Exclusive Finance
          </h1>

          <button
            className="p-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition"
            onClick={() => router.push("/Orcamento")}
          >
            Orçamento
          </button>

          <button
            className="p-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition"
            onClick={() => router.push("/Investimentos")}
          >
            Investimentos
          </button>
          <button
            className="p-2 bg-red-400 text-white rounded hover:bg-red-700 transition"
            onClick={() => router.push("/")}
          >
            Sair
          </button>
        </div>
        <main className="w-full flex flex-col items-start justify-start text-left mt-6 sm:mt-12">
          {/* Modal para adicionar novo gasto */}
          <Modal
            isOpen={isOpen}
            overlayClassName="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-700 bg-opacity-80"
            className="w-full max-w-lg bg-white p-6 relative outline-none rounded"
          >
            <button
              className="absolute right-4 top-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-3xl text-black mb-6">Criar novo gasto</h2>
            <label className="flex flex-col mb-4 text-gray-600">
              Descrição (máx. {MAX_DESCRICAO_LENGTH} caracteres)
              <input
                className="py-2 px-3 outline-none border border-gray-300 mt-1 rounded"
                type="text"
                value={descricao}
                onChange={(ev) => {
                  if (ev.target.value.length <= MAX_DESCRICAO_LENGTH) {
                    setDescricao(ev.target.value);
                  }
                }}
              />
            </label>
            <label className="text-gray-600">Tipo</label>
            <div className="flex flex-col sm:flex-row justify-between mt-2">
              <button
                className={`flex-1 p-3 rounded transition-transform ${
                  selectedButton === "Saídas"
                    ? "bg-red-600 text-white scale-105"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => selecionarTipo("Saídas")}
              >
                Saídas
              </button>
            </div>
            <label className="flex flex-col my-4 text-gray-600">
              Valor
              <input
                className="py-2 px-3 outline-none border border-gray-300 mt-1 rounded"
                type="text"
                value={valor === 0 ? "" : valor}
                onFocus={() => valor === 0 && setValor("")}
                onChange={(ev) => {
                  const value = ev.target.value;
                  if (/^\d*\.?\d*$/.test(value)) {
                    setValor(value);
                  }
                }}
              />
            </label>

            <button
              className="p-3 bg-green-500 rounded text-white mt-4 w-full"
              onClick={() => submitForm()}
            >
              Novo gasto
            </button>
          </Modal>

          <section className="w-full mt-6 sm:mt-12">
            <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex flex-col flex-1 bg-gray-200 rounded border border-gray-300 shadow-md p-4 sm:p-6 justify-between">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl sm:text-4xl text-green-600 font-semibold">
                    Entradas
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <h1 className="text-2xl sm:text-4xl font-semibold">
                  R$ {formatarValor(summary.entradas)}
                </h1>
                <input
                  className="mt-4 py-2 px-3 outline-none border border-gray-300 rounded"
                  type="number"
                  placeholder="Adicione um valor"
                  value={valor === 0 ? "" : valor}
                  onChange={(ev) => setValor(ev.target.value)}
                />
                <button
                  className="mt-2 p-2 bg-green-600 text-white rounded"
                  onClick={adicionarEntradas}
                >
                  Adicionar entrada
                </button>
              </div>

              <div
                className="flex flex-col flex-1 bg-gray-200 rounded border border-gray-300 shadow-md p-4
sm:p-6 justify-between"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl sm:text-4xl text-red-600 font-semibold">
                    Saídas
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <h1 className="text-2xl sm:text-4xl font-semibold">
                  R$ {formatarValor(summary.saidas)}
                </h1>
              </div>
            </div>

            <table className="w-full bg-gray-100 mt-6 border-separate border-spacing-0 border-spacing-x-0">
              <thead>
                <tr>
                  <th className="px-4 py-4 text-left text-lg">Data</th>
                  <th className="px-4 py-4 text-left text-lg">Descrição</th>
                  <th className="px-4 py-4 text-left text-lg">Preço</th>
                  <th className="px-4 py-4 text-left text-lg">Tipo</th>
                  <th className="px-4 py-4 text-left text-lg">Ações</th>
                </tr>
              </thead>
              <tbody>
                {despesas.map((item, index) => (
                  <tr key={index}>
                    <td className="text-gray-700 px-4 py-4">{item.data}</td>
                    <td className="text-gray-700 px-4 py-4 bg-white">
                      {item.descricao}
                    </td>
                    <td className="text-gray-700 px-4 py-4 bg-white">
                      R$ {formatarValor(item.valor)}
                    </td>
                    <td
                      className={`text-gray-700 px-4 py-4 bg-white ${
                        item.tipo === "Valor adicionado"
                          ? "text-green-800"
                          : "text-red-600"
                      }`}
                    >
                      {item.tipo}
                    </td>
                    <td className="text-gray-700 px-4 py-4 bg-white flex space-x-2">
                      <button
                        onClick={() => excluirDespesa(index)}
                        className="text-red-600"
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <div className="self-center flex flex-col items-center space-y-6 mt-12">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-4 rounded-lg px-6 py-3 bg-emerald-600 text-white hover:bg-emerald-500 transition text-lg sm:text-2xl"
            >
              Adicionar gasto
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 sm:w-8 sm:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>

            <button className="w-full py-4 rounded-lg bg-gray-700 text-white text-lg sm:text-2xl font-semibold hover:bg-blue-500 transition">
              Total: R$ {formatarValor(total)}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
