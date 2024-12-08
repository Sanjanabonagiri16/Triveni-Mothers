import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaComments, FaFileInvoiceDollar, FaImages } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Dashboard | Client Portal',
  description: 'View your designs, bookings, and collaborate with your fashion designer.',
};

interface DashboardCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  count?: number;
}

const dashboardCards: DashboardCard[] = [
  {
    title: 'My Designs',
    description: 'View and provide feedback on your custom designs',
    icon: <FaImages className="w-6 h-6" />,
    link: '/client-portal/designs',
    count: 3,
  },
  {
    title: 'Appointments',
    description: 'Manage your upcoming appointments',
    icon: <FaCalendar className="w-6 h-6" />,
    link: '/client-portal/appointments',
    count: 2,
  },
  {
    title: 'Messages',
    description: 'Communicate with your designer',
    icon: <FaComments className="w-6 h-6" />,
    link: '/client-portal/messages',
    count: 5,
  },
  {
    title: 'Invoices',
    description: 'View and manage your payments',
    icon: <FaFileInvoiceDollar className="w-6 h-6" />,
    link: '/client-portal/invoices',
    count: 1,
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        {/* Welcome Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="relative w-16 h-16">
              <Image
                src="/images/client-avatar.jpg"
                alt="Client Avatar"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-serif text-gray-900 dark:text-white">
                Welcome back, Sarah!
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Your next appointment is on December 15, 2024
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardCards.map((card) => (
            <Link
              key={card.title}
              href={card.link}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary-gold/10 rounded-lg">
                    {card.icon}
                  </div>
                  {card.count && (
                    <span className="px-2 py-1 bg-primary-gold text-white text-sm rounded-full">
                      {card.count}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-serif text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {card.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-gold/0 to-primary-gold/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-serif text-gray-900 dark:text-white mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <FaCalendar className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white">New appointment scheduled</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">December 15, 2024</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <FaImages className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white">New design uploaded</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Wedding Collection - Draft 2</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
