"use client";

import { motion } from "framer-motion";
import { HiPhone, HiMail, HiLocationMarker, HiClock } from "react-icons/hi";

const WHATSAPP_NUMBER = "919999999999";
const PHONE = "+91 98765 43210";
const EMAIL = "hello@tamilphotography.com";
const ADDRESS = "123, Photography Street, Anna Nagar, Chennai - 600 040, Tamil Nadu";
const HOURS = "Mon - Sun: 9:00 AM - 9:00 PM";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      <div className="container-max section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title mt-2">
            Let&apos;s Discuss Your{" "}
            <span className="text-gradient">Vision</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Reach out to us and let&apos;s create
            something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-sm bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                <HiPhone className="text-gold-500 text-xl" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  Phone
                </h3>
                <a
                  href={`tel:${PHONE}`}
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                >
                  {PHONE}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-sm bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                <HiMail className="text-gold-500 text-xl" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  Email
                </h3>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-sm bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                <HiLocationMarker className="text-gold-500 text-xl" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  Address
                </h3>
                <p className="text-gray-400">{ADDRESS}</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-sm bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                <HiClock className="text-gold-500 text-xl" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  Working Hours
                </h3>
                <p className="text-gray-400">{HOURS}</p>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex"
            >
              <HiPhone className="text-lg" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-auto rounded-sm overflow-hidden gold-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.587964504399!2d80.210148874841!3d13.058899287276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266d0c0c0c0c1%3A0x0!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tamil Photography Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
