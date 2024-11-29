import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})


export const metadata: Metadata = {
  title: "CloudNest",
  description: "Welcome to CloudNest, the ultimate solution for managing, storing, and sharing your digital files with ease and security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-popins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
