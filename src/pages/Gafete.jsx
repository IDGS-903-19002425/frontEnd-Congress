import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Gafete = () => {
  const { id } = useParams();
  const [participante, setParticipante] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParticipante = async () => {
      try {
        const response = await fetch(
          `https://localhost:5000/api/Participantes/${id}`
        );
        if (!response.ok) throw new Error("Error al obtener participante");
        const data = await response.json();
        setParticipante(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchParticipante();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900 text-white">
        Cargando...
      </div>
    );

  if (!participante)
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900 text-white">
        Participante no encontrado
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-2xl font-bold text-white mb-6">
        Gafete del Participante
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-white rounded-xl shadow-lg w-80 h-[440px] p-6 flex flex-col items-center text-center relative">
          <div className="absolute top-2 right-2 text-xs text-slate-400">
            #ID {participante.id}
          </div>
          <img
            src={`/${participante.avatar || "./avatar.png"}`}
            alt="avatar"
            className="w-28 h-28 rounded-full border-4 border-green-600 mb-4"
          />
          <h2 className="text-lg font-bold text-slate-900">
            {participante.nombre} {participante.apellidos}
          </h2>
          <p className="text-sm text-slate-600">{participante.ocupacion}</p>

          <div className="mt-4 space-y-1 text-sm">
            <p>
              <span className="font-semibold">Email: </span>
              {participante.email}
            </p>
            <p>
              <span className="font-semibold">Twitter: </span>
              <a
                href={`https://twitter.com/${participante.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {participante.twitter}
              </a>
            </p>
          </div>

          <div className="mt-6 text-xs text-slate-500">
            <p>Congreso de Tecnologías de la Información</p>
            <p>Universidad Tecnológica de León</p>
          </div>
        </div>
        <div className="bg-green-600 rounded-xl shadow-lg w-80 h-[440px] p-6 flex flex-col items-center justify-center text-white">
          <h2 className="text-xl font-bold mb-3">CONGRESO TIC’S 2025</h2>
          <p className="text-sm text-center mb-6">
            Este gafete acredita a <br />
            <span className="font-semibold">
              {participante.nombre} {participante.apellidos}
            </span>{" "}
            <br />
            como participante activo del congreso.
          </p>

          <div className="bg-white text-green-700 font-bold px-4 py-2 rounded-lg shadow">
            {participante.ocupacion || "Participante"}
          </div>

          <div className="mt-10 text-xs text-white/80 text-center">
            <p>Fecha de registro:</p>
            <p>{new Date(participante.fechaRegistro).toLocaleDateString()}</p>
          </div>

          <div className="mt-8">
            <img src="/utl.png" alt="Logo UTL" className="w-20 opacity-90" />
          </div>
        </div>
      </div>
      <Link
        to="/participantes"
        className="mt-8 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Volver al listado
      </Link>
    </div>
  );
};

export default Gafete;
