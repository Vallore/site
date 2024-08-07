import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vallore Joias e Semijoias de Luxo",
  description: "Created by Rixxer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <meta className ="theme-color" content="#FDE047"/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
