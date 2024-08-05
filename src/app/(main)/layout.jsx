"use client";
import Navbar from "./navbar/Navbar";
import Footer from "../components/ui/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <header className="flex text-center bg-gray-900 space-x-8 py-4 ">
        <Navbar />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
