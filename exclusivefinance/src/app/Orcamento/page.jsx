"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Chart, Bar } from "react-chartjs-2";
import "chart.js/auto";

export default function BudgetPage() {
  const router = useRouter();

  const [categories, setCategories] = useState([
    { name: "Alimentação", budget: 0, spent: 0 },
    { name: "Transporte", budget: 0, spent: 0 },
    { name: "Lazer", budget: 0, spent: 0 },
    { name: "Moradia", budget: 0, spent: 0 },
    { name: "Saúde", budget: 0, spent: 0 },
  ]);

  const [alerts, setAlerts] = useState([]);

  // Monitora mudanças no estado de categorias e atualiza alertas com base nos gastos e orçamentos.
  useEffect(() => {
    const newAlerts = categories
      .map((category) => {
        const spentPercentage = (category.spent / category.budget) * 100;
        if (spentPercentage >= 100) {
          return `⚠️ Você excedeu o orçamento em ${category.name}!`;
        } else if (spentPercentage >= 80) {
          return `⚠️ Você está perto de exceder o orçamento em ${category.name}.`;
        } else {
          return null;
        }
      })
      .filter(Boolean);

    setAlerts(newAlerts);
  }, [categories]);

  // Atualiza o orçamento de uma categoria específica, evitando valores negativos.
  const handleBudgetChange = (index, value) => {
    const newCategories = [...categories];
    newCategories[index].budget = Math.max(Number(value) || 0, 0);
    setCategories(newCategories);
  };

  // Atualiza os gastos reais de uma categoria específica, evitando valores negativos.
  const handleSpentChange = (index, value) => {
    const newCategories = [...categories];
    newCategories[index].spent = Math.max(Number(value) || 0, 0);
    setCategories(newCategories);
  };

  // Define os dados do gráfico de barras.
  const chartData = {
    labels: categories.map((cat) => cat.name),
    datasets: [
      {
        label: "Orçamento",
        data: categories.map((cat) => cat.budget),
        backgroundColor: "#2168A9",
      },
      {
        label: "Gastos Reais",
        data: categories.map((cat) => cat.spent),
        backgroundColor: "#FF5A5F",
      },
    ],
  };

  // Renderiza o conteúdo da página.
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
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
        <title>Página de Orçamento</title>
        <meta
          name="description"
          content="Defina metas de orçamento e visualize seus gastos."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white bg-opacity-20 backdrop-blur-md text-white flex flex-col justify-center items-center p-6 sm:p-10 rounded-lg w-full max-w-4xl h-auto shadow-lg z-10">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
          Orçamento
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-10">
          Gerencie suas finanças e acompanhe seus gastos.
        </p>

        {/* Campos de orçamento e gastos */}
        <div className="w-full mb-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-center mb-4"
            >
              <span className="text-lg text-gray-800 mb-2 sm:mb-0">
                {category.name}
              </span>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div>
                  <label htmlFor={`budget-${index}`} className="text-gray-700">
                    Orçamento:
                  </label>
                  <input
                    id={`budget-${index}`}
                    type="number"
                    value={category.budget}
                    onChange={(e) => handleBudgetChange(index, e.target.value)}
                    className="ml-2 w-24 px-2 py-1 rounded-md text-gray-800 border border-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor={`spent-${index}`} className="text-gray-700">
                    Gastos:
                  </label>
                  <input
                    id={`spent-${index}`}
                    type="number"
                    value={category.spent}
                    onChange={(e) => handleSpentChange(index, e.target.value)}
                    className="ml-2 w-24 px-2 py-1 rounded-md text-gray-800 border border-gray-400"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {alerts.length > 0 && (
          <div className="w-full bg-red-100 text-red-800 p-4 rounded-lg mb-6 shadow">
            {alerts.map((alert, index) => (
              <p key={index} className="text-sm">
                {alert}
              </p>
            ))}
          </div>
        )}

        {/* Gráfico de barras */}
        <div className="w-full bg-white rounded-lg p-5 shadow-lg">
          <Bar
            data={chartData}
            options={{ responsive: true, maintainAspectRatio: true }}
          />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
          <button
            onClick={() => router.push("/Home")}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
          >
            Voltar para Página Inicial
          </button>
        </div>
      </div>

      <footer className="w-full h-24 flex items-center justify-center border-t z-10 mt-6">
        <p className="text-gray-500">© 2024 EXF Exclusive Finance</p>
      </footer>
    </div>
  );
}
