"use client";
import { useState } from "react";

export default function BarraProgreso() {
  const [porcentaje, setPorcentaje] = useState(0);

  function cambiar(e: React.ChangeEvent<HTMLInputElement>) {
    const numero = Number(e.target.value);
    if (numero >= 0 && numero <= 100) {
      setPorcentaje(numero);
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-2">Progress bar</h2>

      <div className="w-72 bg-gray-300 rounded-full">
        <div
          className="bg-red-500 text-white text-center rounded-full"
          style={{ width: porcentaje + "%" }}
        >
          {porcentaje}%
        </div>
      </div>

      <p className="mt-2">
        Input Percentage:{" "}
        <input
          type="number"
          value={porcentaje}
          onChange={cambiar}
          className="border rounded px-2"
        />
      </p>
    </div>
  );
}