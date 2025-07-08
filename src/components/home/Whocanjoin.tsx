"use client";
export default function WhoCanJoin() {
  const roles = [
    {
      title: "Individuals",
      desc: "Have leftover food at home? You can donate easily to help others."
    },
    {
      title: "Restaurants",
      desc: "Share surplus food at the end of the day to avoid waste."
    },
    {
      title: "Event Hosts",
      desc: "Leftover food from weddings or functions? Post it here!"
    },
    {
      title: "NGOs",
      desc: "Join as a verified NGO to collect and distribute donated food."
    },
    {
      title: "Volunteers",
      desc: "Help deliver food from donors to NGOs in your area."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="join">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Who Can Join Us?</h2>
        <p className="text-lg text-gray-600 mb-12">Everyone has a role to play in fighting hunger.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {roles.map((role, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{role.title}</h3>
              <p className="text-gray-600">{role.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}