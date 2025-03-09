import { motion } from 'framer-motion';
import { Newspaper, Calendar, ChevronRight, Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface NewsItem {
  id?: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  link: string;
  content?: string;
  image?: string;
  author?: {
    name: string;
    avatar: string;
  };
  dateAdded?: string;
}

const News = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        // Fetch news data from your JSON file
        const response = await fetch('/kma-news.json');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }

        const data = await response.json();

        // Transform and process the data
        const processedItems = data
          .filter((item: any) => item.title && item.url) // Filter out incomplete items
          .slice(0, 3) // Take only the first 3 items
          .map((item: any, index: number) => ({
            id: `news-${index}`,
            date: item.date || new Date().toISOString(),
            title: item.title,
            excerpt: item.excerpt || "Read more about this important update...",
            category: item.category || "News",
            readTime: item.readTime || "3 min read",
            link: `/blog/${item.url.split('/').pop() || index}`,
            content: item.content || item.title,
            image: item.imageUrl || 'https://3news.com/wp-content/uploads/2023/03/Akandoh-Mintah.png',
            dateAdded: item.date || new Date().toISOString(),
            author: {
              name: 'Kwabena Mintah Akandoh',
              avatar: '/kma.jpg'
            }
          }));

        setNewsItems(processedItems);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to load news items');

        // Fallback data if fetch fails
        setNewsItems([
          {
            id: 'news-1',
            date: '2024-02-15',
            title: 'Health Minister Advocates for Increased Healthcare Funding',
            excerpt: 'Speaking at the annual health budget review, the Minister emphasized the need for substantial investment in healthcare infrastructure.',
            category: 'Healthcare',
            readTime: '4 min read',
            link: '/blog/healthcare-funding',
            image: '/images/healthcare-funding.jpg',
            author: {
              name: 'Kwabena Mintah Akandoh',
              avatar: '/kma.jpg'
            }
          },
          // Add 2 more fallback items
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
                key={item.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              >
                {/* Optional image at the top */}
                {item.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <time>{new Date(item.date).toLocaleDateString('en-GB', {
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
                    to={item.link}
                    state={{ post: item }} // Pass the full item as post state
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