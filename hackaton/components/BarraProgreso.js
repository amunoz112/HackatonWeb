"use client";
import { useState } from "react";

export default function BarraProgreso() {
  const [porcentaje, setPorcentaje] = useState(0);

  function cambiar(e) {
    const numero = Number(e.target.value);
    if (numero >= 0 && numero <= 100) {
      setPorcentaje(numero);
    }
  }

  return (
    <div>
      <h2>Progress bar</h2>

      <div style={{ width: "300px", backgroundColor: "gray" }}>
        <div style={{ width: porcentaje + "%", backgroundColor: "red" }}>
          {porcentaje}%
        </div>
      </div>

      <p>
        Input Percentage:{" "}
        <input type="number" value={porcentaje} onChange={cambiar} />
      </p>
    </div>
  );
}