import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-purple-700 to-blue-600 shadow-md fixed w-full top-0 z-50">
      {/* Left: Logo + Name */}
      <a href="#home" className="flex items-center space-x-3">
        <img
          src={logo}
          alt="Nasir Zeb Logo"
          className="h-10 w-10 object-contain rounded-full"
        />
        <span className="text-white font-extrabold text-xl tracking-wide">
          Nasir Zeb
        </span>
      </a>

      {/* Right: Links */}
      <div className="space-x-8 text-white font-semibold hidden md:flex">
        <a href="#projects" className="hover:text-yellow-300 transition">
          Projects
        </a>
        <a href="#services" className="hover:text-yellow-300 transition">
          Services
        </a>
        <a href="#contact" className="hover:text-yellow-300 transition">
          Contact
        </a>
      </div>
    </nav>
  );
}
