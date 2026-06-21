"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiCalendar, HiUser, HiPhone, HiMail, HiTag } from "react-icons/hi";

const eventTypes = [
  "Wedding",
  "Maternity",
  "Baby Shower",
  "Outdoor Photoshoot",
  "Couple Shoot",
  "Family Photography",
  "Event Photography",
  "Album Design",
  "Other",
];

const WHATSAPP_NUMBER = "919999999999";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Tamil Photography! I'd like to book a session.%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Event:* ${form.eventType}%0A*Date:* ${form.date}%0A*Message:* ${form.message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <section id="booking" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />

      <div className="container-max section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Book Your Session</span>
          <h2 className="section-title mt-2">
            Let&apos;s Create Something{" "}
            <span className="text-gradient">Beautiful</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Ready to capture your precious moments? Fill out the form below and
            we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {submitted ? (
            <div className="card-dark p-12 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Thank You!
              </h3>
              <p className="text-gray-400">
                You&apos;ll be redirected to WhatsApp to complete your booking.
                We look forward to hearing from you!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-dark p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-300 mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <div className="relative">
                    <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-dark-900 border border-white/10 rounded-sm py-3 pl-12 pr-4 text-white placeholder-gray-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <div className="relative">
                    <HiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-dark-900 border border-white/10 rounded-sm py-3 pl-12 pr-4 text-white placeholder-gray-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2 uppercase tracking-wider">
                    Email (Optional)
                  </label>
                  <div className="relative">
                    <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-dark-900 border border-white/10 rounded-sm py-3 pl-12 pr-4 text-white placeholder-gray-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2 uppercase tracking-wider">
                    Event Type
                  </label>
                  <div className="relative">
                    <HiTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 z-10" />
                    <select
                      name="eventType"
                      required
                      value={form.eventType}
                      onChange={handleChange}
                      className="w-full bg-dark-900 border border-white/10 rounded-sm py-3 pl-12 pr-4 text-gray-400 transition-colors appearance-none"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2 uppercase tracking-wider">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <HiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-dark-900 border border-white/10 rounded-sm py-3 pl-12 pr-4 text-white transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-300 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event and any special requirements..."
                    className="w-full bg-dark-900 border border-white/10 rounded-sm py-3 px-4 text-white placeholder-gray-600 transition-colors resize-none"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full mt-8 text-base">
                <HiPhone className="text-lg" />
                Send via WhatsApp
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
