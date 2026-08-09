import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Release Desk",
  description: "A product-specific UI finish-gate starter.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
