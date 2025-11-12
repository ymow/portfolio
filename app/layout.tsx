import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouRuei Wu - Senior Product Manager",
  description: "10+ years driving product innovation and AI-powered solutions across enterprise and consumer platforms. Senior PM with expertise in data-driven decision making, AI/ML product development, and e-commerce optimization.",
  keywords: ["Product Manager", "AI", "Machine Learning", "E-commerce", "Data Analytics", "Taiwan", "TSMC", "Product Strategy"],
  authors: [{ name: "YouRuei Wu" }],
  openGraph: {
    title: "YouRuei Wu - Senior Product Manager",
    description: "10+ years driving product innovation and AI-powered solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
