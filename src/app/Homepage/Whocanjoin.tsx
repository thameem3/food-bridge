"use client";
import { useLanguage } from "@/context/languagecontext";

export default function WhoCanJoinSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-yellow-300 via-orange-200 to-pink-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
          {t.whoCanJoin.title}
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          {t.whoCanJoin.subtitle}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {t.whoCanJoin.items.map((role: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-600">{role.title}</h3>
              <p className="text-gray-600">{role.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
