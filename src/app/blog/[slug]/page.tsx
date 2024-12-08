import { getAllPostSlugs, getPostBySlug, getAllPosts } from '@/utils/markdown';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaClock, FaUser } from 'react-icons/fa';
import ShareButtons from '@/components/blog/ShareButtons';
import CommentSection from '@/components/blog/CommentSection';
import RelatedPosts from '@/components/blog/RelatedPosts';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  const allPosts = getAllPosts();

  if (!post) return null;

  return (
    <article className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full mb-12 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-primary-gold text-black text-sm rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
                {post.title}
              </h1>
              <div className="flex items-center justify-center space-x-6 text-gray-300">
                <div className="flex items-center">
                  <FaUser className="w-4 h-4 mr-2" />
                  <span>{post.author}</span>
                </div>
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
          </div>
        </div>

        {/* Share Buttons */}
        <ShareButtons
          title={post.title}
          url={`https://yourwebsite.com/blog/${post.slug}`}
        />

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-a:text-primary dark:prose-a:text-primary-gold mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="/images/author.jpg"
                  alt={post.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-serif text-gray-900 dark:text-white">
                  {post.author}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Fashion Designer & Makeup Artist
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <RelatedPosts currentPost={post} allPosts={allPosts} />

          {/* Comments Section */}
          <CommentSection postSlug={post.slug} />

          {/* Navigation */}
          <div className="mt-12 flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-primary dark:bg-primary-gold text-white dark:text-black rounded-full hover:bg-opacity-90 transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
