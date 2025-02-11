import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-[200px]">
            <motion.div
                className="flex space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-3 h-3 bg-emerald-600 rounded-full"
                        animate={{
                            y: ["0%", "-50%", "0%"],
                        }}
                        transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default Loading;