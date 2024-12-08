import { ReactNode } from 'react';
import Link from 'next/link';
import { FaHome, FaImages, FaCalendar, FaComments, FaFileInvoiceDollar, FaCog } from 'react-icons/fa';

interface SidebarLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const sidebarLinks: SidebarLink[] = [
  { name: 'Dashboard', href: '/client-portal/dashboard', icon: <FaHome /> },
  { name: 'My Designs', href: '/client-portal/designs', icon: <FaImages /> },
  { name: 'Appointments', href: '/client-portal/appointments', icon: <FaCalendar /> },
  { name: 'Messages', href: '/client-portal/messages', icon: <FaComments /> },
  { name: 'Invoices', href: '/client-portal/invoices', icon: <FaFileInvoiceDollar /> },
  { name: 'Settings', href: '/client-portal/settings', icon: <FaCog /> },
];

export default function ClientPortalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out">
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-serif text-primary-gold">Your Logo</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {sidebarLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center px-4 py-3 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <span className="text-gray-500 dark:text-gray-400 group-hover:text-primary-gold transition-colors">
                  {link.icon}
                </span>
                <span className="ml-3">{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* User Menu */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button className="w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary-gold transition-colors">
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64">
        {children}
      </main>
    </div>
  );
}
