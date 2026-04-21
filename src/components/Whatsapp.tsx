"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/919990035559"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 flex flex-col items-center"
    >
      <div className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition">
        <FaWhatsapp size={24} />
      </div>

      <span className="text-xs mt-1 bg-black text-white px-3 py-1 rounded-full shadow">
        Have a query?
      </span>
    </a>
  );
}
