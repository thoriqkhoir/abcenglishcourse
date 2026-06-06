"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Apakah program Langkah Kampus Akademi ini khusus untuk anak pelajar Tuban?",
      answer: "Betul sekali! Program intensif ini dirancang khusus untuk lulusan SMA dan calon mahasiswa baru di seluruh wilayah Kabupaten Tuban agar memiliki kesiapan mental dan kemampuan berbahasa Inggris yang unggul sebelum memasuki dunia perkuliahan."
    },
    {
      question: "Kapan program intensif ini dimulai dan berapa lama durasinya?",
      answer: "Kelas intensif berjalan menjelang masa perkuliahan baru dimulai. Durasinya dirancang secara padat dan intensif agar dalam waktu singkat kamu siap tempur menghadapi materi kuliah, essay, dan presentasi berbahasa Inggris."
    },
    {
      question: "Apakah saya bisa memilih jadwal kelas jika memiliki kesibukan lain?",
      answer: "Tentu bisa! Kami sangat terbuka untuk berkonsultasi. Kamu bisa memilih jadwal yang paling sesuai dengan waktu luangmu agar liburanmu tetap produktif dan langsung bernilai tambah (bervalue)."
    },
    {
      question: "Apakah tempat belajarnya benar-benar nyaman dan mudah dijangkau?",
      answer: "Sangat nyaman! Gathering dan kelas tatap muka kami diselenggarakan di Rumah Bahasa 'ABC English Course' Tuban. Vibe belajarnya didesain cozy, asyik, dan positif untuk berdiskusi santai sambil deep talk."
    },
    {
      question: "Bagaimana cara mendaftar dan berapa kuota yang tersedia?",
      answer: "Kuota kelas sangat terbatas untuk menjaga kualitas bimbingan intensif dan menghindari terjadinya FOMO! Kamu cukup mengisi formulir pendaftaran di bawah ini dan menekan tombol WhatsApp untuk langsung berkonsultasi mengenai slot tersisa dengan admin kami."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-black text-orange-500">Tanya Jawab</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Frequently Asked Questions
          </p>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen ? "border-orange-400 bg-orange-50/10 shadow-md" : "border-gray-100 bg-white hover:border-orange-200"
                }`}
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-4 items-center">
                    <HelpCircle className={`h-5 w-5 shrink-0 ${isOpen ? "text-orange-500" : "text-gray-400"}`} />
                    <span className="font-extrabold text-gray-800 text-sm sm:text-base pr-4 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-185 text-orange-500" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-gray-600 leading-relaxed pl-15 border-t border-gray-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
