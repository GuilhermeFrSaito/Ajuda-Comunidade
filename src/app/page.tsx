"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleAcessarClick = () => {
    router.push("./login");
  };

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen bg-gradient-to-b from-[rgb(var(--background-start-rgb))] to-[rgb(var(--background-end-rgb))] text-center transition-opacity duration-2000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black dark:text-white">
          Ajuda Comunidade
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-black dark:text-white">
          Aplicativo para ajudar vítimas de catástrofes e disastres naturais,
          organizando esforços como envio e recebimento doações e atuação de
          voluntários e instituições.
        </p>
        <button
          className="botaoAcessar px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={handleAcessarClick}
        >
          Acessar
        </button>
      </div>
    </div>
  );
};

export default Home;
