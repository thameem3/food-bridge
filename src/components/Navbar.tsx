"use client";
import Link from "next/link";
import { useLanguage } from "@/context/languagecontext";
import { useState } from "react";
import { Languages } from "next/dist/lib/metadata/types/alternative-urls-types";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "ta", label: "தமிழ்" },
    { code: "fr", label: "Français" },
    { code: "hi", label: "हिन्दी" },
  ];

  const translations = languages.map((lang) => (lang))

  return (
    <nav className="bg-white shadow-md p-5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-blue-600">
          FoodBridge
        </Link>


        <div className="space-x-6 hidden md:flex items-center text-blue-600">
          <Link href="/">{t.navbar.home}</Link>
          <Link href="/about">{t.navbar.about}</Link>
          <Link href="/#contact">{t.navbar.contact}</Link>
          <Link href="/login">{t.navbar.login}</Link>
          <Link href="/register">{t.navbar.register}</Link>

        
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as any)}
            className="border px-2 py-1 rounded text-sm">
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as any)}
            className="border px-2 py-1 rounded text-sm ">
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl font-bold text-blue-600">
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-3 px-4 space-y-3 text-blue-600">
          <Link href="/" onClick={() => setMenuOpen(false)}>{t.navbar.home}</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>{t.navbar.about}</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>{t.navbar.contact}</Link>
          <Link href="/login" onClick={() => setMenuOpen(false)}>{t.navbar.login}</Link>
          <Link href="/register" onClick={() => setMenuOpen(false)}>{t.navbar.register}</Link>
        </div>
      )}
    </nav>
  );
}
