import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Shukur - Full-Stack Developer Portfolio",
  description: "Fresh graduate passionate about creating beautiful web experiences. Skilled in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "Node.js", "Web Development", "Portfolio"],
  authors: [{ name: "Shukur Mahmud" }],
  openGraph: {
    title: "Shukur - Full-Stack Developer Portfolio",
    description: "Fresh graduate passionate about creating beautiful web experiences. Skilled in React, Next.js, Node.js, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} font-display antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}