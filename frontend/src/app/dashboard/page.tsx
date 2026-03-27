"use client";
import Sidebar from '@/components/Sidebar';
import { motion } from 'framer-motion';

export default function StudentDashboard() {
  const enrolledCourses = [
    { title: "Full Stack Development with Next.js", progress: 65, instructor: "Dr. Launch-Ed", image: "/course1.jpg" },
    { title: "UI/UX Mastery with Figma", progress: 20, instructor: "Design Guru", image: "/course2.jpg" }
  ];

  return (
    <div className="flex min-h-screen bg-white text-slate-900">
      <Sidebar role="student" />
      
      <main className="flex-1 p-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">My Courses</h1>
          <p className="text-slate-500">Welcome back, Eduardo! You have 2 courses in progress.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enrolledCourses.map((course, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl overflow-hidden hover:border-sky-300/50 transition group shadow-sm bg-white"
            >
              <div className="h-48 bg-gray-800 relative">
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-brand-gradient opacity-20" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-sky-500 px-3 py-1 rounded-full text-xs font-bold uppercase text-white">In Progress</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-sky-600 transition">{course.title}</h3>
                <p className="text-sm text-slate-500 mb-6">by {course.instructor}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span className="text-sky-600 font-bold">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      className="bg-brand-gradient h-full"
                    />
                  </div>
                </div>
                
                <button className="w-full mt-8 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 border-dashed text-sm font-semibold transition">
                  Continue Learning
                </button>
              </div>
            </motion.div>
          ))}
          
          {/* Browse New Card */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
            className="border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-8 text-center hover:bg-slate-50 transition cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center mb-4 text-sky-500 text-2xl">+</div>
            <h3 className="font-bold text-lg">Explore Catalog</h3>
            <p className="text-sm text-gray-500 mt-2">Find your next skill to master</p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
