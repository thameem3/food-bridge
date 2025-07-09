'use client';
export default function ContactSection() {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-gray-200">
            Not sure what you need? The team at Square Events will be happy to listen to you and suggest event ideas you hadn't considered.
          </p>

          <div className="mt-8 space-y-4 text-gray-100">
            <p className="flex items-center gap-2">
               <span>info@squareevents.com</span>
            </p>
            <p className="flex items-center gap-2">
               <span>Support: (+91) 123 456 586</span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md text-gray-900">
          <h3 className="text-2xl font-semibold mb-2">We’d love to hear from you!</h3>
          <p className="mb-6 text-gray-600">Let’s get in touch</p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="border rounded-md px-4 py-2 w-full" />
              <input type="text" placeholder="Company" className="border rounded-md px-4 py-2 w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" placeholder="Email" className="border rounded-md px-4 py-2 w-full" />
              <div className="flex gap-2">
                <select className="border rounded-md px-2 py-2">
                  <option>IN</option>
                </select>
                <input type="text" placeholder="+1 (555) 000-0000" className="border rounded-md px-4 py-2 w-full" />
              </div>
            </div>

            <input type="text" placeholder="Address" className="border rounded-md px-4 py-2 w-full" />

            <textarea placeholder="Type your message here" className="border rounded-md px-4 py-2 w-full h-32" />

            <button
              type="submit"
              className="bg-purple-900 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
