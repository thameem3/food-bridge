'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Later replace with actual auth logic

  return (
    <nav className="bg-white shadow-md p-5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-blue-600">FoodBridge</Link>
        <div className=" space-x-12 hidden md:flex text-blue-600">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {!isLoggedIn ? (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          ) : (
            <>
              <Link href="/donor">Dashboard</Link>
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
