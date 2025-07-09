'use client'
export default function MissionSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">
           Bridging Hunger & Food Waste
           
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Every day, quality food is wasted while millions remain hungry. Our mission is to bridge this gap by connecting food donors with NGOs that serve those in need.
          We believe no good food should go to waste when it can feed someone in need. Join us to make a difference — one meal at a time.
             
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <a href="/register"className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"> Become a Donor</a>
          <a href="/register" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition">Partner as NGO</a>
        </div>
      </div>
    </section>
  )
}
