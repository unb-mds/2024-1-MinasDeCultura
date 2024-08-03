import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";


const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minas de Cultura",
  description: "Web-site sobre gasto com cultura no estado de Minas Gerais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmsans.className}>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
