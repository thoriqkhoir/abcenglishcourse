import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/sections/HeroSection";
import CarouselSection from "@/sections/CarouselSection";
import AboutSection from "@/sections/AboutSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import ProgramsSection from "@/sections/ProgramsSection";
import MethodSection from "@/sections/MethodSection";
import TutorsSection from "@/sections/TutorsSection";
import GallerySection from "@/sections/GallerySection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import FaqSection from "@/sections/FaqSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <MainLayout>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Highlights Carousel Section */}
      <CarouselSection />

      {/* 3. About Us Section */}
      <AboutSection />

      {/* 4. Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* 5. Programs Section */}
      <ProgramsSection />

      {/* 6. Learning Method Section */}
      <MethodSection />

      {/* 7. Tutors Section */}
      <TutorsSection />

      {/* 8. Gallery Grid Section */}
      <GallerySection />

      {/* 9. Testimonials Section */}
      <TestimonialsSection />

      {/* 9. FAQ Section */}
      <FaqSection />

      {/* 10. Contact Us Section */}
      <ContactSection />
    </MainLayout>
  );
}
