import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Hybrid - Escola de Música",
  description: "Na Hybrid, você encontra aulas personalizadas Presencial ou Online de violão e teclado, ministradas pelo Professor Pablo Rafael. Multi-instrumentista, vocalista e guitarrista. Pablo iniciou sua trajetória musical aos 6 anos. Com influências que vão do Rock ao Blues, suas referências incluem bandas como AudioSlave, Linkin Park, P.O.D e Oficina G3. Apaixonado pela música, ele transforma seu conhecimento em ensino de qualidade.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={poppins.className}>
      <body className="font-poppins">{children}</body>
    </html>
  );
}