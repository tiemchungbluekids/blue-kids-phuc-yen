// import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import '@/styles/blue-kids-theme.css'; // Import file CSS mới tạo
import Header from "@/components/Header";
import MyFooter from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin', 'vietnamese'], // Đảm bảo hỗ trợ tiếng Việt
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${roboto.className} bg-gray-100 dark:bg-gray-800`}>
        <Header />
        {children}
        <MyFooter />
        <GoogleAnalytics />
        </body>
    </html>
  );
}