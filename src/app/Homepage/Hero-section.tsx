"use client";
import Image from "next/image";
import { useLanguage } from "@/context/languagecontext";
import Button from '@/components/button';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-orange-50 py-16 px-4">
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          {t.hero.title}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {t.hero.description}
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <Button label={t.hero.registerBtn } href="/register" />
          <Button label={t.hero.loginBtn} href="/login" variant="outlined" color="secondary" />
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
