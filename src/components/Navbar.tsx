"use client";
import Link from "next/link";
import { useLanguage } from "@/context/languagecontext";

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="bg-white shadow-md p-5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-blue-600">
          FoodBridge
        </Link>

        <div className="space-x-6 hidden md:flex text-blue-600 items-center">
          <Link href="/">{t.navbar.home}</Link>
          <Link href="/about">{t.navbar.about}</Link>
          <Link href="/contact">{t.navbar.contact}</Link>
          <Link href="/login">{t.navbar.login}</Link>
          <Link href="/register">{t.navbar.register}</Link>

          <button onClick={toggleLanguage} className="text-sm border px-3 py-1 rounded-md">
             {language === "en" ? "தமிழ்" : "English"}
          </button>
        </div>
      </div>
    </nav>
  );
}
