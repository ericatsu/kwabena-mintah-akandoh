import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Image {
  url: string;
  caption: string;
}

interface Event {
  id: number;
  title: string;
  description: string;
  event: string;
  images: Image[];
}

const Gallery = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

 const eventImages: Event[] = [
    {
      id: 1,
      title: 'Rural Electrification Drive',
      description: 'Installation of transformers and power lines to remote communities',
      event: 'Infrastructure',
      images: [
        { url: '/gallery/personal/1.jpeg', caption: 'Transformer installation in Kofikrom' },
        { url: '/gallery/personal/2.jpeg', caption: 'Community members celebrating new electricity access' },
        { url: '/gallery/personal/3.jpeg', caption: 'Night view showing newly installed streetlights' },
        { url: '/gallery/personal/4.jpeg', caption: 'Engineers testing power supply lines' }
      ]
    },
    {
      id: 2,
      title: 'CHPS Compound Commissioning',
      description: 'Opening new Community-based Health Planning and Services centers',
      event: 'Healthcare',
      images: [
        { url: '/gallery/personal/5.jpeg', caption: 'Ribbon-cutting ceremony at Juaboso CHPS compound' },
        { url: '/gallery/personal/6.jpeg', caption: 'Healthcare staff at the newly furnished facility' },
        { url: '/gallery/personal/7.jpeg', caption: 'Residents accessing free medical screening services' },
        { url: '/gallery/personal/8.jpeg', caption: 'Solar-powered medical storage unit' }
      ]
    },
    {
      id: 3,
      title: 'Public Library Launch',
      description: 'Promoting literacy by building and stocking libraries across the constituency',
      event: 'Education',
      images: [
        { url: '/gallery/personal/9.jpeg', caption: 'Inauguration of the new public library in Asempaneye' },
        { url: '/gallery/personal/10.jpeg', caption: 'Students enjoying the reading area' },
        { url: '/gallery/personal/11.jpeg', caption: 'Shelves filled with academic and story books' },
        { url: '/gallery/personal/12.jpeg', caption: 'ICT section for digital learning and research' }
      ]
    },
    {
      id: 4,
      title: 'Women’s Empowerment Workshop',
      description: 'Training and mentorship for women entrepreneurs and community leaders',
      event: 'Community Development',
      images: [
        { url: '/gallery/personal/13.jpeg', caption: 'Workshop participants learning bead-making' },
        { url: '/gallery/personal/14.jpeg', caption: 'Group discussion on small business finance' },
        { url: '/gallery/personal/15.jpeg', caption: 'Mentorship session with successful female leaders' },
        { url: '/gallery/personal/16.jpeg', caption: 'Graduation ceremony for program participants' }
      ]
    },
    {
      id: 5,
      title: 'Agric Extension Program',
      description: 'Boosting local agriculture through modern farming techniques',
      event: 'Agriculture',
      images: [
        { url: '/gallery/personal/17.jpeg', caption: 'Farmers receiving training on fertilizer application' },
        { url: '/gallery/personal/18.jpeg', caption: 'Demonstration of improved seed varieties' },
        { url: '/gallery/personal/19.jpeg', caption: 'Mechanized equipment introduced to cocoa farmers' },
        { url: '/gallery/personal/20.jpeg', caption: 'Visit to a model farm practicing organic methods' }
      ]
    },
    {
      id: 6,
      title: 'Community Water Supply Project',
      description: 'Providing clean and accessible water sources in rural areas',
      event: 'Water & Sanitation',
      images: [
        { url: '/gallery/personal/21.jpeg', caption: 'Borehole drilling in a remote village' },
        { url: '/gallery/personal/22.jpeg', caption: 'Completed water storage tank at Boinzan' },
        { url: '/gallery/personal/23.jpeg', caption: 'Local women fetching water from newly installed taps' },
        { url: '/gallery/personal/24.jpeg', caption: 'Water treatment facility unveiling' }
      ]
    }
  ];

  const openModal = (event: Event) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const goToNextImage = () => {
    if (!selectedEvent) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedEvent.images.length);
  };

  const goToPrevImage = () => {
    if (!selectedEvent) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Project Gallery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Exploring our development initiatives and community projects across Juaboso Constituency</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventImages.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => openModal(event)}
            >
              <img
                src={event.images[0].url}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full mb-2">
                    {event.event}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{event.images.length} photos</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-2xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Main Image Container */}
              <div className="relative h-64 md:h-96 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`image-${currentImageIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    src={selectedEvent.images[currentImageIndex].url}
                    alt={selectedEvent.images[currentImageIndex].caption}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* Image Information Bar */}
              <div className="p-4 border-b border-gray-200 min-h-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`caption-${currentImageIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <h3 className="text-xl font-semibold text-gray-800">
                      {selectedEvent.images[currentImageIndex].caption}
                    </h3>
                  </motion.div>
                </AnimatePresence>
                <div className="w-24 h-1 bg-gray-200 mt-3 mb-2 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-emerald-500"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((currentImageIndex + 1) / selectedEvent.images.length) * 100}%`
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Navigation Area */}
              <div className="flex items-center justify-between p-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                  }}
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors focus:outline-none"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  <span>Back</span>
                </button>

                {/* Navigation Buttons - Conditionally render only if there are multiple images */}
                {selectedEvent.images.length > 1 && (
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goToPrevImage();
                      }}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>

                    <motion.div
                      key={`counter-${currentImageIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm text-gray-500"
                    >
                      {currentImageIndex + 1} / {selectedEvent.images.length}
                    </motion.div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goToNextImage();
                      }}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {selectedEvent.images.length > 1 && (
                <div className="p-4 bg-gray-50 hidden md:block">
                  <div className="flex items-center justify-center gap-2 overflow-x-auto">
                    {selectedEvent.images.map((image, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative w-16 h-16 cursor-pointer transition-all duration-200 ${idx === currentImageIndex
                            ? 'ring-2 ring-emerald-500 opacity-100'
                            : 'opacity-70 hover:opacity-100'
                          }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                      >
                        <img
                          src={image.url}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover rounded"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;