import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Undergrad Tech Conferences",
  description:
    "Tech conferences undergrads can actually attend - free, scholarship-funded, or student-priced.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
