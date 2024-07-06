'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <div className="w-full h-[100vh]  flex justify-center items-center">
          {children}
          </div>
        </AuthContextProvider>
      </body>
    </html>
  );
}
