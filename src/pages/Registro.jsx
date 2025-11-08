import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registro = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    twitter: "",
    ocupacion: "",
    avatar: "",
    terminos: false,
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("https://localhost:5000/api/Participantes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al registrar participante");
      }

      const data = await response.json();
      console.log("Participante registrado:", data);

      alert("✅ Participante registrado exitosamente");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      setErrorMsg("Hubo un error al registrar el participante");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 py-10 px-4 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Registro de Participante
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full border-2 border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Apellidos
            </label>
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              required
              className="w-full border-2 border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-2 border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Usuario en Twitter
            </label>
            <input
              type="text"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Ocupación
            </label>
            <input
              type="text"
              name="ocupacion"
              value={formData.ocupacion}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Avatar
            </label>
            <div className="flex justify-around">
              {[1, 2, 3].map((num) => (
                <label key={num} className="flex flex-col items-center">
                  <input
                    type="radio"
                    name="avatar"
                    value={`avatar${num}.png`}
                    checked={formData.avatar === `avatar${num}.png`}
                    onChange={handleChange}
                    className="mb-2"
                  />
                  <img
                    src="./avatar.png"
                    alt={`Avatar ${num}`}
                    className="w-12 h-12 rounded-full border"
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="terminos"
              checked={formData.terminos}
              onChange={handleChange}
              required
              className="w-5 h-5 accent-green-600"
            />
            <label className="text-sm text-slate-700">
              Acepto los términos y condiciones
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            {loading ? "Guardando..." : "Guardar"}
          </button>

          {errorMsg && (
            <p className="text-center text-red-500 text-sm mt-2">{errorMsg}</p>
          )}
        </form>

        <p className="text-center text-sm text-slate-500 mt-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Volver al listado
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registro;
