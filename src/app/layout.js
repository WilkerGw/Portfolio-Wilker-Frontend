// frontend/src/app/layout.js

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import { LoadingProvider } from "./context/LoadingContext"; // 1. Importe o LoadingProvider
import LoadingAnimation from "./components/LoadingAnimation"; // 2. Importe a animação

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wilker Martins | Desenvolvedor Web",
  description: "Portfólio de Wilker Martins, Desenvolvedor Web Full-Stack.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeProvider>
          <LoadingProvider> {/* 3. Envolva com o LoadingProvider */}
            <LoadingAnimation /> {/* 4. Adicione o componente de animação aqui */}
            <Header />
            {children}
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}