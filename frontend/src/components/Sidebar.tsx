"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar({ role }: { role: 'student' | 'instructor' }) {
  const pathname = usePathname();

  const studentLinks = [
    { name: 'My Learning', href: '/dashboard', icon: '📖' },
    { name: 'Browse Courses', href: '/courses', icon: '🔍' },
    { name: 'Certificates', href: '/certificates', icon: '🏆' },
    { name: 'Profile', href: '/profile', icon: '👤' },
  ];

  const instructorLinks = [
    { name: 'Dashboard', href: '/instructor/dashboard', icon: '📊' },
    { name: 'My Courses', href: '/instructor/courses', icon: '📚' },
    { name: 'Create Course', href: '/instructor/create', icon: '➕' },
    { name: 'Analytics', href: '/instructor/analytics', icon: '📈' },
  ];

  const links = role === 'student' ? studentLinks : instructorLinks;

  return (
    <aside className="w-72 glass border-r border-slate-100 p-6 flex flex-col bg-slate-50/30">
      <div className="mb-10 px-4">
        <Link href="/" className="text-2xl font-bold text-gradient">Launch-Ed</Link>
      </div>
      
      <nav className="flex-1 space-y-2">
        {links.map((link) => (
          <Link 
            key={link.href}
            href={link.href}
            className={`flex items-center gap-4 px-4 py-3 rounded-xl transition ${
              pathname === link.href ? 'bg-sky-100 text-sky-600' : 'text-slate-500 hover:text-sky-600 hover:bg-sky-50'
            }`}
          >
            <span className="text-xl">{link.icon}</span>
            <span className="font-medium">{link.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-slate-100">
        <button className="flex items-center gap-4 px-4 py-3 text-red-400 hover:text-red-300 transition w-full">
          <span>🚪</span>
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
