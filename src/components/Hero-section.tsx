'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-yellow-50 to-orange-100 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Don’t Waste Food.<br /> Share It with Someone in Need.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Whether it’s from a function, restaurant, or your own kitchen — your extra food can feed someone tonight. Join our mission to fight hunger.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              href="/register"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition">Register Now
            </Link>
            <Link
              href="/login"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-orange-100 transition">Login
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
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
  )
}
