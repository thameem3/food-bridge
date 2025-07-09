"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/languagecontext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-4">
        <div className="md:w-1/2 text-center md:text-left">
          <div className="max-w-6xl mx-auto text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4 text-blue-700">
              {t.hero.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {t.hero.description}
            </p>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            <Link href="/register" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition">
            {t.hero.registerBtn || "Register Now"}
            </Link>
            <Link href="/login" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-orange-100 transition">
            {t.hero.loginBtn || "Login"}
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/hero1.png"
            alt="Donate Food"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
