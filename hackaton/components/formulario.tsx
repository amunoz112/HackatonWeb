
"use client";

import { useState } from "react";

type Formulario = {
  username: string;
  fullName: string;
  age: number;
};

export default function Formulario() {
  const [planData, setPlanData] = useState<Formulario>({
    username: "",
    fullName: "",
    age: 0,
  });

  const [submittedData, setSubmittedData] = useState<Formulario | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setPlanData((prevPlan) => ({
      ...prevPlan,
      [name]: name === "age" ? Number(value) : value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmittedData({ ...planData });
  }

  return (
    <div className="flex gap-10 p-5 text-black">

      <form onSubmit={handleSubmit} className="w-64">
        <h2>Formulario de Usuario</h2>

        <div className="mt-4">
          <label>Nombre de usuario</label>
          <input
            type="text"
            name="username"
            value={planData.username}
            onChange={handleChange}
            required
            className="border p-1 w-full"
          />
        </div>

        <div className="mt-4">
          <label>Nombre completo</label>
          <input
            type="text"
            name="fullName"
            value={planData.fullName}
            onChange={handleChange}
            required
            className="border p-1 w-full"
          />
        </div>

        <div className="mt-4">
          <label>Edad</label>
          <input
            type="number"
            name="age"
            value={planData.age}
            onChange={handleChange}
            min="1"
            required
            className="border p-1 w-full"
          />
        </div>

        <button type="submit" className="border p-2 mt-4">
          Enviar
        </button>
      </form>

      {submittedData && (
        <div className="border p-4">
          <h2>Respuestas</h2>
          <p>Usuario: {submittedData.username}</p>
          <p>Nombre: {submittedData.fullName}</p>
          <p>Edad: {submittedData.age}</p>
        </div>
      )}

    </div>
  );
}
