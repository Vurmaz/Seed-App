import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({ subsets: ["latin"], weight:'400' });

export const metadata = {
  title: "Apricoot",
  description: "Apricot Seeds Selling Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={lora.className}>{children}</body>
    </html>
  );
}
