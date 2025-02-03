import { motion } from 'framer-motion';
import { Image } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      url: "https://example.com/image1.jpg",
      caption: "Meeting with community leaders"
    },
    {
      url: "https://example.com/image2.jpg",
      caption: "Healthcare facility inauguration"
    },
    {
      url: "https://example.com/image3.jpg",
      caption: "Parliamentary session"
    },
    {
      url: "https://example.com/image4.jpg",
      caption: "Community outreach program"
    },
    {
      url: "https://example.com/image5.jpg",
      caption: "Education initiative launch"
    },
    {
      url: "https://example.com/image6.jpg",
      caption: "Infrastructure development project"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Image className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h2 className="section-title">Photo Gallery</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-md aspect-video card-hover"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
