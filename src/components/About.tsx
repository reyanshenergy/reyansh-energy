"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">About Reyansh Energy</h2>

          <p className="text-gray-600 mb-4">
            Reyansh Energy is a growing solar solutions provider focused on
            delivering affordable and efficient energy systems for homes and
            businesses.
          </p>

          <p className="text-gray-600">
            We are committed to helping customers reduce electricity costs and
            adopt clean energy with reliable support and modern technology.
          </p>
        </motion.div>

        {/* RIGHT TRUST BOXES */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-green-100 p-6 rounded-xl text-center">
            <h3 className="text-lg font-bold text-green-600">New Startup</h3>
            <p className="text-gray-700">Focused on Growth</p>
          </div>

          <div className="bg-green-100 p-6 rounded-xl text-center">
            <h3 className="text-lg font-bold text-green-600">Affordable</h3>
            <p className="text-gray-700">Cost Effective Solutions</p>
          </div>

          <div className="bg-green-100 p-6 rounded-xl text-center">
            <h3 className="text-lg font-bold text-green-600">Reliable</h3>
            <p className="text-gray-700">Quality Service</p>
          </div>

          <div className="bg-green-100 p-6 rounded-xl text-center">
            <h3 className="text-lg font-bold text-green-600">Support</h3>
            <p className="text-gray-700">Customer First Approach</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
