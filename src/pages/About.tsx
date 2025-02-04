import { motion } from 'framer-motion'
import { Award, BookOpen, Users, Briefcase } from 'lucide-react'

const About = () => {
    const milestones = [
        {
            year: '2013',
            title: 'Entered Parliament',
            description: 'Elected as Member of Parliament for Juaboso Constituency'
        },
        {
            year: '2021',
            title: 'Health Committee',
            description: 'Appointed as Ranking Member on the Parliamentary Health Committee'
        },
        {
            year: '2024',
            title: 'Minister-Designate',
            description: 'Nominated as Minister for Health'
        }
    ]

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative bg-emerald-800 text-white py-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        About Hon. K. M. Akandoh
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-emerald-100 max-w-3xl"
                    >
                        Dedicated public servant, healthcare advocate, and community leader
                        serving the people of Juaboso Constituency.
                    </motion.p>
                </div>
            </motion.section>

            {/* Biography Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="/path-to-image.jpg"
                                alt="Hon. K. M. Akandoh"
                                className="rounded-lg shadow-xl"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Biography</h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    Hon. Kwabena Mintah Akandoh has dedicated his career to public
                                    service and community development. As the Member of Parliament
                                    for Juaboso Constituency, he has consistently championed
                                    healthcare reforms and community development initiatives.
                                </p>
                                <p>
                                    With a background in [Education/Field], he brings valuable
                                    expertise to his role as Minister-designate for Health,
                                    focusing on improving healthcare access and quality across Ghana.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center text-gray-800 mb-12"
                    >
                        Political Journey
                    </motion.h2>
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200" />

                        {/* Timeline Items */}
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`relative flex items-center justify-${index % 2 === 0 ? 'start' : 'end'} mb-8`}
                            >
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                                    <div className="bg-white p-6 rounded-lg shadow-lg">
                                        <span className="text-emerald-600 font-semibold">{milestone.year}</span>
                                        <h3 className="text-xl font-semibold text-gray-800 mt-2">{milestone.title}</h3>
                                        <p className="text-gray-600 mt-2">{milestone.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About