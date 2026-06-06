"use client";

import { motion } from "framer-motion";
import { MessageSquare, CheckSquare, PenTool, Headphones } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
}

export default function WhyChooseUsSection() {
  const benefits: Benefit[] = [
    {
      title: "Speaking (Anti-Gagap)",
      description: "Biar kamu berani cas-cis-cus saat diskusi kelas atau debat sama dosen. Gak ada lagi drama grogi!",
      icon: <MessageSquare className="h-6 w-6 text-orange-500" />,
      colorClass: "from-orange-500 to-orange-600"
    },
    {
      title: "Grammar (Anti-Typo)",
      description: "Penting banget buat bikin essay atau jurnal ilmiah tanpa perlu revisi bolak-balik karena struktur berantakan.",
      icon: <CheckSquare className="h-6 w-6 text-yellow-500" />,
      colorClass: "from-yellow-500 to-amber-500"
    },
    {
      title: "Writing (Level Akademis)",
      description: "Diajarin cara nulis tugas kuliah dengan gaya yang proper dan profesional.",
      icon: <PenTool className="h-6 w-6 text-orange-500" />,
      colorClass: "from-orange-600 to-yellow-500"
    },
    {
      title: "Listening (Anti-Hah-Hoh)",
      description: "Ngelatih telinga kamu biar langsung paham pas dengerin materi kuliah, video jurnal, atau dosen yang ngomongnya secepat rapper.",
      icon: <Headphones className="h-6 w-6 text-yellow-500" />,
      colorClass: "from-yellow-400 to-orange-400"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-amber-50/30 border-y border-amber-100/40 relative overflow-hidden">
      {/* Decorative vector shape */}
      <div className="absolute top-1/2 left-full w-96 h-96 bg-orange-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-black text-orange-500">Materi Super Lengkap</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Kenapa Program Ini "Gak Masuk Akal" Lengkapnya?
          </p>
          <p className="text-sm sm:text-base text-gray-600 font-semibold max-w-2xl mx-auto leading-relaxed pt-2">
            Kita gak setengah-setengah kalau mentorin kamu. Di program intensif menuju masa kuliah ini, kita bakal babat habis 4 core skills yang bakal jadi makanan sehari-hari kamu di kampus:
          </p>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white hover:bg-gradient-to-b hover:from-white hover:to-orange-50/20 border border-gray-100 hover:border-orange-200 p-8 rounded-[2rem] shadow-md shadow-gray-100/40 hover:shadow-xl hover:shadow-orange-100/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Icon Container */}
                <div className="w-14 h-14 bg-orange-50 border border-orange-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-sm">
                  {benefit.icon}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-black text-gray-900 group-hover:text-orange-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Bottom decorative color bar */}
              <div className="w-full h-1.5 bg-gray-100 rounded-full mt-6 overflow-hidden group-hover:h-2 transition-all">
                <div className={`h-full bg-gradient-to-r ${benefit.colorClass} w-0 group-hover:w-full transition-all duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
