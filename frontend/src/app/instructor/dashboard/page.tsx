"use client";
import Sidebar from '@/components/Sidebar';
import { motion } from 'framer-motion';

export default function InstructorDashboard() {
  const stats = [
    { label: "Total Students", value: "1,248", change: "+12%", icon: "👥" },
    { label: "Total Revenue", value: "$12,450", change: "+5%", icon: "💰" },
    { label: "Avg. Watch Time", value: "45m", change: "+3%", icon: "⏱️" },
    { label: "Course Rating", value: "4.8", change: "+0.1", icon: "⭐" },
  ];

  const recentActivity = [
    { user: "Sarah Johnson", action: "enrolled in", course: "Next.js Mastery", time: "2h ago" },
    { user: "Marcus Lee", action: "completed", course: "App Router Basics", time: "4h ago" },
    { user: "Elena Rodriguez", action: "left a review", course: "TypeScript Advanced", time: "6h ago" },
  ];

  return (
    <div className="flex min-h-screen bg-white text-slate-900">
      <Sidebar role="instructor" />
      
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">Instructor Dashboard</h1>
            <p className="text-slate-500">Welcome back, Dr. Launch-Ed! Here's what's happening today.</p>
          </div>
          <button className="px-6 py-3 bg-brand-gradient text-white rounded-xl font-bold shadow-lg shadow-sky-300/50 hover:scale-105 transition-transform">
            Create New Course
          </button>
        </header>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-3xl bg-white shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl">{stat.icon}</span>
                <span className="text-green-400 text-sm font-bold">{stat.change}</span>
              </div>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
            </motion.div>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <section className="lg:col-span-2 glass p-8 rounded-3xl bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-6">
              {recentActivity.map((act, i) => (
                <div key={i} className="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0">
                  <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600">
                    {act.user[0]}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-bold">{act.user}</span> {act.action} <span className="text-sky-600 underline cursor-pointer">{act.course}</span>
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{act.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section className="glass p-8 rounded-3xl flex flex-col gap-4 bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
            <button className="w-full py-4 bg-slate-50 rounded-2xl hover:bg-slate-100 border border-slate-200 transition text-left px-6">
              <span className="block font-bold">Upload Materials</span>
              <span className="text-xs text-gray-500">PDFs, Assets, Assignments</span>
            </button>
            <button className="w-full py-4 bg-slate-50 rounded-2xl hover:bg-slate-100 border border-slate-200 transition text-left px-6">
              <span className="block font-bold">Manage Quizzes</span>
              <span className="text-xs text-gray-500">Add or edit questions</span>
            </button>
            <button className="w-full py-4 bg-slate-50 rounded-2xl hover:bg-slate-100 border border-slate-200 transition text-left px-6">
              <span className="block font-bold">Student Messaging</span>
              <span className="text-xs text-gray-500">Unread messages (3)</span>
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}
