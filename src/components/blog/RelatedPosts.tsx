import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Post } from '@/types/blog';

interface RelatedPostsProps {
  currentPost: Post;
  allPosts: Post[];
}

export default function RelatedPosts({ currentPost, allPosts }: RelatedPostsProps) {
  const relatedPosts = allPosts
    .filter(
      (post) =>
        post.slug !== currentPost.slug &&
        (post.category === currentPost.category ||
          post.tags?.some((tag) => currentPost.tags?.includes(tag)))
    )
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-2xl font-serif text-gray-900 dark:text-white mb-6">Related Posts</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="inline-block px-3 py-1 bg-primary-gold/10 text-primary-gold text-sm rounded-full mb-2">
                {post.category}
              </span>
              <h4 className="text-lg font-serif text-gray-900 dark:text-white group-hover:text-primary-gold transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
