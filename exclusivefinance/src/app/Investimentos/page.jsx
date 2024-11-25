"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function InvestmentPage() {
  const router = useRouter();
  const [investments, setInvestments] = useState([]);
  const [investmentName, setInvestmentName] = useState("");
  const [amount, setAmount] = useState("");
  const [growthRate, setGrowthRate] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    if (Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  const sendNotification = (title, body) => {
    if (Notification.permission === "granted") {
      new Notification(title, { body });
    }
  };

  const handleAddOrEditInvestment = () => {
    if (investmentName && amount && growthRate) {
      const updatedInvestment = {
        name: investmentName,
        amount: parseFloat(amount),
        growthRate: parseFloat(growthRate),
      };

      if (editingIndex !== null) {
        const updatedInvestments = [...investments];
        updatedInvestments[editingIndex] = updatedInvestment;
        setInvestments(updatedInvestments);
        setEditingIndex(null);
        sendNotification(
          "Investimento Atualizado",
          `Você atualizou ${investmentName}.`
        );
      } else {
        setInvestments([...investments, updatedInvestment]);
        sendNotification(
          "Novo Investimento",
          `Você adicionou ${investmentName}.`
        );
      }

      setInvestmentName("");
      setAmount("");
      setGrowthRate("");
    }
  };

  const handleEditInvestment = (index) => {
    const investment = investments[index];
    setInvestmentName(investment.name);
    setAmount(investment.amount.toString());
    setGrowthRate(investment.growthRate.toString());
    setEditingIndex(index);
  };

  const handleDeleteInvestment = (index) => {
    const investmentToDelete = investments[index];
    setInvestments(investments.filter((_, i) => i !== index));
    sendNotification(
      "Investimento Excluído",
      `${investmentToDelete.name} foi removido.`
    );
  };

  const calculateGrowth = (amount, rate) => {
    return (amount * (1 + rate / 100)).toFixed(2);
  };

  const scheduleReminder = (investment, delayInMinutes) => {
    const delayInMs = delayInMinutes * 60 * 1000;

    setTimeout(() => {
      sendNotification(
        "Lembrete de Investimento",
        `Lembre-se de verificar o progresso de ${investment.name}.`
      );
    }, delayInMs);
  };

  const handleScheduleReminder = (index) => {
    const investment = investments[index];
    scheduleReminder(investment, 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <svg
        className="absolute bottom-0 left-0 w-full h-auto z-0"
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
        <title>Investimentos</title>
        <meta name="description" content="Página de investimentos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white bg-opacity-20 backdrop-blur-md text-white flex flex-col justify-center items-center p-5 sm:p-10 rounded-lg w-full max-w-4xl shadow-lg">
        <main className="w-full flex-1 flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">
            Aba de Investimentos
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-600">
            Gerencie e acompanhe seus investimentos.
          </p>

          <div className="mt-5 w-full max-w-lg">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Nome do investimento"
                value={investmentName}
                onChange={(e) =>
                  e.target.value.length <= 20 &&
                  setInvestmentName(e.target.value)
                }
                maxLength={20}
                className="px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Montante inicial (R$)"
                value={amount}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (value >= 0 || e.target.value === "") {
                    setAmount(e.target.value);
                  }
                }}
                maxLength={20}
                className="px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Taxa de crescimento (%)"
                value={growthRate}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (value >= 0 || e.target.value === "") {
                    setGrowthRate(e.target.value);
                  }
                }}
                maxLength={20}
                className="px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={handleAddOrEditInvestment}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
              >
                {editingIndex !== null
                  ? "Salvar Alterações"
                  : "Adicionar Investimento"}
              </button>
            </div>
          </div>

          <div className="mt-10 w-full max-w-2xl">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Todos os investimentos
            </h2>
            <ul className="space-y-4">
              {investments.map((investment, index) => (
                <li
                  key={index}
                  className="p-4 bg-white bg-opacity-80 rounded-lg shadow-lg flex flex-col sm:flex-row sm:justify-between sm:items-center"
                >
                  <div>
                    <span className="text-gray-800 font-semibold block">
                      {investment.name}
                    </span>
                    <p className="text-gray-600">
                      Montante Inicial: R$ {investment.amount.toFixed(2)}
                    </p>
                    <p className="text-gray-600">
                      Taxa de Crescimento: {investment.growthRate}%
                    </p>
                    <p className="text-gray-800 font-bold">
                      Após 1 ano: R${" "}
                      {calculateGrowth(
                        investment.amount,
                        investment.growthRate
                      )}
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-wrap space-x-2">
                    <button
                      onClick={() => handleEditInvestment(index)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteInvestment(index)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                    >
                      Excluir
                    </button>
                    <button
                      onClick={() => handleScheduleReminder(index)}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                    >
                      Lembrete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => router.push("/Home")}
            className="mt-10 px-6 py-3 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
          >
            Voltar para Página Inicial
          </button>
        </main>
      </div>

      <footer className="w-full h-24 flex items-center justify-center border-t z-10">
        <p className="text-gray-500 text-sm sm:text-base">
          © 2024 EXF Exclusive Finance
        </p>
      </footer>
    </div>
  );
}
