"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center text-white">
      {/* Background Image */}
      <Image
        src="/images/solar-hero.jpg"
        alt="Solar engineer working on solar panel"
        fill
        priority
        className="object-cover object-center md:object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center px-4 md:px-6 max-w-3xl">
        <h1 className="text-2xl md:text-5xl font-bold leading-tight">
          Power Your Future with Solar Energy
        </h1>

        <p className="mt-3 md:mt-4 text-sm md:text-lg text-gray-200">
          Save electricity bills and switch to clean energy today
        </p>

        <div className="mt-5 flex flex-col md:flex-row gap-3 justify-center">
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 px-5 py-2 md:px-6 md:py-3 rounded-full"
          >
            Get a Quote
          </a>

          <a
            href="https://wa.me/919212101007"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-5 py-2 md:px-6 md:py-3 rounded-full"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
