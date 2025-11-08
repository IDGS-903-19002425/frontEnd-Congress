import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
export const NavBar = () => {
  return (
    <nav className="bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-6 py-2 rounded-md font-medium transition-colors ${
                isActive
                  ? "bg-slate-800 text-blue-400"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/participantes"
            className={({ isActive }) =>
              `px-6 py-2 rounded-md font-medium transition-colors ${
                isActive
                  ? "bg-slate-800 text-blue-400"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Ver Participantes
          </NavLink>
          <NavLink
            to="/registro"
            className={({ isActive }) =>
              `px-6 py-2 rounded-md font-medium transition-colors ${
                isActive
                  ? " hover:bg-slate-800  text-blue-400"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Ir a registro
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
