import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaClock } from 'react-icons/fa';

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  replies?: Comment[];
}

interface CommentSectionProps {
  postSlug: string;
}

export default function CommentSection({ postSlug }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !name.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: name,
      content: newComment,
      date: new Date().toLocaleDateString(),
    };

    setComments([...comments, comment]);
    setNewComment('');
    setName('');
  };

  return (
    <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-2xl font-serif text-gray-900 dark:text-white mb-6">Comments</h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-gold"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Comment
          </label>
          <textarea
            id="comment"
            rows={4}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-gold"
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-primary-gold text-white rounded-full hover:bg-primary-gold/90 transition-colors"
        >
          Post Comment
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0"
          >
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-primary-gold rounded-full flex items-center justify-center">
                <FaUser className="text-white" />
              </div>
              <div className="ml-3">
                <h4 className="text-gray-900 dark:text-white font-medium">{comment.author}</h4>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <FaClock className="mr-1" />
                  <span>{comment.date}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 ml-11">{comment.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
