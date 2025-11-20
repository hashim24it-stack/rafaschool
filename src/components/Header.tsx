import { Home, Eye, Calendar, Megaphone, Award, Mail } from 'lucide-react';
import { PageType } from '../types';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const navItems = [
    { id: 'home' as PageType, label: 'الرئيسية', icon: Home },
    { id: 'vision' as PageType, label: 'رؤية المدرسة', icon: Eye },
    { id: 'schedule' as PageType, label: 'الجدول المدرسي', icon: Calendar },
    { id: 'announcements' as PageType, label: 'إعلانات مدرسية', icon: Megaphone },
    { id: 'results' as PageType, label: 'استخراج النتائج', icon: Award },
    { id: 'contact' as PageType, label: 'التواصل معنا', icon: Mail },
  ];

  return (
    <header className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="py-6 text-center border-b border-white/20">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            مدرسة رافع بن مالك للتعليم الأساسي
          </h1>
          <p className="text-lg md:text-xl text-emerald-50">(5-9)</p>
        </div>

        <nav className="py-2">
          <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`
                      flex items-center gap-2 px-4 py-3 rounded-lg
                      transition-all duration-300 text-sm md:text-base
                      ${isActive
                        ? 'bg-white text-emerald-700 shadow-md transform scale-105'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                      }
                    `}
                  >
                    <Icon size={18} />
                    <span className="font-semibold">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
