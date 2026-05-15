import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Accessories But Cheaper",
  description: "Get all your accessories better and cheaper!",
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
