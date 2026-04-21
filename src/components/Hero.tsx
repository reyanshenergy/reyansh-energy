"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-24 bg-linear-to-r from-green-500 to-green-700 text-white">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-6"
      >
        Power Your Future with Solar Energy
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg mb-8 max-w-xl mx-auto"
      >
        Reduce your electricity bills and switch to clean energy today.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold"
      >
        Get a Quote
      </motion.button>

    </section>
  );
}