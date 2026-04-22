"use client";

import { motion } from "framer-motion";
import { FaSolarPanel, FaBuilding, FaTools } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaSolarPanel size={40} />,
      title: "Residential Solar",
      desc: "Install solar panels for your home and save energy costs.",
    },
    {
      icon: <FaBuilding size={40} />,
      title: "Commercial Solar",
      desc: "Efficient solar solutions for businesses and industries.",
    },
    {
      icon: <FaTools size={40} />,
      title: "Maintenance",
      desc: "Keep your solar systems running at peak performance.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-8 px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300"
          >
            <div className="text-green-600 mb-4 flex justify-center">
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

            <p className="text-sm text-gray-500 mt-2">
              High efficiency • Government compliant • Long warranty
            </p>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
