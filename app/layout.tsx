import type { Metadata } from "next";
import "./globals.css";
import "./typography.css";
import "./scrollbars.css";
import "./showcase.css";
import "./project-tilt.css";
import "./project-cards.css";
export const metadata: Metadata = {
  title: "Lalit Wagh — Developer & Builder",
  description:
    "Full-stack products, real-time experiences, and AI-powered tools. Explore the work of Lalit Wagh.",
  openGraph: {
    title: "Lalit Wagh — Developer & Builder",
    description: "Products with purpose. Systems with depth.",
    type: "website",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
