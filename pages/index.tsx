import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Calculator from "@/component/Calculator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
    <Calculator/>
    </div>
  );
}
