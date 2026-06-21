"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";

const iconMap: Record<string, string> = {
  "💍": "💍",
  "🤰": "🤰",
  "🎀": "🎀",
  "🌿": "🌿",
  "💑": "💑",
  "👨‍👩‍👧‍👦": "👨‍👩‍👧‍👦",
  "📖": "📖",
  "🎉": "🎉",
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      <div className="container-max section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">What We Offer</span>
          <h2 className="section-title mt-2">
            Premium Photography{" "}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            From intimate moments to grand celebrations, we offer a
            comprehensive range of photography services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-dark p-8 group cursor-pointer"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {iconMap[service.icon] || service.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 w-8 h-px bg-gold-500/50 group-hover:w-12 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
