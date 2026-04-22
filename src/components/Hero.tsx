"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-white">
      {/* Background Image */}
      <Image
        src="/images/solar-hero.jpg"
        alt="Solar engineer working on solar panel"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Power Your Future with Solar Energy
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          Save electricity bills and switch to clean energy today
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold"
          >
            Get a Quote
          </a>

          <a
            href="https://wa.me/919212101007"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded-full"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
