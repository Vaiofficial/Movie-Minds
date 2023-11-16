import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Providers from "./Providers";
import Navbar from "@/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Dekho",
  description: "This is Movie Dekho Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* header */}
          <Header />

          {/* navbar */}
          <Navbar/>

          {/* searchBox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
