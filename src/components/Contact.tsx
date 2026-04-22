"use client";

import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion"; // Added missing import

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Message Sent Successfully!");
      form.reset();
    } else {
      alert("Failed to send message");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Contact Us</h2>

      {/* CONTACT CARDS WRAPPER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {/* Phone */}
        <a
          href="tel:+919212101007"
          className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition"
        >
          <FaPhone className="text-green-600 text-3xl mx-auto mb-4" />
          <h3 className="font-semibold text-lg">Call Us</h3>
          <p className="text-gray-600">+91 9212101007</p>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/9212101007"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition"
        >
          <FaWhatsapp className="text-green-600 text-3xl mx-auto mb-4" />
          <h3 className="font-semibold text-lg">WhatsApp</h3>
          <p className="text-gray-600">Chat with us instantly</p>
        </a>

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=reyanshenergy1@gmail.com&su=Solar Inquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition col-span-1 sm:col-span-2 md:col-span-1"
        >
          <FaEnvelope className="text-green-600 text-3xl mx-auto mb-4" />
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="text-gray-600">reyanshenergy1@gmail.com</p>
        </a>
      </motion.div>

      {/* FORM WRAPPER */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }} // Added slight delay for sequence
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        action="https://formsubmit.co/reyanshenergy1@gmail.com"
        method="POST"
        className="mt-16 max-w-xl mx-auto space-y-4"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          name="phone"
          type="text"
          placeholder="Phone Number"
          required
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Optional settings */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://localhost:3000" />

        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
