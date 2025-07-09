import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 ">
      <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-35 ">
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-2">FoodBridge</h2>
          <p>Connecting surplus food to those in need across cities.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/login" className="hover:underline">Login</Link></li>
            <li><Link href="/register" className="hover:underline">Register</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="mb-1"> support@foodbridge.com</p>
          <p> +91 98765 43210</p>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500 py-4 border-t">
        © 2025 FoodBridge. All rights reserved.
      </div>
    </footer>
  );
}
