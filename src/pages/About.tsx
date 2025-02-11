import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    Award,
    Building,
    Target,
    Users,
    Heart,
    ChevronDown,
    Shield,
    Globe,
    LucideIcon
} from 'lucide-react';
import { API_BASE_URL } from '@/lib/utils';
import { IMilestone, ICoreValue, IAchievement, IFAQ } from '@/types/about';
import Loading from '@/utils/Loading';

const iconMap: Record<string, LucideIcon> = {
    Building,
    Shield,
    Award,
    Target,
    Users,
    Heart,
    Globe
};

const About = () => {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [milestones, setMilestones] = useState<IMilestone[]>([]);
    const [coreValues, setCoreValues] = useState<ICoreValue[]>([]);
    const [achievements, setAchievements] = useState<IAchievement[]>([]);
    const [faqs, setFaqs] = useState<IFAQ[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [milestonesRes, coreValuesRes, achievementsRes, faqsRes] = await Promise.all([
                    fetch(`${API_BASE_URL}/milestones`),
                    fetch(`${API_BASE_URL}/core-values`),
                    fetch(`${API_BASE_URL}/achievements`),
                    fetch(`${API_BASE_URL}/faqs`)
                ]);

                const milestonesData = await milestonesRes.json();
                const coreValuesData = await coreValuesRes.json();
                const achievementsData = await achievementsRes.json();
                const faqsData = await faqsRes.json();

                setMilestones(milestonesData.map((milestone: any) => ({
                    ...milestone,
                    year: new Date(milestone.date).getFullYear().toString(),
                    icon: iconMap[milestone.icon as keyof typeof iconMap] || Building
                })));

                setCoreValues(coreValuesData.map((value: any) => ({
                    ...value,
                    icon: iconMap[value.icon as keyof typeof iconMap] || Heart
                })));

                setAchievements(achievementsData.map((achievement: any) => ({
                    ...achievement,
                    stats: `${achievement.stats}+`
                })));

                setFaqs(faqsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-24 overflow-hidden"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-700/30 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/30 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Serving the People of Juaboso
                        </h1>
                        <p className="text-xl text-emerald-100 mb-8">
                            Dedicated to improving healthcare, fostering community development,
                            and creating lasting positive change in Ghana.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex-1 min-w-[200px]"
                                >
                                    <div className="text-3xl font-bold text-emerald-300">
                                        {achievement.stats}
                                    </div>
                                    <div className="text-sm text-emerald-100">
                                        {achievement.description}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Biography Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-emerald-400 rounded-2xl transform rotate-3" />
                            <img
                                src="/kma.jpg"
                                alt="Hon. K. M. Akandoh"
                                className="relative rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl font-bold text-gray-900">Biography</h2>
                            <div className="space-y-6 text-lg text-gray-600">
                                <p>
                                    Hon. Kwabena Mintah Akandoh has established himself as a
                                    dedicated public servant with a proven track record of championing
                                    healthcare reforms and community development initiatives.
                                </p>
                                <p>
                                    As the Member of Parliament for Juaboso Constituency, he has
                                    consistently advocated for improved healthcare access, quality
                                    education, and sustainable development projects that benefit
                                    his constituents and all Ghanaians.
                                </p>
                                <p>
                                    In his role as Minister for Health, he brings valuable
                                    expertise and a vision for transforming Ghana's healthcare system
                                    through innovative policies and strategic implementations.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
                        <p className="text-xl text-gray-600">The principles that guide our service and commitment</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value: ICoreValue, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    {value.icon && <value.icon className="w-6 h-6 text-emerald-600" />}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Political Journey</h2>
                        <p className="text-xl text-gray-600">Key milestones in service to Ghana</p>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200" />

                        {milestones.map((milestone: IMilestone, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                            >
                                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                                                {milestone.icon && <milestone.icon className="w-6 h-6 text-emerald-600" />}
                                            </div>
                                            <span className="text-2xl font-bold text-emerald-600">
                                                {milestone.year}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600">
                            Common questions about our work and initiatives
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                                >
                                    <span className="text-lg font-semibold text-gray-900">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {expandedFaq === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-6 pb-4 text-gray-600"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;