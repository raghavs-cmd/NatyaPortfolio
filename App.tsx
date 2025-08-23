import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CustomCursor from './components/CustomCursor';
import IntroAnimation from './components/IntroAnimation';
import { FloatingShapes } from './components/canvas/FloatingShapes';
import { Canvas } from '@react-three/fiber';
import type { Project } from './types';

const App: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowIntro(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    const openProjectModal = (project: Project) => {
        setSelectedProject(project);
    };

    const closeProjectModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="relative">
            <IntroAnimation isVisible={showIntro} />
            <CustomCursor />
            <div className={`transition-opacity duration-500 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
                <div className="absolute inset-0 z-0">
                    <Canvas camera={{ position: [0, 0, 4.5] }}>
                        <FloatingShapes />
                    </Canvas>
                </div>
                <div className="relative z-10">
                    <Header />
                    <main>
                        <Hero />
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 sm:space-y-36 my-20">
                            <About />
                            <Projects onProjectClick={openProjectModal} />
                            <Skills />
                            <Experience />
                            <Contact />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={closeProjectModal}
            />
        </div>
    );
};

export default App;