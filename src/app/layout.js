import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Wilker Martins - Desenvolvedor Web",
  description: "Soluções Web sob medida para o seu negócio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Header />
      <body>{children}</body>
    </html>
  );
}
