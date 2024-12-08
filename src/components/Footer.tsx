import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaPinterest, FaWhatsapp } from 'react-icons/fa';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Contact', href: '/#contact' },
];

const services = [
  { name: 'Fashion Design', href: '/services#fashion-design' },
  { name: 'Makeup Artistry', href: '/services#makeup' },
  { name: 'Hairstyling', href: '/services#hairstyling' },
  { name: 'Saree Draping', href: '/services#saree-draping' },
];

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/yourusername',
    icon: FaInstagram,
    hoverColor: 'hover:text-pink-500',
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/yourusername',
    icon: FaFacebook,
    hoverColor: 'hover:text-blue-500',
  },
  {
    name: 'Pinterest',
    href: 'https://pinterest.com/yourusername',
    icon: FaPinterest,
    hoverColor: 'hover:text-red-500',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/yournumber',
    icon: FaWhatsapp,
    hoverColor: 'hover:text-green-500',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-40">
                <Image
                  src="/images/logo-light.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transforming your vision into reality with expert fashion design, makeup artistry,
              and styling services. Your beauty journey starts here.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors ${social.hoverColor}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif text-white mb-6">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-400 hover:text-primary-gold transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <p className="font-medium text-white">Location</p>
                <p>Your Studio Address</p>
                <p>City, State, ZIP</p>
              </li>
              <li>
                <p className="font-medium text-white">Phone</p>
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary-gold transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <p className="font-medium text-white">Email</p>
                <a
                  href="mailto:contact@yourdomain.com"
                  className="hover:text-primary-gold transition-colors"
                >
                  contact@yourdomain.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © {currentYear} Your Brand Name. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link href="/privacy-policy" className="hover:text-primary-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
