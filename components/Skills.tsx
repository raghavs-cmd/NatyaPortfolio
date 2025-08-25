import React from 'react';
import { motion as motionUntyped } from 'framer-motion';
import { SKILLS } from '../constants';

const motion = motionUntyped as any;

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        {children}
    </h2>
);

const Skills = () => {
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section id="skills">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <SectionTitle>My Skills</SectionTitle>
                <div className="space-y-12">
                    {SKILLS.map((category) => (
                        <div key={category.title}>
                            <h3 className="text-2xl font-semibold mb-8 text-center">{category.title}</h3>
                            <motion.div 
                                className="flex flex-wrap justify-center gap-3 sm:gap-4"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {category.skills.map((skill) => (
                                    <motion.div 
                                        key={skill.name}
                                        className="bg-glass px-4 py-2 rounded-lg text-md font-medium border border-white/5 shadow-sm flex items-center gap-2"
                                        variants={itemVariants}
                                        whileHover={{ y: -3, scale: 1.05 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                        data-hoverable
                                    >
                                        {skill.icon}
                                        <span>{skill.name}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;