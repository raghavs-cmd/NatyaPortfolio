import React from 'react';
import { motion } from 'framer-motion';
import type { ProcessStep } from '../types';

interface ProcessTimelineProps {
    process: ProcessStep[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ process }) => {
    return (
        <motion.div 
            className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-4"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            {process.map((item, index) => (
                <motion.div key={item.step} className="flex-1 text-center" variants={itemVariants}>
                    <div className="flex items-center justify-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-accent-light dark:bg-accent-dark text-secondary dark:text-primary flex items-center justify-center font-bold">{index + 1}</div>
                    </div>
                    <h4 className="font-bold mb-1">{item.step}</h4>
                    <p className="text-sm text-primary/70 dark:text-secondary/70">{item.description}</p>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ProcessTimeline;
