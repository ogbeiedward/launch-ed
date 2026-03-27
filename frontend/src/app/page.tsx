"use client";
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <main className="bg-white min-h-screen relative overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        {/* Animated Orbs */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 left-1/4 w-96 h-96 bg-sky-200/40 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-40 right-1/4 w-[500px] h-[500px] bg-cyan-100/30 blur-[150px] rounded-full"
        />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
          >
            Elevate Your <span className="text-gradient">Career</span> <br />
            with Premium Learning
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-xl mb-10 max-w-2xl mx-auto"
          >
            Join Launch-Ed, the all-in-one platform for modern students and expert instructors. Scalable, sleek, and built for success.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-10 py-4 bg-brand-gradient text-white rounded-xl text-lg font-semibold shadow-lg shadow-sky-200/50 hover:scale-105 transition-transform">
              Browse Courses
            </button>
            <button className="px-10 py-4 glass text-slate-700 rounded-xl text-lg font-semibold border border-slate-200 hover:bg-slate-50 transition">
              Become Instructor
            </button>
          </motion.div>
        </div>
      </section>

      {/* Feature Split */}
      <section className="py-20 max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {[
          { title: "Expert Instruction", desc: "Learn from industry professionals with real-world experience." },
          { title: "Progress Tracking", desc: "Never lose your place with our advanced course resume system." },
          { title: "Interactive Quizzes", desc: "Master every module with auto-graded assessments." }
        ].map((f, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
            <p className="text-slate-600 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
