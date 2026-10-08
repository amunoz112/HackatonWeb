"use client";

import { useState } from "react";

export default function GeneradorContrasenas() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [message, setMessage] = useState("");

  function generarContrasena() {
    const grupos = [];

    if (uppercase) grupos.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (lowercase) grupos.push("abcdefghijklmnopqrstuvwxyz");
    if (numbers) grupos.push("0123456789");
    if (symbols) grupos.push("!@#$%^&*");

    if (grupos.length === 0) {
      setMessage("Selecciona al menos una opción");
      setPassword("");
      return;
    }

    const caracteres = grupos.join("");
    const resultado: string[] = [];

    // Número aleatorio seguro
    function numeroAleatorio(max: number) {
      const limite = Math.floor(4294967296 / max) * max;
      const valores = new Uint32Array(1);
      let numero;

      do {
        crypto.getRandomValues(valores);
        numero = valores[0];
      } while (numero >= limite);

      return numero % max;
    }

    // Asegurar al menos un carácter de cada grupo
    for (const grupo of grupos) {
      resultado.push(grupo[numeroAleatorio(grupo.length)]);
    }

    // Completar la longitud
    while (resultado.length < length) {
      resultado.push(
        caracteres[numeroAleatorio(caracteres.length)]
      );
    }

    // Mezclar los caracteres
    for (let i = resultado.length - 1; i > 0; i--) {
      const j = numeroAleatorio(i + 1);
      [resultado[i], resultado[j]] = [resultado[j], resultado[i]];
    }

    setPassword(resultado.join(""));
    setMessage("");
  }

  async function copiarContrasena() {
    if (!password) return;

    try {
      await navigator.clipboard.writeText(password);
      setMessage("Contraseña copiada");
    } catch {
      setMessage("No se pudo copiar la contraseña");
    }
  }

  return (
    <div className="w-80 p-5 border text-black bg-white">
      <h2 className="text-xl font-bold mb-4">
        Generador de Contraseñas
      </h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={password}
          readOnly
          placeholder="Tu contraseña"
          className="border p-2 w-full"
        />

        <button
          onClick={copiarContrasena}
          className="border p-2"
        >
          Copiar
        </button>
      </div>

      <p>Longitud: {length}</p>

      <input
        type="range"
        min="4"
        max="30"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        className="w-full mb-4"
      />

      <div className="flex flex-col gap-2 mb-4">
        <label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
          />
          {" "}Mayúsculas
        </label>

        <label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
          />
          {" "}Minúsculas
        </label>

        <label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
          />
          {" "}Números
        </label>

        <label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={(e) => setSymbols(e.target.checked)}
          />
          {" "}Caracteres especiales
        </label>
      </div>

      <button
        onClick={generarContrasena}
        className="border p-2 w-full bg-gray-200"
      >
        Generar contraseña
      </button>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}