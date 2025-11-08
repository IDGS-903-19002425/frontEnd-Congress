import React, { useState, useEffect } from "react";
import "./Participantes.css";
import { Link } from "react-router-dom";

const Participantes = () => {
  const [participantes, setParticipantes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 Llamada al backend
  useEffect(() => {
    const fetchParticipantes = async () => {
      try {
        const response = await fetch(
          "https://localhost:5000/api/Participantes"
        );
        if (!response.ok) {
          throw new Error("Error al obtener participantes");
        }
        const data = await response.json();
        setParticipantes(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchParticipantes();
  }, []);

  // 🔍 Filtro de búsqueda
  const filteredParticipantes = participantes.filter((p) =>
    p.nombre?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4 flex justify-center">
      <div className="w-full max-w-2xl">
        {/* HEADER */}
        <div className="bg-white rounded-t-xl p-4 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <img src="./tics.png" alt="Logo Congreso" className="w-14 h-14" />
              <h1 className="text-xl font-bold text-slate-900">
                Asistentes Registrados
              </h1>
            </div>
            <Link
              to="/registro"
              className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded hover:bg-green-700 transition-colors"
            >
              Registro
            </Link>
          </div>

          {/* Barra de búsqueda */}
          <div className="relative">
            <input
              type="text"
              placeholder="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-slate-400 rounded-full focus:outline-none focus:border-blue-500"
            />
            <svg
              className="absolute right-4 top-2.5 w-5 h-5 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="bg-white rounded-b-xl shadow-md divide-y divide-slate-300">
          {filteredParticipantes.length > 0 ? (
            filteredParticipantes.map((p) => (
              <div
                key={p.id}
                className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors"
              >
                <Link to={`/gafete/${p.id}`}>
                  <img
                    src="./avatar.png"
                    alt={p.nombre}
                    className="w-16 h-16 rounded-full border-2 border-slate-300"
                  />
                </Link>

                <div className="flex-1">
                  <p className="font-semibold text-slate-900 text-lg">
                    {p.nombre} {p.apellidos}
                  </p>
                  <div className="flex items-center gap-1 text-blue-600 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-slate-800"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.953 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.864 9.864 0 01-3.127 1.184A4.92 4.92 0 0016.616 3c-2.72 0-4.924 2.2-4.924 4.917 0 .39.045.765.13 1.124-4.09-.205-7.719-2.164-10.15-5.144a4.822 4.822 0 00-.665 2.475 4.92 4.92 0 002.188 4.096 4.903 4.903 0 01-2.23-.616v.06c0 2.385 1.7 4.374 3.946 4.827a4.935 4.935 0 01-2.224.084c.63 1.953 2.445 3.376 4.6 3.416A9.868 9.868 0 010 19.539a13.905 13.905 0 007.548 2.209c9.142 0 14.307-7.721 13.995-14.646a9.935 9.935 0 002.41-2.533z" />
                    </svg>
                    <a
                      href={`https://twitter.com/${p.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {p.twitter}
                    </a>
                  </div>
                  <p className="text-slate-600 text-sm">
                    {p.ocupacion || "Participante"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-slate-500">
              <p className="text-lg">No hay participantes registrados</p>
              <p className="text-sm mt-2">
                Los participantes aparecerán aquí una vez registrados.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Participantes;
