"use client";
import Link from "next/link";
import { useLanguage } from "@/context/languagecontext";
import Button from "@/components/button";

export default function MissionSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">
          {t.mission.title}
        </h2>
        <p className="text-gray-600 mb-6 text-lg">
          {t.mission.description}
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button label={t.mission.donorBtn} href="/register" />
          <Button label={t.mission.ngoBtn} href="/register" variant="outlined" color="secondary" />
        </div>
      </div>
    </section>
  );
}
