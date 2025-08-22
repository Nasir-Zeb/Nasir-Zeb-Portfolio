import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-700 to-blue-600 shadow-md fixed w-full top-0 z-50">
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

      {/* Desktop Menu */}
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

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg flex flex-col items-start p-4 space-y-3 md:hidden">
          <a
            href="#projects"
            className="text-gray-800 font-semibold hover:text-purple-600"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#services"
            className="text-gray-800 font-semibold hover:text-purple-600"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-800 font-semibold hover:text-purple-600"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
