"use client";

import { motion } from "framer-motion";
import { BookOpenCheck, CalendarDays, Speech, BarChart3, GraduationCap } from "lucide-react";

interface Step {
  num: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function MethodSection() {
  const steps: Step[] = [
    {
      num: "01",
      title: "Placement Test",
      description: "Uji kemampuan awal Anda secara tertulis dan lisan (interview singkat) secara gratis bersama konsultan kami.",
      icon: <BookOpenCheck className="h-6 w-6 text-orange-500" />
    },
    {
      num: "02",
      title: "Konsultasi & Jadwal",
      description: "Diskusikan hasil tes, tetapkan target belajar pribadi Anda, lalu pilih program kelas serta jadwal yang sesuai.",
      icon: <CalendarDays className="h-6 w-6 text-yellow-500" />
    },
    {
      num: "03",
      title: "Kelas Interaktif",
      description: "Masuk kelas! Belajar aktif dengan tutor profesional menggunakan kurikulum interaktif yang menyenangkan.",
      icon: <Speech className="h-6 w-6 text-orange-500" />
    },
    {
      num: "04",
      title: "Evaluasi Berkala",
      description: "Kuis mingguan serta tes simulasi bulanan untuk memantau peningkatan skor serta kepercayaan diri Anda.",
      icon: <BarChart3 className="h-6 w-6 text-yellow-500" />
    },
    {
      num: "05",
      title: "Sertifikasi Resmi",
      description: "Lulus ujian akhir level dan dapatkan sertifikat pencapaian resmi abcenglish untuk karir atau pendidikan.",
      icon: <GraduationCap className="h-6 w-6 text-orange-500" />
    }
  ];

  return (
    <section id="method" className="py-20 bg-gray-50 border-y border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-black text-orange-500">Metode Belajar</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Proses Belajar Terukur & Menyenangkan
          </p>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-orange-400 to-yellow-300 -z-10" />

          {/* Grid of Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center space-y-4 group relative"
              >
                {/* Step Circle & Icon */}
                <div className="relative z-10 w-24 h-24 bg-white border-4 border-gray-100 group-hover:border-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                  <div className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-xs font-black w-7 h-7 rounded-full flex items-center justify-center shadow-sm">
                    {step.num}
                  </div>
                  {step.icon}
                </div>

                {/* Step Card Text */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 group-hover:border-orange-200 group-hover:shadow-md transition-all duration-300 w-full flex-grow flex flex-col justify-start">
                  <h3 className="font-black text-gray-900 text-xl mb-2 group-hover:text-orange-500 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
