import React from 'react';
import { motion as motionUntyped } from 'framer-motion';
import { EXPERIENCE, EDUCATION } from '../constants';
import type { ExperienceItem } from '../types';

const motion = motionUntyped as any;

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        {children}
    </h2>
);

const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M12 12h.01"/></svg>;
const GraduationCapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.084a1 1 0 0 0 0 1.838l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>;

const TimelineItem = ({ item, isLast, icon }: { item: ExperienceItem; isLast: boolean; icon: React.ReactNode }) => {
    return (
        <motion.div 
            className="relative pl-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 300 } }}
            data-hoverable
        >
            <div className="absolute left-[-8px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-primary text-accent">
                {icon}
            </div>
            {!isLast && <div className="absolute left-[6px] top-8 w-0.5 h-full bg-gray-600"></div>}
            
            <p className="text-sm font-semibold text-secondary/60">{item.date}</p>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <h4 className="text-md text-accent">{item.company}</h4>
            <p className="mt-1 text-secondary/80">{item.description}</p>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="experience">
            <SectionTitle>Experience & Education</SectionTitle>
            <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
                <div>
                    <h3 className="text-2xl font-bold text-center mb-8">Experience</h3>
                    <div className="space-y-8">
                        {EXPERIENCE.map((item, index) => (
                            <TimelineItem key={index} item={item} isLast={index === EXPERIENCE.length - 1} icon={<BriefcaseIcon />} />
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-center mb-8">Education</h3>
                    <div className="space-y-8">
                        {EDUCATION.map((item, index) => (
                            <TimelineItem key={index} item={item} isLast={index === EDUCATION.length - 1} icon={<GraduationCapIcon />} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;