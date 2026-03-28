"use client";
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CoursesPage() {
  const courses = [
    { id: '1', title: "Fashion Design & Garment Making", instructor: "Bisi Fashion", price: "₦25,000", level: "Beginner" },
    { id: '2', title: "Modern Plumbing & Pipefitting", instructor: "Engr. Musa", price: "₦35,000", level: "Intermediate" },
    { id: '3', title: "Professional Catering & Culinary Arts", instructor: "Chef Chioma", price: "₦40,000", level: "Beginner" }
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Courses</h1>
          <p className="text-slate-600">Master new skills with our premium digital curriculum.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div 
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <div className="h-48 bg-slate-100 relative">
                <div className="absolute inset-0 bg-brand-gradient opacity-10" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">{course.level}</span>
                <h3 className="text-xl font-bold mt-2 mb-1">{course.title}</h3>
                <p className="text-sm text-slate-500 mb-6">by {course.instructor}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-2xl font-bold text-slate-900">{course.price}</span>
                  <Link href={`/courses/${course.id}`} className="px-6 py-2 bg-brand-gradient text-white rounded-full font-semibold text-sm hover:opacity-90 transition">
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
