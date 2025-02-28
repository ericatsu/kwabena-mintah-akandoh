import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Contact = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-green-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] bg-repeat opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Reach out to our office for inquiries, feedback, or support. We're here to serve the people of Juaboso Constituency.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Mail className="w-8 h-8" />,
              title: "Email",
              content: "minister4@moh.gov.gh",
              action: "Write to us",
              link: "mailto:minister4@moh.gov.gh"
            },
            {
              icon: <Phone className="w-8 h-8" />,
              title: "Phone",
              content: "+233 302 665651",
              action: "Call us",
              link: "tel:+233302665651"
            },
            {
              icon: <MapPin className="w-8 h-8" />,
              title: "Office",
              content: "Ministry of Health, Ridge, Accra",
              action: "Visit us",
              link: "#"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">{item.content}</p>
                <a
                  href={item.link}
                  className="inline-flex items-center font-semibold text-green-600 hover:text-green-700"
                >
                  <span className="border-b-2 border-green-600 hover:border-green-700">
                    {item.action}
                  </span>
                  <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
