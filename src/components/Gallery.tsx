import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Masonry from 'react-masonry-css';

const categories = ['All', 'Fashion Design', 'Makeup', 'Hairstyling', 'Saree Draping'];

const galleryItems = [
  {
    id: 1,
    category: 'Fashion Design',
    image: '/images/gallery/fashion-1.jpg',
    title: 'Contemporary Bridal Design',
    description: 'Elegant fusion of traditional and modern bridal wear',
    height: 'tall', // for masonry layout variation
  },
  {
    id: 2,
    category: 'Makeup',
    image: '/images/gallery/makeup-1.jpg',
    title: 'Bridal Makeup',
    description: 'Stunning bridal makeup with attention to detail',
    height: 'medium',
  },
  {
    id: 3,
    category: 'Hairstyling',
    image: '/images/gallery/hair-1.jpg',
    title: 'Modern Updo',
    description: 'Contemporary hairstyling for special occasions',
    height: 'short',
  },
  {
    id: 4,
    category: 'Saree Draping',
    image: '/images/gallery/saree-1.jpg',
    title: 'Traditional Draping',
    description: 'Expert saree draping in multiple regional styles',
    height: 'tall',
  },
  // Add more items as needed
];

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary text-primary dark:text-primary-gold mb-4">
            Portfolio Gallery
          </h2>
          <p className="text-body text-gray-600 dark:text-gray-300">
            Explore our collection of work across different categories
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-primary text-white dark:bg-primary-gold dark:text-black shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`mb-4 relative cursor-pointer group overflow-hidden rounded-lg
                ${item.height === 'tall' ? 'h-[600px]' : item.height === 'medium' ? 'h-[400px]' : 'h-[300px]'}`}
              onClick={() => setSelectedImage(item.id)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-serif text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>

        {/* Instagram Feed Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-serif text-center mb-8 text-primary dark:text-primary-gold">
            Follow Us on Instagram
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Instagram embed placeholders - Replace with actual Instagram post embeds */}
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"></div>
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"></div>
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
              onClick={() => {
                if (!isZoomed) setSelectedImage(null);
                setIsZoomed(false);
              }}
            >
              <div className={`relative w-full max-w-4xl mx-4 transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'}`}>
                <Image
                  src={galleryItems.find(item => item.id === selectedImage)?.image || ''}
                  alt={galleryItems.find(item => item.id === selectedImage)?.title || ''}
                  width={1200}
                  height={800}
                  className="rounded-lg cursor-zoom-in"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                  }}
                />
                <button
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
