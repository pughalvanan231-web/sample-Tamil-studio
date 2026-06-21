"use client";

import { motion } from "framer-motion";
import {
  HiCamera,
  HiHeart,
  HiStar,
  HiEmojiHappy,
  HiPhotograph,
  HiLocationMarker,
  HiPhone,
  HiMail,
} from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPinterestP,
} from "react-icons/fa";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#booking", label: "Book Now" },
  { href: "#contact", label: "Contact" },
];

const serviceLinks = [
  { href: "#services", label: "Wedding Photography" },
  { href: "#services", label: "Maternity Photography" },
  { href: "#services", label: "Baby Shower" },
  { href: "#services", label: "Outdoor Photoshoot" },
  { href: "#services", label: "Family Photography" },
  { href: "#services", label: "Event Photography" },
  { href: "#services", label: "Album Design" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaWhatsapp, href: "https://wa.me/919999999999", label: "WhatsApp" },
  { icon: FaPinterestP, href: "#", label: "Pinterest" },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark-950 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-dark-950 pointer-events-none" />

      <div className="container-max section-padding !pb-0 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gold-500 text-2xl">✦</span>
              <span className="font-display text-xl font-bold tracking-wider text-white">
                TAMIL
                <span className="text-gold-500"> PHOTOGRAPHY</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Capturing your precious moments forever with premium photography
              services. Based in Chennai, serving across Tamil Nadu.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-500/20 hover:text-gold-500 transition-all duration-300"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-display text-lg font-bold text-white mb-6 gold-underline inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-gold-500 text-sm transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold-500/50 rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-display text-lg font-bold text-white mb-6 gold-underline inline-block">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-gold-500 text-sm transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold-500/50 rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-display text-lg font-bold text-white mb-6 gold-underline inline-block">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <HiLocationMarker className="text-gold-500 mt-0.5 flex-shrink-0" />
                <span>Anna Nagar, Chennai - 600 040</span>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-gray-500 hover:text-gold-500 text-sm transition-colors"
                >
                  <HiPhone className="text-gold-500 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@tamilphotography.com"
                  className="flex items-center gap-3 text-gray-500 hover:text-gold-500 text-sm transition-colors"
                >
                  <HiMail className="text-gold-500 flex-shrink-0" />
                  <span>hello@tamilphotography.com</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/5 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} TAMIL PHOTOGRAPHY. All rights
            reserved. | Crafted with passion for timeless memories.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-gold-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
