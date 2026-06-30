import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "How I'd Become Customer Zero for The Hog API",
  description:
    "A 30 day plan for turning The Hog's own GTM motion into the best case study for its API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
