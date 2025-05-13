import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Modern CPA | Professional Tax & Financial Services",
  description: "Expert tax planning, business advisory, and financial services for individuals and businesses.",
  keywords: "CPA, tax planning, financial services, business advisory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
