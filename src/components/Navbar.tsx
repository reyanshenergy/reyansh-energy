"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md flex items-center justify-between px-6 py-4">

      {/* Logo */}
      <Link
        href="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-2xl font-bold text-green-600 cursor-pointer"
      >
        Reyansh Energy
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 font-medium">
        <a href="#services" className="hover:text-green-600">Services</a>
        <a href="#about" className="hover:text-green-600">About</a>
        <a href="#contact" className="hover:text-green-600">Contact</a>
      </div>

      {/* Mobile Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 right-6 bg-white shadow-lg p-4 rounded-lg flex flex-col space-y-3">

          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

        </div>
      )}
    </nav>
  );
}