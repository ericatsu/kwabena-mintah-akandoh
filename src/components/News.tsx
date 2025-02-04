import { motion } from 'framer-motion';
import { Newspaper, Calendar, ChevronRight, Eye } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      date: "2024-03-15",
      title: "Healthcare Initiative Launch",
      excerpt: "New healthcare initiative launched in Juaboso Constituency to improve medical access.",
      category: "Healthcare",
      readTime: "3 min read",
      link: "#"
    },
    {
      date: "2024-03-10",
      title: "Parliament Address on Healthcare",
      excerpt: "Delivered a compelling address in Parliament regarding healthcare reforms.",
      category: "Parliament",
      readTime: "4 min read",
      link: "#"
    },
    {
      date: "2024-03-05",
      title: "Community Development Project",
      excerpt: "New development project initiated to enhance infrastructure in rural areas.",
      category: "Development",
      readTime: "2 min read",
      link: "#"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] bg-repeat opacity-30" />
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

        <div className="grid lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
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

                <a
                  href={item.link}
                  className="inline-flex items-center font-semibold text-green-600 group-hover:text-green-700"
                >
                  <span className="border-b-2 border-green-600 group-hover:border-green-700">Read more</span>
                  <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
