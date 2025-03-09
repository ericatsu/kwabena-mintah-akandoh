import { motion } from 'framer-motion';
import { Newspaper, Calendar, ChevronRight, Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { transformToBlogPosts } from '@/utils/newsData';

// Use the same BlogPost interface from Blog.tsx
interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  image: string;
  featured?: boolean;
  dateAdded: string;
}

const News = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        // Use the same data transformation function as Blog.tsx
        const allPosts = transformToBlogPosts();

        // Take only the first 3 posts
        setNewsItems(allPosts.slice(0, 3));
        setError(null);
      } catch (err) {
        console.error('Error loading news data:', err);
        setError('Failed to load news items');

        // Fallback data if transform fails
        setNewsItems([
          {
            id: 'news-1',
            title: 'Agenda 111: Government lacks funds to complete project – Mintah Akandoh',
            excerpt: 'Hon. Kwabena Mintah Akandoh, the ranking member of the parliamentary health committee, has stated that the government lacks adequate funding to complete the Agenda 111 hospital projects.',
            content: 'Hon. Kwabena Mintah Akandoh, the ranking member of the parliamentary health committee, has stated that the government lacks adequate funding to complete the Agenda 111 hospital projects. Speaking at a press conference, he revealed that the current administration has exhausted allocated funds with only a fraction of the work completed.',
            category: 'News',
            author: {
              name: 'Kwabena Mintah Akandoh',
              avatar: '/kma.jpg'
            },
            readTime: '3 min read',
            image: 'https://3news.com/wp-content/uploads/2024/01/Agenda-111.png',
            dateAdded: '2024-05-27'
          },
          {
            id: 'news-2',
            title: 'Health Committee Inspects Rural Healthcare Facilities',
            excerpt: 'The parliamentary health committee conducted inspection visits to several rural healthcare facilities across the country.',
            content: 'The parliamentary health committee conducted inspection visits to several rural healthcare facilities across the country. The committee, led by Ranking Member Kwabena Mintah Akandoh, assessed the state of infrastructure and medical supplies in these essential facilities serving remote communities.',
            category: 'Healthcare',
            author: {
              name: 'Kwabena Mintah Akandoh',
              avatar: '/kma.jpg'
            },
            readTime: '5 min read',
            image: 'https://3news.com/wp-content/uploads/2023/03/Akandoh-Mintah.png',
            dateAdded: '2024-05-20'
          },
          {
            id: 'news-3',
            title: 'MP Advocates for Increased Mental Health Funding',
            excerpt: 'Hon. Kwabena Mintah Akandoh has called for significant increases in mental health funding during the latest budget discussions.',
            content: 'Hon. Kwabena Mintah Akandoh has called for significant increases in mental health funding during the latest budget discussions. During his address to Parliament, he emphasized the growing mental health crisis and the urgent need for more resources to address this critical aspect of public health.',
            category: 'Policy',
            author: {
              name: 'Kwabena Mintah Akandoh',
              avatar: '/kma.jpg'
            },
            readTime: '4 min read',
            image: 'https://3news.com/wp-content/uploads/2023/03/Akandoh-Mintah.png',
            dateAdded: '2024-05-15'
          }
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-pattern bg-repeat opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3"
          >
            <Newspaper className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Updates</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full" />
        </motion.div>

        {loading ? (
          <div className="flex justify-center">
            <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <time>{new Date(item.dateAdded).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}</time>
                    <span>•</span>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {item.excerpt}
                  </p>

                  <Link
                    to={`/blog/${item.id}`}
                    state={{ post: item }} // Pass the post state exactly like Blog.tsx does
                    className="inline-flex items-center font-semibold text-green-600 group-hover:text-green-700"
                  >
                    <span className="border-b-2 border-green-600 group-hover:border-green-700">Read more</span>
                    <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* View all news link */}
        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              View all news
              <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default News;