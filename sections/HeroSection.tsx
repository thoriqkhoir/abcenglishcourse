"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center pt-10 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-white"
    >
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl -translate-x-1/2 -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl translate-x-1/3 -z-10" />
      
      {/* Visual top bar badge or light grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Text Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-bold text-xs sm:text-sm shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-yellow-500 animate-pulse" />
            <span>Wassup Teman-Teman Tuban! 👑</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight"
          >
            Kuliah Tinggal beberapa saat lagi, Tapi Bahasa Inggris Masih Level "Yes-No-Yes-No" Doang? 😭
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
          >
            ⁠Jangan sampai pas dosen nyuruh presentasi pake Bahasa Inggris, kamu malah pura-pura batuk! Masuk kampus impian itu keren, tapi punya skill Bahasa Inggris yang slay pas kuliah itu jauh lebih penting. Spill dikit nih: Kita punya cara rahasia biar kamu gak bengong pas jadi maba. Scroll sampai bawah kalau berani! 👇
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <a
              href="#programs"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/45 hover:scale-105 transition-all duration-200 text-base"
            >
              <span>Pilih Program Kelas</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-white border-2 border-gray-200 hover:border-orange-400 text-gray-700 hover:text-orange-500 font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-200 text-base"
            >
              Konsultasi Gratis
            </a>
          </motion.div>

          {/* Core Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-100"
          >
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0" />
              <span>100% Tutor Tersertifikasi</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0" />
              <span>Metode Aktif Berbicara</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0" />
              <span>Jadwal Kelas Fleksibel</span>
            </div>
          </motion.div>
        </div>

        {/* Right Graphic/Mockup Container */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-orange-400 to-yellow-300 rounded-[2.5rem] p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300"
          >
            <div className="w-full h-full bg-white rounded-[2.4rem] p-6 flex flex-col justify-between overflow-hidden relative">
              {/* Abstract decorations inside mockup card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-100 rounded-full blur-xl -z-10" />
              
              {/* Header row */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <div className="text-xs font-bold text-gray-400">Class Progress</div>
              </div>

              {/* Central class status card */}
              <div className="my-auto space-y-6 pt-4">
                <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">
                    LK
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Langkah Kampus Akademi</h3>
                    <p className="text-xs text-orange-600 font-semibold">College Prep • Today 15:00</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-gray-600">
                    <span>College Prep Readiness</span>
                    <span className="text-orange-500">92%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full w-[92%]" />
                  </div>
                </div>

                {/* Tutor card mockup */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-yellow-400 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                    MR
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xs text-gray-800">Mrs. Wanda</h4>
                    <p className="text-[10px] text-gray-500">Native Speaker, Oxford Alumni</p>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-yellow-600 font-bold text-xs">
                    <Star className="w-3 h-3 fill-current" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>

              {/* Bottom tag line */}
              <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400">
                <span>Next: Academic Writing Drill</span>
                <span className="text-orange-500 font-bold hover:underline cursor-pointer">Join Room</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
