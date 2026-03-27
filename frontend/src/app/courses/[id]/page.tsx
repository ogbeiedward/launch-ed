"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CoursePlayerPage() {
  const [currentLesson, setCurrentLesson] = useState({ 
    title: "App Router Basics", 
    videoUrl: "https://placeholder.com/video1",
    content: "Next.js 13 introduced a new App Router built on React Server Components..."
  });

  const sections = [
    {
      title: "Getting Started",
      lessons: [
        { title: "Introduction", type: "video", duration: "5:30", completed: true },
        { title: "Environment Setup", type: "text", duration: "10 min", completed: true },
      ]
    },
    {
      title: "Core Concepts",
      lessons: [
        { title: "App Router Basics", type: "video", duration: "12:45", completed: false },
        { title: "Server vs Client Components", type: "video", duration: "15:20", completed: false },
        { title: "Data Fetching", type: "video", duration: "18:10", completed: false },
      ]
    }
  ];

  return (
    <div className="flex h-screen bg-midnight text-white overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="w-full aspect-video bg-black relative group">
          {/* Mock Video Player */}
          <div className="absolute inset-0 flex items-center justify-center bg-brand-gradient/10">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-20 h-20 bg-accent-purple rounded-full flex items-center justify-center text-4xl shadow-xl shadow-accent-purple/40"
            >
              ▶
            </motion.button>
          </div>
          <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h1 className="text-xl font-bold">{currentLesson.title}</h1>
          </div>
        </div>

        <div className="p-8 max-w-4xl">
          <div className="flex gap-4 mb-8">
            <button className="px-6 py-2 border-b-2 border-accent-purple font-bold">Content</button>
            <button className="px-6 py-2 text-gray-400 hover:text-white transition">Resources</button>
            <button className="px-6 py-2 text-gray-400 hover:text-white transition">Discussion</button>
          </div>

          <article className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-4">Lesson Overview</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              {currentLesson.content}
            </p>
          </article>
        </div>
      </div>

      {/* Course Sidebar */}
      <aside className="w-96 glass border-l border-white/5 flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h2 className="font-bold text-lg mb-1">Full Stack Development</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="flex-1 bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-accent-purple h-full w-[40%]" />
            </div>
            <span>40% Done</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 px-2">
                Section {idx + 1}: {section.title}
              </h3>
              <div className="space-y-1">
                {section.lessons.map((lesson, lIdx) => (
                  <button 
                    key={lIdx}
                    className={`w-full flex items-center gap-4 p-3 rounded-xl transition text-left ${
                      lesson.title === currentLesson.title ? 'bg-accent-purple/10 text-accent-purple border border-accent-purple/20' : 'hover:bg-white/5 text-gray-300'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      lesson.completed ? 'bg-green-500/20 text-green-500' : 'bg-white/10 text-gray-500'
                    }`}>
                      {lesson.completed ? '✓' : lIdx + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{lesson.title}</p>
                      <p className="text-xs opacity-50">{lesson.type === 'video' ? '📺' : '📄'} {lesson.duration}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
