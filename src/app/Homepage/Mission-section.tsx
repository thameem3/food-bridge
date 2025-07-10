"use client";
import Link from "next/link";
import { useLanguage } from "@/context/languagecontext";

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
        <div className="flex gap-4 justify-center">
          <Link
            href="/register?role=donor"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            {t.mission.donorBtn}
          </Link>
          <Link
            href="/register?role=ngo"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-100 transition"
          >
            {t.mission.ngoBtn}
          </Link>
        </div>
      </div>
    </section>
  );
}
