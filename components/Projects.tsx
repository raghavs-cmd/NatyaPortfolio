import React from 'react';
import { motion as motionUntyped } from 'framer-motion';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import type { Project } from '../types';

const motion = motionUntyped as any;

interface ProjectsProps {
    onProjectClick: (project: Project) => void;
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        {children}
    </h2>
);

const Projects = ({ onProjectClick }: ProjectsProps) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <section id="projects">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6 }}
            >
                <SectionTitle>My Projects</SectionTitle>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} onClick={() => onProjectClick(project)} />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;