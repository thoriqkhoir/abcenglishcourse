import "./globals.css";
import { Roboto_Flex } from "next/font/google";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
});

export const metadata = {
  title: "abcenglish | Lembaga Kursus & Bimbel Bahasa Inggris Profesional",
  description: "Bimbel Bahasa Inggris terbaik dengan metode interaktif, tutor tersertifikasi, dan kelas yang menyenangkan untuk semua kalangan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={robotoFlex.variable}>{children}</body>
    </html>
  );
}
