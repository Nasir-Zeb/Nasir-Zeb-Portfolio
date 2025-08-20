import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-white/10 backdrop-blur-lg">
      <a href="#home" className="flex items-center">
        <img src={logo} alt="Nasir Zeb Logo" className="h-12 w-auto" />
        <span className="ml-3 text-white font-bold text-xl">Nasir Zeb</span>
      </a>
      <div className="space-x-6 text-white font-semibold">
        <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
        <a href="#services" className="hover:text-yellow-400 transition">Services</a>
        <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
      </div>
    </nav>
  );
}