"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-green-600">
        Reyansh Energy
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 font-medium">
        <a href="#services" className="hover:text-green-600">Services</a>
        <a href="#about" className="hover:text-green-600">About</a>
        <a href="#contact" className="hover:text-green-600">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 right-6 bg-white shadow-lg p-4 rounded-lg flex flex-col space-y-3">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      )}

    </nav>
  );
}