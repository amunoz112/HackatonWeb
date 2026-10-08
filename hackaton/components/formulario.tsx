
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
    <div className="flex flex-row items-start justify-center gap-8 p-8">

      {/* FORMULARIO */}
      <form
        onSubmit={handleSubmit}
        className="w-96 space-y-5 rounded-xl bg-white p-6 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-slate-800">
          Formulario de Usuario
        </h2>

        <div>
          <label className="block text-sm font-semibold text-slate-700">
            Nombre de usuario
          </label>
          <input
            type="text"
            name="username"
            value={planData.username}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700">
            Nombre completo
          </label>
          <input
            type="text"
            name="fullName"
            value={planData.fullName}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700">
            Edad
          </label>
          <input
            type="number"
            name="age"
            value={planData.age}
            onChange={handleChange}
            min="1"
            required
            className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-black"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Enviar formulario
        </button>
      </form>

      {/* RESPUESTAS */}
      {submittedData && (
        <div className="w-96 rounded-xl bg-white p-6 shadow-lg">
          <h2 className="mb-5 text-2xl font-bold text-slate-800">
            Respuestas enviadas
          </h2>

          <div className="space-y-4 text-slate-700">
            <p>
              <strong>Usuario:</strong> {submittedData.username}
            </p>
            <p>
              <strong>Nombre completo:</strong> {submittedData.fullName}
            </p>
            <p>
              <strong>Edad:</strong> {submittedData.age}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
