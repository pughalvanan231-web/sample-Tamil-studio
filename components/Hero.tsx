"use client";

import { motion } from "framer-motion";
import { HiArrowRight, HiPhone } from "react-icons/hi";

const WHATSAPP_NUMBER = "919999999999";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Tamil%20Photography!%20I'd%20like%20to%20inquire%20about%20your%20photography%20services.`;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85"
          alt="Wedding Photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-950/80 to-dark-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/30" />
      </div>

      <div className="relative z-10 container-max section-padding text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto lg:mx-0"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="section-subtitle block mb-4"
          >
            Tamil Nadu&apos;s Premier Photography Studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-tight mb-6"
          >
            Capturing Your
            <br />
            <span className="text-gradient">Precious Moments</span>
            <br />
            Forever
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Specializing in wedding, maternity, baby shower, and family
            photography. We transform your cherished moments into timeless
            works of art with premium quality and creative excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a href="#portfolio" className="btn-primary text-base">
              View Portfolio
              <HiArrowRight className="text-lg" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base"
            >
              <HiPhone className="text-lg" />
              Book via WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gold-500/50"
          />
        </motion.div>
      </div>
    </section>
  );
}
