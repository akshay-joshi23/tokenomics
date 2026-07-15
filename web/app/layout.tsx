import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LLM Inference Cost Explorer",
  description:
    "Interactive comparison of frontier APIs, open-model services, DePIN GPU leases, and owned LLM infrastructure.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
