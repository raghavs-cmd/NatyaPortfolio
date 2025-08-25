import React from 'react';
import { motion as motionUntyped, AnimatePresence } from 'framer-motion';
import ProcessTimeline from './ProcessTimeline';
import type { Project } from '../types';

const motion = motionUntyped as any;

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);

const AntiAgingPrototype = () => (
    <div className="w-full aspect-video bg-white rounded-lg shadow-xl p-4 flex flex-col gap-3 border border-slate-200 text-slate-900">
        {/* Header */}
        <div className="flex justify-between items-center px-2">
            <div className="w-16 h-4 bg-slate-200 rounded"></div>
            <div className="flex gap-3">
                <div className="w-12 h-3 bg-slate-200 rounded"></div>
                <div className="w-12 h-3 bg-slate-200 rounded"></div>
                <div className="w-12 h-3 bg-slate-200 rounded"></div>
            </div>
        </div>
        {/* Hero */}
        <div className="flex-grow flex gap-4 px-2 pb-2">
            <div className="w-1/2 flex flex-col gap-2 justify-center">
                <div className="w-3/4 h-6 bg-slate-300 rounded"></div>
                <div className="w-full h-3 bg-slate-200 rounded"></div>
                <div className="w-full h-3 bg-slate-200 rounded"></div>
                <div className="w-2/3 h-3 bg-slate-200 rounded"></div>
                <div className="w-24 h-8 bg-slate-400 rounded mt-2"></div>
            </div>
            <div className="w-1/2 bg-slate-200 rounded-md"></div>
        </div>
    </div>
);


const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                        className="bg-glass/95 backdrop-blur-xl border border-white/5 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors z-10" data-hoverable>
                            <XIcon />
                        </button>
                        
                        <div className="p-8">
                            <h2 className="text-3xl font-bold mb-2 text-accent">{project.title}</h2>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-white/5 rounded-full">{tag}</span>)}
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Problem</h3>
                                    <p className="text-secondary/80">{project.detail.problem}</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Outcome</h3>
                                    <p className="text-secondary/80">{project.detail.outcome}</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Process</h3>
                                    <ProcessTimeline process={project.detail.process} />
                                </div>

                                {project.detail.prototypeUrl && (
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Interactive Prototype</h3>
                                        <motion.a
                                            href={project.detail.prototypeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-accent"
                                            data-hoverable
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Open Figma Prototype
                                            <ExternalLinkIcon />
                                        </motion.a>
                                    </div>
                                )}
                                
                                {project.detail.prototype === 'custom' && project.id === 'proj-01' ? (
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Prototype</h3>
                                        <AntiAgingPrototype />
                                    </div>
                                ) : project.detail.figmaUrl ? (
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Figma Prototype</h3>
                                        <div className="aspect-video w-full rounded-md overflow-hidden border border-white/10">
                                            <iframe
                                                style={{ border: 'none' }}
                                                width="100%"
                                                height="100%"
                                                src={project.detail.figmaUrl}
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;