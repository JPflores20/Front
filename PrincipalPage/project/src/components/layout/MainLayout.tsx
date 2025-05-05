import React, { useState } from 'react';
import { Menu, X, Upload, User, LogOut, Home, BookOpen, MessageSquare } from 'lucide-react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Home', href: '#' },
    { icon: <Upload className="w-5 h-5" />, label: 'Upload Article', href: '#' },
    { icon: <BookOpen className="w-5 h-5" />, label: 'My Articles', href: '#' },
    { icon: <MessageSquare className="w-5 h-5" />, label: 'Reviews', href: '#' },
    { icon: <User className="w-5 h-5" />, label: 'Profile', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 transform transition-transform duration-300 ease-in-out bg-navy-800 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="flex items-center justify-between h-16 px-4 bg-navy-900">
          <span className="text-2xl font-bold text-light-blue-500">CORA</span>
          <button
            className="p-1 rounded-md md:hidden hover:bg-navy-800"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <nav className="px-4 py-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-navy-900 hover:text-white transition-colors"
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <button
              className="flex items-center w-full px-4 py-3 text-gray-300 rounded-lg hover:bg-navy-900 hover:text-white transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="ml-3">Logout</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <div className="md:ml-64">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              className="p-1 rounded-md md:hidden hover:bg-gray-100"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, Researcher</span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;