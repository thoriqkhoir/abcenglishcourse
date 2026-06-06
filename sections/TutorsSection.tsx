"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Globe, CheckCircle2 } from "lucide-react";

interface Tutor {
  name: string;
  role: string;
  initials: string;
  specialty: string;
  experience: string;
  education: string;
  badges: string[];
  gradientClass: string;
}

export default function TutorsSection() {
  const tutors: Tutor[] = [
    {
      name: "Mrs. Wanda",
      role: "Academic & Speaking Tutor",
      initials: "MW",
      specialty: "Academic & Speaking Tutor",
      experience: "8 Tahun Mengajar",
      education: "Universitas Negeri Serabaya",
      badges: ["Oxford Grad", "CELTA Certified", "Native Speaker"],
      gradientClass: "from-orange-500 to-orange-600"
    },
    {
      name: "Mrs. Silfa",
      role: "IELTS Expert Tutor",
      initials: "MS",
      specialty: "IELTS Preparation (Skor IELTS 8.5)",
      experience: "6 Tahun Mengajar",
      education: "Master of English Education (UI)",
      badges: ["IELTS 8.5 Master", "TEFL Certified", "IELTS Specialist"],
      gradientClass: "from-yellow-400 to-amber-500"
    },
    {
      name: "Mrs. Febbi",
      role: "Academic & Business Tutor",
      initials: "MF",
      specialty: "Business English & TOEFL Preparation",
      experience: "10 Tahun Mengajar",
      education: "University of Queensland (TESOL)",
      badges: ["TESOL Master", "Business Trainer", "TOEFL Specialist"],
      gradientClass: "from-orange-600 to-yellow-500"
    }
  ];

  return (
    <section id="tutors" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-black text-orange-500">Tutor Profesional</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Diajar Langsung oleh Ahlinya
          </p>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutors.map((tutor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white border border-gray-100 hover:border-orange-200 rounded-[2.5rem] p-8 shadow-lg shadow-gray-100/40 hover:shadow-xl hover:shadow-orange-100/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Tutor Profile Header with Initials avatar */}
                <div className="flex gap-4 items-center">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-tr ${tutor.gradientClass} text-white flex items-center justify-center font-black text-2xl shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0`}>
                    {tutor.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900 group-hover:text-orange-500 transition-colors">
                      {tutor.name}
                    </h3>
                    <p className="text-xs font-bold text-orange-500">
                      {tutor.role}
                    </p>
                  </div>
                </div>

                {/* Details list */}
                <div className="space-y-3 pt-2">
                  <div className="flex gap-3 items-center text-sm text-gray-600 font-medium">
                    <Globe className="h-4.5 w-4.5 text-orange-400 shrink-0" />
                    <span>{tutor.specialty}</span>
                  </div>
                  <div className="flex gap-3 items-center text-sm text-gray-600 font-medium">
                    <CheckCircle2 className="h-4.5 w-4.5 text-orange-400 shrink-0" />
                    <span>{tutor.experience}</span>
                  </div>
                  <div className="flex gap-3 items-center text-sm text-gray-600 font-medium">
                    <GraduationCap className="h-4.5 w-4.5 text-orange-400 shrink-0" />
                    <span>{tutor.education}</span>
                  </div>
                </div>
              </div>

              {/* Tags/Badges */}
              <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-gray-50">
                {tutor.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="bg-orange-50 text-orange-600 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wide border border-orange-100"
                  >
                    {badge}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
