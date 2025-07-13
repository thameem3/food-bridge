'use client';
import { useLanguage } from "@/context/languagecontext";
export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="space-y-6">
          <h2 className="text-4xl font-bold">{t.contact.title}</h2>
          <p className="text-gray-200">
            {t.contact.description}
          </p>

          <div className="mt-8 space-y-4 text-gray-100">
            <p className="flex items-center gap-2">
              <span>{t.contact.email}</span>
            </p>
            <p className="flex items-center gap-2">
              <span>{t.contact.phone}</span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md text-gray-900">
          <h3 className="text-2xl font-semibold mb-2">{t.contact.formTitle}</h3>
          <p className="mb-6 text-gray-600">{t.contact.formSubtitle}</p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder={t.contact.fullName} className="border rounded-md px-4 py-2 w-full" />
              <input type="text" placeholder={t.contact.company} className="border rounded-md px-4 py-2 w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" placeholder={t.contact.emailLabel} className="border rounded-md px-4 py-2 w-full" />
              <div className="flex gap-2">
                <select className="border rounded-md px-2 py-2">
                  <option>IN</option>
                </select>
                <input type="text" placeholder={t.contact.phoneLabel} className="border rounded-md px-4 py-2 w-full" />
              </div>
            </div>

            <input type="text" placeholder={t.contact.address} className="border rounded-md px-4 py-2 w-full" />

            <textarea placeholder={t.contact.message} className="border rounded-md px-4 py-2 w-full h-32" />

            <button
              type="submit"
              className="bg-purple-900 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition"
            >
              {t.contact.submitBtn}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}