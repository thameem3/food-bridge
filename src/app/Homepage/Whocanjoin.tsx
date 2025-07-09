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
    },
    {
      title: "Corporate Partners",
      desc: "Companies can donate food from large events or contribute via CSR."
    }
    
  ];

  return (
    <section className="bg-gradient-to-br from-yellow-300 via-orange-200 to-pink-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Who Can Join Us?</h2>
        <p className="text-lg text-gray-700 mb-10">Everyone has a role to play in fighting hunger.</p>

        <div className="grid gap-6 md:grid-cols-3">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-gray-600 ">{role.title}</h3>
              <p className="text-gray-600">{role.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}