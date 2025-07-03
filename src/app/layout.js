// frontend/src/app/layout.js

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext"; // 1. Importe o provedor

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wilker Martins | Desenvolvedor Web",
  description: "Portfólio de Wilker Martins, Desenvolvedor Web Full-Stack.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeProvider> {/* 2. Envolva o conteúdo com o provedor */}
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}