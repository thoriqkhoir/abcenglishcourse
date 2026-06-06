"use client";

import { motion } from "framer-motion";
import { Check, Trophy, Users, Award, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { value: "100%", label: "Siap Kuliah & Slay", icon: <Trophy className="h-6 w-6 text-orange-500" /> },
    { value: "4 Core", label: "Skills Tempur Dibabat", icon: <Award className="h-6 w-6 text-yellow-500" /> },
    { value: "0%", label: "Bengong Saat Maba", icon: <Users className="h-6 w-6 text-orange-500" /> },
    { value: "Cozy", label: "Gathering & Hub Tuban", icon: <ShieldCheck className="h-6 w-6 text-yellow-500" /> },
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-orange-50/50 hover:bg-orange-50 border border-orange-100/50 p-6 sm:p-8 rounded-3xl text-center space-y-4 hover:scale-[1.03] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                  {stat.icon}
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Narrative content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-widest font-black text-orange-500">Kenalin Program Ini</h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                Langkah Kampus Akademi
              </p>
              <p className="text-lg font-black text-orange-500 tracking-wide">
                The Ultimate Preparation for Your College Life!
              </p>
              <div className="h-1 w-20 bg-orange-500 rounded-full" />
            </div>

            <p className="text-base text-gray-600 leading-relaxed">
              Ini bukan tempat les biasa yang cuma bikin bosan. <strong>Langkah Kampus Akademi</strong> adalah program super intensif yang didesain khusus buat anak SMA se-Kabupaten Tuban biar siap mental dan siap skill tempur sebelum resmi jadi mahasiswa.
            </p>

            <p className="text-base text-gray-600 leading-relaxed font-semibold">
              Kenapa harus ikut? Karena kurikulum di sini disesuaikan banget sama apa yang bakal kamu hadepin di dunia kampus nanti. Gak ada tuh cerita materi gak nyambung!
            </p>

            {/* List of commitments */}
            <div className="space-y-3 pt-2">
              <div className="flex gap-3 items-start">
                <div className="bg-orange-100 p-1 rounded-full text-orange-600 mt-1">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-sm font-bold text-gray-700">
                  Didesain khusus untuk Pelajar se-Kabupaten Tuban.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-orange-100 p-1 rounded-full text-orange-600 mt-1">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-sm font-bold text-gray-700">
                  Materi 100% aplikatif untuk tugas kuliah, essay, presentasi, dan diskusi ilmiah.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-orange-100 p-1 rounded-full text-orange-600 mt-1">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-sm font-bold text-gray-700">
                  Belajar intensif & deep talk seru dengan suasana cozy yang positif.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-orange-500/20 hover:scale-105 transition-all duration-200 text-sm"
              >
                Ambil Slot Sekarang
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
