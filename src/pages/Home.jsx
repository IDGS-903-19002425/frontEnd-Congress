import React from "react";
import { NavBar } from "../components/NavBar";
import { Link } from "react-router";
import "./Home.css";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-2xl p-8">
        <div className="flex justify-center gap-6 mb-6">
          <div className="w-32 h-24 bg-slate-200 rounded flex items-center justify-center">
            <img src="./utl.png" alt="" className="text-slate-400 text-xs" />
          </div>
          <div className="w-32 h-24 bg-slate-200 rounded flex items-center justify-center">
            <img src="./tics.png" alt="" className="text-slate-400 text-xs" />
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900 leading-tight">
            Bienvenidos al Congreso de
          </h1>
          <h2 className="text-xl font-semibold text-slate-800">
            Tecnologías de la Información
          </h2>
        </div>

        <div className="flex justify-center">
          <Link
            to="/participantes"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors shadow-lg"
          >
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
