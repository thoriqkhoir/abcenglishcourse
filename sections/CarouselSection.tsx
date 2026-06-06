"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Laptop, Users, Calendar } from "lucide-react";

interface SlideData {
  id: number;
  title: string;
  category: string;
  description: string;
  badgeText: string;
  icon: React.ReactNode;
  bgGradient: string;
  details: string[];
}

export default function CarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slides: SlideData[] = [
    {
      id: 1,
      category: "Cozy Hub Tuban",
      title: "Rumah Bahasa 'ABC English Course' Tuban",
      description: "Tempat gathering paling cozy di area Tuban. Tempatnya asyik, vibenya positif, dan cocok banget buat deep talk sambil belajar.",
      badgeText: "Gathering Hub",
      icon: <BookOpen className="h-6 w-6 text-white" />,
      bgGradient: "from-orange-500 to-orange-600",
      details: ["Tempat kumpul pelajar se-Tuban", "Suasana santai & AC dingin", "Vibe super positif & cozy"]
    },
    {
      id: 2,
      category: "Fasilitas Belajar",
      title: "Teknologi Smart TV & Digital Library",
      description: "Dilengkapi ruang kelas ber-AC dengan teknologi Smart TV interaktif untuk menunjang aktivitas belajar yang dinamis, visual, dan anti-boran.",
      badgeText: "Modern Facilities",
      icon: <Laptop className="h-6 w-6 text-white" />,
      bgGradient: "from-amber-500 to-yellow-500",
      details: ["Akses modul digital & E-Library", "Smart TV untuk visual interaktif", "Maksimal 10 siswa per kelas"]
    },
    {
      id: 3,
      category: "Aktivitas Tambahan",
      title: "Weekly English Gathering & Debating Club",
      description: "Belajar dikemas asyik dengan program gathering mingguan, simulasi diskusi kelas, debat interaktif, dan sharing session seru seputar perkuliahan.",
      badgeText: "Fun Activities",
      icon: <Users className="h-6 w-6 text-white" />,
      bgGradient: "from-orange-600 to-yellow-500",
      details: ["Simulasi kelas & debat kuliah", "Deep talk seputar dunia kampus", "Networking dengan sesama pelajar"]
    }
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentSlide((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      6000 // Change slide every 6 seconds
    );

    return () => {
      resetTimeout();
    };
  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="highlights" className="py-20 bg-gray-50 border-y border-gray-100 relative">
      {/* Abstract decorative accent */}
      <div className="absolute top-0 right-10 w-40 h-40 bg-orange-100/50 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-black text-orange-500">Cozy Hub & Vibe</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Vibe Cozy Belajar di Rumah Bahasa Tuban
          </p>
          <p className="text-sm sm:text-base text-gray-600 font-semibold max-w-2xl mx-auto leading-relaxed pt-2">
            Gak usah bingung nyari lokasinya, kita bakal gathering dan belajar intensif di tempat paling cozy di area Tuban. Vibenya positif, asyik, dan cocok banget buat deep talk!
          </p>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[450px]">
            
            {/* Slide Image/Gradient Graphic Column */}
            <div className={`lg:col-span-5 bg-gradient-to-br ${slides[currentSlide].bgGradient} p-8 sm:p-12 flex flex-col justify-between text-white relative overflow-hidden transition-all duration-500`}>
              {/* Sparkle background elements */}
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300/20 rounded-full blur-xl" />
              
              {/* Badge */}
              <div className="flex justify-between items-start z-10">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                  {slides[currentSlide].badgeText}
                </span>
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl">
                  {slides[currentSlide].icon}
                </div>
              </div>

              {/* Central Graphic (Logo / Illustration) */}
              <div className="my-8 z-10 flex flex-col items-center justify-center py-6">
                <div className="w-24 h-24 rounded-full border-4 border-white/20 bg-white/10 flex items-center justify-center mb-4">
                  <span className="font-extrabold text-3xl">abc</span>
                </div>
                <p className="text-sm font-semibold opacity-90 text-center uppercase tracking-wide">
                  {slides[currentSlide].category}
                </p>
              </div>

              {/* Slide Counter */}
              <div className="flex justify-between items-center z-10 pt-4 border-t border-white/10 text-sm font-bold opacity-80">
                <span>abcenglish Academy</span>
                <span>0{slides[currentSlide].id} / 0{slides.length}</span>
              </div>
            </div>

            {/* Slide Information Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between bg-white transition-opacity duration-300">
              <div className="space-y-6">
                <div className="text-xs uppercase font-extrabold tracking-wider text-orange-500">
                  {slides[currentSlide].category}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {slides[currentSlide].description}
                </p>

                {/* Key specs list */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Keunggulan Utama:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {slides[currentSlide].details.map((detail, index) => (
                      <li key={index} className="flex gap-2 items-center text-sm text-gray-600 font-medium">
                        <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex justify-between items-center pt-8 border-t border-gray-100 mt-8">
                {/* Dot Indicators */}
                <div className="flex gap-2.5">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentSlide === index ? "w-8 bg-orange-500" : "w-2.5 bg-gray-200"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    className="p-3 border border-gray-200 hover:border-orange-500 rounded-full hover:bg-orange-50 hover:text-orange-500 text-gray-600 transition-all duration-200"
                    aria-label="Previous Slide"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 border border-gray-200 hover:border-orange-500 rounded-full hover:bg-orange-50 hover:text-orange-500 text-gray-600 transition-all duration-200"
                    aria-label="Next Slide"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
