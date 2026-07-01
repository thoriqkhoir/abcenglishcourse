"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon, Search } from "lucide-react";

export default function GallerySection() {
  const images = [
    { src: "/assets/images/galery1.jpg", alt: "Aktivitas Belajar 1", span: "col-span-1 row-span-1 md:col-span-2 md:row-span-2" },
    { src: "/assets/images/galery2.jpg", alt: "Aktivitas Belajar 2", span: "col-span-1 row-span-1" },
    { src: "/assets/images/galery3.jpg", alt: "Aktivitas Belajar 3", span: "col-span-1 row-span-1" },
    { src: "/assets/images/galery4.jpg", alt: "Aktivitas Belajar 4", span: "col-span-1 row-span-1" },
    { src: "/assets/images/galery5.jpg", alt: "Aktivitas Belajar 5", span: "col-span-1 row-span-1 md:row-span-2" },
    { src: "/assets/images/galery6.jpg", alt: "Aktivitas Belajar 6", span: "col-span-1 row-span-1" },
    { src: "/assets/images/galery7.jpg", alt: "Aktivitas Belajar 7", span: "col-span-1 row-span-1" },
    { src: "/assets/images/galery8.jpg", alt: "Aktivitas Belajar 8", span: "col-span-1 row-span-1" },
    { src: "/assets/images/galery9.jpg", alt: "Aktivitas Belajar 9", span: "col-span-1 row-span-1 md:col-span-3" }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 border-y border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-black text-orange-500 flex items-center justify-center gap-2">
            <ImageIcon className="w-4 h-4 text-orange-500 animate-pulse" />
            <span>Dokumentasi Kegiatan</span>
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Keseruan Belajar & Gathering Pelajar Tuban
          </p>
          <p className="text-sm sm:text-base text-gray-500 font-semibold max-w-2xl mx-auto leading-relaxed pt-2">
            Intip asyiknya kebersamaan, suasana kelas cozy, dan keseruan aktivitas teman-teman di Langkah Kampus Akademi Rumah Bahasa Tuban.
          </p>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] sm:auto-rows-[280px]"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative group overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-md hover:shadow-xl hover:border-orange-300 transition-all duration-300 ${img.span}`}
            >
              {/* Image Element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Langkah Kampus</span>
                    <h3 className="text-white font-black text-base mt-1 leading-snug">{img.alt}</h3>
                  </div>
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Search className="w-4.5 h-4.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
