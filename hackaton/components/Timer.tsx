"use client";
import { useState, useRef } from "react";

export default function Timer() {
  const [segundos, setSegundos] = useState(0);
  const intervalo = useRef<NodeJS.Timeout | null>(null);

  function iniciar() {
    if (intervalo.current) return;
    intervalo.current = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);
  }

  function detener() {
    if (intervalo.current) clearInterval(intervalo.current);
    intervalo.current = null;
  }

  function reiniciar() {
    detener();
    setSegundos(0);
  }

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">Timer</h1>
      <h2 className="text-2xl mb-4">
        {Math.floor(segundos / 60)} mins {segundos % 60} secs
      </h2>

      <button onClick={iniciar} className="bg-green-700 px-6 py-3 mr-2">Start</button>
      <button onClick={detener} className="bg-red-500 px-6 py-3 mr-2">Stop</button>
      <button onClick={reiniciar} className="bg-yellow-300 px-6 py-3">Reset</button>
    </div>
  );
}