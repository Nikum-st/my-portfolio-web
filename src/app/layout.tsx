import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nikita Umanskii",
  description: "Portfolio",
  keywords: [
    "Nikita Umanskii",
    "Nikita Umanskiy",
    "Никита Уманский",
    "Nikita Umanskii - developer",
    "Никита Уманский - разработчик",
    "Никита Уманский - айтишник",
    "Portfolio",
    "Frontend Developer",
    "Portfopio-React",
    "Next.js",
  ],
  icons: { icon: "/logo.svg" },
  authors: [
    { name: "Nikita Umanskii", url: "https://nikitaumanskii.vercel.app" },
  ],
  openGraph: {
    title: "Nikita Umanskii",
    description: "Portfolio",
    url: "https://nikitaumanskii.vercel.app",
    siteName: "Nikita Umanskii",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
