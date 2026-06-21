"use client";

import { motion } from "framer-motion";
import { HiBadgeCheck, HiHeart, HiStar, HiCamera } from "react-icons/hi";

const highlights = [
  {
    icon: HiCamera,
    text: "10+ Years of Professional Photography Experience",
  },
  {
    icon: HiBadgeCheck,
    text: "Expert Photo Editing & Premium Album Design",
  },
  {
    icon: HiHeart,
    text: "500+ Happy Clients & 800+ Events Covered",
  },
  {
    icon: HiStar,
    text: "Trusted by Families Across Tamil Nadu",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" />

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="relative z-10 rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=85"
                  alt="Tamil Photography Studio"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-500/10 gold-border rounded-sm flex items-center justify-center z-20">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-gold-500">
                    10+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">About Us</span>
            <h2 className="section-title mt-2 mb-6">
              We Tell Your Story Through{" "}
              <span className="text-gradient">Timeless Photographs</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              At TAMIL PHOTOGRAPHY, we believe every moment tells a story worth
              preserving forever. With over a decade of experience, we&apos;ve
              perfected the art of capturing emotions, beauty, and the essence of
              life&apos;s most precious celebrations.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              From the tears of joy at weddings to the serene glow of maternity,
              from the laughter of family gatherings to the excitement of events
              — we are there, camera in hand, ready to create magic. Our
              commitment to quality extends beyond the shoot; every image is
              meticulously edited and every album is designed with artistic
              precision.
            </p>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="w-10 h-10 rounded-sm bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-gold-500 text-lg" />
                  </div>
                  <span className="text-sm md:text-base">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
