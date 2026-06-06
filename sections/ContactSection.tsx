"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Check } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    program: "Langkah Kampus Akademi (Kelas Siang)",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const programs = [
    "Langkah Kampus Akademi (Kelas Pagi)",
    "Langkah Kampus Akademi (Kelas Siang)",
    "Langkah Kampus Akademi (Kelas Malam)"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Silakan isi nama dan nomor WhatsApp Anda!");
      return;
    }

    // Create custom WhatsApp message link
    const waNumber = "6282140021937"; // Mock administration number
    const text = `Halo Admin ABC English Course Tuban! Saya tertarik mendaftar program Langkah Kampus Akademi.
- Nama Lengkap: ${formData.name}
- Nomor WA: ${formData.phone}
- Pilihan Kelas: ${formData.program}
- Catatan Tambahan: ${formData.message || "-"}`;
    
    const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(text)}`;
    
    setIsSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", program: "General English", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-black text-orange-500">Hubungi Kami</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Mulai Langkah Kampusmu Hari Ini
          </p>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Urgency / FOMO Alert Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 p-0.5 rounded-[2rem] shadow-lg shadow-orange-500/10"
        >
          <div className="bg-white rounded-[1.95rem] p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center justify-between text-left">
            <div className="space-y-3 flex-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 font-bold text-xs animate-pulse">
                ⚠️ Kuota Terbatas!
              </span>
              <h3 className="text-xl font-black text-gray-900 leading-tight">
                Jangan Sampai Teman Sekelasmu Udah Slay Duluan di Kampus! 👑
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Masa kuliah adalah fase masa yang menentukan arah hidup puluhan tahun kedepannya. Masa depan kamu di kampus ditentukan dari persiapan kamu hari ini. Jangan sampai nyesel belakangan karena kalah start sama anak Tuban lainnya!
              </p>
            </div>
            <div className="shrink-0 text-center md:text-right bg-orange-50 border border-orange-100 p-4 rounded-2xl w-full md:w-auto">
              <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide">Pemberitahuan Penting</span>
              <span className="block text-sm font-black text-orange-600 mt-1">Psst.. slot terbatas banget, jangan sampai kehabisan & berujung FOMO!</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Contact info & Maps */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-black text-gray-900">Informasi Kontak</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Silakan hubungi kami untuk berkonsultasi mengenai hasil Placement Test, biaya paket promo, atau penyesuaian jadwal kelas.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 shrink-0 shadow-sm">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase">WhatsApp Admin</h4>
                    <a href="https://api.whatsapp.com/send?phone=6282140021937&text=halo%20boleh%20diinfo%20ya%20perihal%20progam%20LANGKAH%20KAMPUS%20ACADEMY" target="_blank" rel="noopener noreferrer" className="text-sm font-black text-gray-800 hover:text-orange-500 transition-colors">
                      +62 821-4002-1937
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 shrink-0 shadow-sm">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase">Email Resmi</h4>
                    <a href="mailto:info@abcenglish.com" className="text-sm font-black text-gray-800 hover:text-orange-500 transition-colors">
                      info@abcenglish.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 shrink-0 shadow-sm mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase">Alamat Cozy Hub</h4>
                    <p className="text-sm font-bold text-gray-800 leading-relaxed">
                      Rumah Bahasa "ABC English Course" Tuban, Kabupaten Tuban, Jawa Timur
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 shrink-0 shadow-sm">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase">Jam Operasional</h4>
                    <p className="text-sm font-bold text-gray-800">
                      Senin - Sabtu: 09.00 - 20.00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Location Map Mockup */}
            <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-md aspect-video bg-gradient-to-tr from-orange-100 to-yellow-100 flex flex-col justify-center items-center text-center p-6 select-none">
              <div className="absolute inset-0 bg-[radial-gradient(#ff6b00_1px,transparent_1.5px)] [background-size:16px_16px] opacity-25" />
              <div className="z-10 bg-white p-4 rounded-full shadow-md text-orange-500 mb-2 animate-bounce">
                <MapPin className="h-8 w-8 fill-current" />
              </div>
              <h4 className="z-10 font-black text-gray-800 text-sm">Rumah Bahasa ABC English Course</h4>
              <p className="z-10 text-[11px] text-gray-500 max-w-xs mt-1">
                Kabupaten Tuban, Jawa Timur. Pusat gathering & bimbingan belajar ter-cozy untuk anak SMA se-Tuban.
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="z-10 mt-3 text-xs font-black text-orange-500 hover:text-orange-600 hover:underline flex items-center gap-1.5"
              >
                <span>Buka Google Maps</span>
                <Send className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div className="lg:col-span-7 bg-white border border-gray-100 rounded-[2.5rem] p-8 sm:p-10 shadow-xl shadow-gray-200/50 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-gray-900 flex items-center gap-2">
                <MessageSquare className="text-orange-500 h-5 w-5" />
                <span>Pesan Slot Langkah Kampus Akademi</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Tekan tombol WA untuk info lebih detail ya! Isi formulir singkat berikut dan kumpulkan untuk langsung terhubung dengan WhatsApp admin kami untuk memproses slot pendaftaranmu.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 pt-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs sm:text-sm font-black text-gray-700 uppercase tracking-wider block">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Contoh: Thoriq Khoir"
                  className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-gray-800 font-medium focus:outline-none transition-all"
                  required
                />
              </div>

              {/* Phone/WA */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs sm:text-sm font-black text-gray-700 uppercase tracking-wider block">
                  Nomor WhatsApp Aktif
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Contoh: 081234567890"
                  className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-gray-800 font-medium focus:outline-none transition-all"
                  required
                />
              </div>

              {/* Program Dropdown */}
              <div className="space-y-2">
                <label htmlFor="program" className="text-xs sm:text-sm font-black text-gray-700 uppercase tracking-wider block">
                  Program Kursus Diminati
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 focus:bg-white rounded-xl px-4 py-3.5 text-sm text-gray-800 font-semibold focus:outline-none transition-all cursor-pointer"
                >
                  {programs.map((prog, idx) => (
                    <option key={idx} value={prog}>
                      {prog}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs sm:text-sm font-black text-gray-700 uppercase tracking-wider block">
                  Pesan Tambahan (Opsional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tulis pertanyaan Anda mengenai program belajar di sini..."
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-gray-800 font-medium focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                  isSubmitted
                    ? "bg-green-500 text-white shadow-green-500/20"
                    : "bg-gradient-to-r from-orange-500 to-yellow-400 text-white hover:scale-[1.02] shadow-orange-500/20 cursor-pointer"
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check className="h-5 w-5 animate-pulse" />
                    <span>Membuka WhatsApp Admin...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4.5 w-4.5" />
                    <span>Daftar via WhatsApp</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
