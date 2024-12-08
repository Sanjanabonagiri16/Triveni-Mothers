"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram, FaHeart, FaComment } from 'react-icons/fa';

// This would typically come from your Instagram API integration
const mockInstagramPosts = [
  {
    id: '1',
    image: '/images/instagram/post1.jpg',
    caption: 'Bridal makeup perfection ✨',
    likes: 156,
    comments: 23,
    url: 'https://instagram.com/your-post-1',
  },
  {
    id: '2',
    image: '/images/instagram/post2.jpg',
    caption: 'Latest saree draping styles 👗',
    likes: 243,
    comments: 45,
    url: 'https://instagram.com/your-post-2',
  },
  {
    id: '3',
    image: '/images/instagram/post3.jpg',
    caption: 'Wedding hairstyle trends 2024 💫',
    likes: 189,
    comments: 34,
    url: 'https://instagram.com/your-post-3',
  },
  // Add more mock posts as needed
];

export default function SocialFeed() {
  const [posts, setPosts] = useState(mockInstagramPosts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // TODO: Implement actual Instagram API integration
  // const fetchInstagramPosts = async () => {
  //   const response = await fetch('/api/instagram');
  //   const data = await response.json();
  //   setPosts(data);
  // };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-primary dark:text-primary-gold mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Stay updated with our latest work and behind-the-scenes moments
          </p>
          <a
            href="https://instagram.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-primary dark:text-primary-gold hover:underline"
          >
            <FaInstagram className="w-5 h-5 mr-2" />
            @your-username
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Loading skeletons
            [...Array(6)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"
              />
            ))
          ) : (
            // Actual posts
            posts.map((post) => (
              <motion.a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <p className="text-center mb-4 line-clamp-3">{post.caption}</p>
                    <div className="flex space-x-6">
                      <div className="flex items-center">
                        <FaHeart className="w-5 h-5 mr-2" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <FaComment className="w-5 h-5 mr-2" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))
          )}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary dark:bg-primary-gold text-white dark:text-black rounded-full hover:opacity-90 transition-opacity"
          >
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
