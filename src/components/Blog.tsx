import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaCalendar, FaClock } from 'react-icons/fa';

const POSTS_PER_PAGE = 6;

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
}

// Blog categories
const categories = [
  'All',
  'Beauty Tips',
  'Fashion Trends',
  'Hairstyling Guides',
  'Saree Styling',
  'Bridal Tips'
];

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Bridal Makeup Trends for 2024',
    excerpt: 'Discover the latest bridal makeup trends that will make you shine on your special day...',
    category: 'Beauty Tips',
    image: '/images/blog/bridal-makeup.jpg',
    author: 'Your Name',
    date: '2024-01-15',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Modern Saree Draping Styles for Special Occasions',
    excerpt: 'Learn innovative ways to drape your saree that combine tradition with contemporary fashion...',
    category: 'Saree Styling',
    image: '/images/blog/saree-styles.jpg',
    author: 'Your Name',
    date: '2024-01-10',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Essential Hair Care Tips for Indian Weather',
    excerpt: 'Keep your hair healthy and beautiful throughout the year with these expert tips...',
    category: 'Hairstyling Guides',
    image: '/images/blog/hair-care.jpg',
    author: 'Your Name',
    date: '2024-01-05',
    readTime: '6 min read',
    featured: false,
  },
  // Add more blog posts as needed
];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  // Simulated data fetching
  useEffect(() => {
    const fetchPosts = async () => {
      // In production, this would be an API call
      // const response = await fetch('/api/posts');
      // const data = await response.json();
      setPosts(blogPosts);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Filter and search posts
  useEffect(() => {
    let result = [...posts];

    if (selectedCategory !== 'All') {
      result = result.filter(post => post.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      );
    }

    setFilteredPosts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [posts, selectedCategory, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl text-primary dark:text-primary-gold mb-4">
            Latest Articles & Tips
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the latest trends, expert advice, and insider tips for fashion, beauty, and styling
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-full border border-gray-200 dark:border-gray-700 
                       bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200
                       focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-gold"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white dark:bg-primary-gold dark:text-black shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden animate-pulse"
              >
                <div className="aspect-[16/9] bg-gray-200 dark:bg-gray-700" />
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <p className="text-gray-600 dark:text-gray-300">
                  No posts found matching your criteria.
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Link href={`/blog/${post.id}`} className="block">
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 bg-accent-peach dark:bg-primary-gold/20 text-primary dark:text-primary-gold text-sm rounded-full mb-3">
                          {post.category}
                        </span>
                        <h3 className="font-serif text-xl text-gray-900 dark:text-white mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <FaCalendar className="w-4 h-4 mr-2" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <FaClock className="w-4 h-4 mr-2" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </AnimatePresence>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300
                       disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full ${
                  currentPage === i + 1
                    ? 'bg-primary text-white dark:bg-primary-gold dark:text-black'
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300
                       disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
