import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sendola ATM",
  description: "Check your balance and withdraw money from your ATM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.className} bg-slate-50`}
      >
          <div className="max-w-5xl mx-auto sm:mt-3">
            {children}
          </div>
      </body>
    </html>
  );
}
