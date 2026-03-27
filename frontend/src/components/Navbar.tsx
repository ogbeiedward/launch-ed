"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gradient">
              Launch-Ed
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/courses" className="text-slate-600 hover:text-sky-600 transition px-3 py-2">Courses</Link>
              <Link href="/about" className="text-slate-600 hover:text-sky-600 transition px-3 py-2">About</Link>
              <Link href="/login" className="px-5 py-2 rounded-full border border-sky-400 text-slate-700 hover:bg-sky-50 transition">Login</Link>
              <Link href="/register" className="px-6 py-2 rounded-full bg-brand-gradient text-white font-medium hover:opacity-90 transition">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
