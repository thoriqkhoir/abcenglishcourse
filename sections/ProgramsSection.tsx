"use client";

import { motion } from "framer-motion";
import { Check, Flame } from "lucide-react";

interface Program {
  title: string;
  age: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export default function ProgramsSection() {
  const programs: Program[] = [
    {
      title: "Kelas Pagi (Early Bird Slay)",
      age: "Pilihan Ter-Fresh • 09:00 - 10:30 WIB",
      price: "Best Deal",
      period: "War Slot",
      features: [
        "Mulai belajar saat energi masih 100%",
        "Diskusi intensif tanpa rasa ngantuk",
        "Sesi Deep Talk seputar dunia kampus",
        "Maksimal 10 calon maba per kelas",
        "Suasana belajar santai & menyenangkan"
      ],
      ctaText: "Ambil Slot Pagi"
    },
    {
      title: "Kelas Siang (Afternoon Warrior)",
      age: "Pilihan Ter-Aktif • 13:30 - 15:00 WIB",
      price: "Best Deal",
      period: "War Slot",
      features: [
        "Mengisi waktu luang biar gak gabut",
        "Metode belajar interaktif anti-bosan",
        "Simulasi debat & presentasi maba",
        "Maksimal 10 calon maba per kelas",
        "Membangun relasi antar maba Tuban"
      ],
      isPopular: true,
      ctaText: "Ambil Slot Siang"
    },
    {
      title: "Kelas Malam (Night Owl Prep)",
      age: "Pilihan Ter-Cozy • 18:30 - 20:00 WIB",
      price: "Best Deal",
      period: "War Slot",
      features: [
        "Vibe belajar super hangat & rileks",
        "Cocok buat yang ada kesibukan siang",
        "Deep talk & sharing session seru",
        "Maksimal 10 calon maba per kelas",
        "Free coffee, tea & snack"
      ],
      ctaText: "Ambil Slot Malam"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-black text-orange-500">Pilihan Waktu War</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Pilih Jadwal Kelas Sesuai Waktu Luangmu
          </p>
          <p className="text-sm sm:text-base text-gray-600 font-semibold max-w-2xl mx-auto leading-relaxed pt-2">
            Kelas intensif ini berjalan menjelang masa perkuliahan dimulai. Pilih waktu terbaikmu biar waktu libur panjang gak gabut tapi langsung bervalue!
          </p>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl border flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                program.isPopular
                  ? "border-orange-500 shadow-xl shadow-orange-500/10 lg:-translate-y-4 scale-[1.02] md:scale-100 lg:scale-[1.02]"
                  : "border-gray-100 shadow-lg shadow-gray-100/50 hover:border-orange-300 hover:shadow-xl"
              }`}
            >
              {/* Popular Tag */}
              {program.isPopular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-500 to-yellow-400 text-white text-[10px] font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-current animate-bounce" />
                  <span>Terpopuler</span>
                </div>
              )}

              {/* Top Details */}
              <div className="p-8 space-y-6">
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {program.age}
                  </span>
                  <h3 className="text-xl font-black text-gray-900 mt-1">
                    {program.title}
                  </h3>
                </div>

                {/* Price tag */}
                <div className="py-4 border-y border-gray-50 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-gray-900 tracking-tight">
                    {program.price}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">
                    / {program.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-sm text-gray-600 font-medium leading-tight">
                      <div className="bg-orange-100 rounded-full p-0.5 mt-0.5 text-orange-600 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA button at the bottom */}
              <div className="p-8 pt-0 mt-auto">
                <a
                  href="#contact"
                  className={`block w-full text-center font-bold py-3.5 rounded-2xl transition-all duration-200 text-sm ${
                    program.isPopular
                      ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-md shadow-orange-500/20 hover:scale-105"
                      : "bg-orange-50 hover:bg-orange-100 text-orange-600 hover:scale-105"
                  }`}
                >
                  {program.ctaText}
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
