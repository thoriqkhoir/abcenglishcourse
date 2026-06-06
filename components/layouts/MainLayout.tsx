"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, GraduationCap, Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Jadwal Kelas", href: "#programs" },
    { label: "Metode", href: "#method" },
    { label: "Tutor", href: "#tutors" },
    { label: "Galeri", href: "#gallery" },
    { label: "Testimoni", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Hubungi Kami", href: "#contact" },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset

      for (const item of navItems) {
        const targetId = item.href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(targetId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <img
                src="/assets/images/Logo.png"
                alt="ABC English Course Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col text-left leading-none">
                <span className="text-lg font-black tracking-tight text-gray-900">
                  abc<span className="text-orange-500">english</span>
                </span>
                <span className="text-[8px] font-bold uppercase tracking-wider text-gray-400 mt-0.5 block sm:hidden">
                  program intensif persiapan kuliah
                </span>
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 mt-0.5 hidden sm:block">
                  course
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const targetId = item.href.substring(1);
                const isActive = activeSection === targetId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-orange-500 bg-orange-50/80"
                        : "text-gray-600 hover:text-orange-500 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold px-6 py-2.5 rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-105 transition-all duration-200 text-sm"
              >
                Daftar Sekarang
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-b border-gray-100 bg-white shadow-inner max-h-[80vh] overflow-y-auto">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => {
                const targetId = item.href.substring(1);
                const isActive = activeSection === targetId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? "text-orange-500 bg-orange-50"
                        : "text-gray-600 hover:text-orange-500 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-4 px-4">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold py-3 rounded-xl shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition-transform duration-200"
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2  p-2 rounded-xl backdrop-blur-sm">
                <img
                  src="/assets/images/Logo.png"
                  alt="ABC English Course Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Langkah Kampus Akademi adalah program super intensif dari Rumah Bahasa "ABC English Course" Tuban untuk menyiapkan skill bahasa Inggris & mental bertempur calon mahasiswa baru.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-gray-800 hover:bg-orange-500 hover:text-white rounded-lg transition-colors" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://instagram.com/abc_english_course_" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 hover:bg-orange-500 hover:text-white rounded-lg transition-colors" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 bg-gray-800 hover:bg-orange-500 hover:text-white rounded-lg transition-colors" aria-label="Youtube">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-base mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-orange-500">
                Menu Navigasi
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#hero" className="hover:text-orange-400 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-orange-400 transition-colors">Tentang Program</a>
                </li>
                <li>
                  <a href="#why-choose-us" className="hover:text-orange-400 transition-colors">4 Core Skills</a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-orange-400 transition-colors">Pilihan Jadwal</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-orange-400 transition-colors">Hubungi Kami</a>
                </li>
              </ul>
            </div>

            {/* Program Links */}
            <div>
              <h3 className="text-white font-bold text-base mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-orange-500">
                4 Core Skills Kampus
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#why-choose-us" className="hover:text-orange-400 transition-colors">Speaking (Anti-Gagap)</a>
                </li>
                <li>
                  <a href="#why-choose-us" className="hover:text-orange-400 transition-colors">Grammar (Anti-Typo)</a>
                </li>
                <li>
                  <a href="#why-choose-us" className="hover:text-orange-400 transition-colors">Writing (Akademis)</a>
                </li>
                <li>
                  <a href="#why-choose-us" className="hover:text-orange-400 transition-colors">Listening (Anti-Hah-Hoh)</a>
                </li>
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-white font-bold text-base mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-orange-500">
                Hubungi Kami
              </h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex gap-3 items-start">
                  <MapPin className="h-5 w-5 text-orange-500 shrink-0" />
                  <span>Rumah Bahasa "ABC English Course" Tuban, Kabupaten Tuban, Jawa Timur</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone className="h-5 w-5 text-orange-500 shrink-0" />
                  <span>+62 821-4002-1937</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail className="h-5 w-5 text-orange-500 shrink-0" />
                  <span>[EMAIL_ADDRESS]</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Instagram className="h-5 w-5 text-orange-500 shrink-0" />
                  <span>@abc_english_course_</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Clock className="h-5 w-5 text-orange-500 shrink-0" />
                  <span>Senin - Sabtu: 10.00 - 20.00 WIB</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} abcenglish. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-400 transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=6282140021937&text=halo%20boleh%20diinfo%20ya%20perihal%20progam%20LANGKAH%20KAMPUS%20ACADEMY"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-black p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
        aria-label="Chat WhatsApp"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap text-base font-bold">
          Chat Admin via WA
        </span>
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
          <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.456 3.474 1.326 4.988l-1.408 5.148 5.268-1.38c1.464.798 3.108 1.224 4.806 1.224 5.508 0 9.99-4.482 9.99-9.988 0-5.508-4.482-9.988-9.99-9.988zm6.54 14.376c-.27.756-1.356 1.38-1.896 1.458-.492.072-.972.102-3.144-.756-2.772-1.092-4.542-3.924-4.686-4.116-.138-.192-1.146-1.524-1.146-2.91 0-1.386.726-2.064 1.002-2.346.222-.228.594-.342.948-.342.114 0 .222.006.318.012.276.012.462.03.66.45.246.522.846 2.064.918 2.214.072.15.12.324.018.528-.096.204-.156.324-.312.504-.156.18-.33.402-.474.54-.156.156-.324.324-.138.648.186.312.828 1.362 1.776 2.208.948.846 1.746 1.11 2.076 1.248.33.138.522.114.72-.114.198-.228.846-.984 1.074-1.32.228-.336.456-.276.768-.162.312.114 1.98.93 2.322 1.104.342.174.57.258.654.402.084.144.084.828-.186 1.584z"/>
        </svg>
      </a>
    </div>
  );
}
