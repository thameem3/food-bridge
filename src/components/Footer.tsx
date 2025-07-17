'use client';
import Link from 'next/link';
import { useLanguage } from '@/context/languagecontext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h3 className="text-xl font-semibold mb-3">{t.footer.quickLinks}</h3>
          <ul className="space-y-2">
            <li><Link href="/">{t.footer.home}</Link></li>
            <li><Link href="/about">{t.footer.about}</Link></li>
            <li><Link href="/contact">{t.footer.contact}</Link></li>
            <li><Link href="/donate">{t.footer.donate}</Link></li>
            <li><Link href="/register">{t.footer.joinUs}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">{t.footer.contactUsTitle}</h3>
          <p className="mb-1">{t.footer.email}</p>
          <p>{t.footer.phone}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">FoodBridge</h3>
          <p className="text-sm text-gray-400">
            {t.footer.donate} — {t.footer.joinUs}.
          </p>
        </div>
      </div>

      <p className="text-center mt-8 text-sm text-gray-400">
        {t.footer.copyright}
      </p>
    </footer>
  );
}
