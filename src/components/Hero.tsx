"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "../animations/solar.json"; // Ensure this path is correct

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/solar-hero.jpg"
        alt="Solar panels"
        fill
        priority
        className="object-cover object-top md:object-center"
      />

      <h1>Solar Panel Installation in Delhi</h1>
      <h2>Our Solar Services</h2>
      <h2>Why Choose Reyansh Energy</h2>
      <h2>Contact Solar Experts</h2>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        {/* LOTTIE ANIMATION - Positioned above the text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-32 h-32 md:w-48 md:h-48 mb-4"
        >
          <Lottie animationData={animationData} loop={true} />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Power Your Future with{" "}
            <span className="text-green-400">Solar Energy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Save on electricity bills and switch to clean, renewable energy
            today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex gap-4 justify-center"
          >
            <a
              href="#contact"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
            >
              Get a Quote
            </a>
            <a
              href="#services"
              className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold transition-all"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
