"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  program: string;
  quote: string;
  rating: number;
  avatarBg: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Nadia Kirana",
      role: "Mahasiswa Kedokteran Unair",
      program: "IELTS Prep Student",
      quote: "Skor IELTS saya naik drastis dari 5.5 ke 7.5 dalam waktu 3 bulan saja! Metode belajar strategi menjawab soal cepat dari Mr. Liam sangat akurat, dan kelas writing feedback-nya sangat mendalam.",
      rating: 5,
      avatarBg: "bg-orange-500"
    },
    {
      name: "Captain Subuh",
      role: "Kepala Pelabuhan KSOP",
      program: "Business English Student",
      quote: "Dulu saya selalu gugup saat presentasi bahasa Inggris di depan klien asing. Berkat modul negoisasi dan speaking drills di abcenglish, sekarang saya sangat percaya diri memimpin rapat regional perusahaan.",
      rating: 5,
      avatarBg: "bg-yellow-500"
    },
    {
      name: "Firman",
      role: "Universitas Diponegoro",
      program: "General English Student",
      quote: "Belajar di abcenglish seru banget! Tutornya asyik, ga kaku, dan metodenya interaktif. English club tambahannya gratis dan bikin saya makin pede ngomong tanpa takut salah grammar lagi. Nilai rapor saya naik!",
      rating: 5,
      avatarBg: "bg-orange-600"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-amber-50/20 border-y border-amber-100/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-black text-orange-500">Testimoni Alumni</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Kisah Sukses Siswa abcenglish
          </p>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white border border-gray-100 hover:border-orange-200 rounded-[2rem] p-8 shadow-md shadow-gray-100/40 hover:shadow-xl hover:shadow-orange-100/10 transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-orange-100">
                <Quote className="h-12 w-12 fill-current" />
              </div>

              {/* Stars Rating */}
              <div className="flex gap-1 mb-6 text-yellow-400">
                {Array.from({ length: testi.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed italic mb-8 relative z-10">
                "{testi.quote}"
              </p>

              {/* User Bio */}
              <div className="flex gap-4 items-center pt-6 border-t border-gray-50 mt-auto">
                <div className={`w-12 h-12 rounded-full ${testi.avatarBg} text-white flex items-center justify-center font-bold text-base shadow-inner`}>
                  {testi.name[0]}
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-sm">{testi.name}</h4>
                  <p className="text-xs text-gray-400 font-semibold">{testi.role}</p>
                  <span className="inline-block bg-orange-50 text-orange-600 text-[9px] font-black px-2 py-0.5 rounded-full mt-1.5 border border-orange-100 uppercase tracking-wide">
                    {testi.program}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
