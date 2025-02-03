import { motion } from 'framer-motion';
import { Newspaper, ArrowRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      date: "2024-03-15",
      title: "Healthcare Initiative Launch",
      excerpt: "New healthcare initiative launched in Juaboso Constituency to improve medical access.",
      link: "#"
    },
    {
      date: "2024-03-10",
      title: "Parliament Address on Healthcare",
      excerpt: "Delivered a compelling address in Parliament regarding healthcare reforms.",
      link: "#"
    },
    {
      date: "2024-03-05",
      title: "Community Development Project",
      excerpt: "New development project initiated to enhance infrastructure in rural areas.",
      link: "#"
    }
  ];

  return (
    <section id="news" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Newspaper className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h2 className="section-title">Latest Updates</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
            >
              <div className="p-6">
                <time className="text-sm text-green-600 font-medium">
                  {new Date(item.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
                <h3 className="mt-2 text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {item.excerpt}
                </p>
                <a
                  href={item.link}
                  className="mt-4 inline-flex items-center text-green-600 hover:text-green-700"
                >
                  Read more
                  <ArrowRight className="ml-2 w-4 h-4" />
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
