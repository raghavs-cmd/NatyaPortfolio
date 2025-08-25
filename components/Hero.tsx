import React, { useState } from 'react';
import { motion as motionUntyped } from 'framer-motion';
import { PERSONAL_DETAILS } from '../constants';

const motion = motionUntyped as any;

const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const BehanceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" strokeWidth="0"><path d="M22.5 7.25a0.755,0.755,0,0,0,-0.75-0.75H16.5v-2a0.755,0.755,0,0,0,-0.75-0.75H9.75A0.755,0.755,0,0,0,9,4.5v1.25H6A0.755,0.755,0,0,0,5.25,6.5v12a0.755,0.755,0,0,0,.75,0.75h10.5a0.755,0.755,0,0,0,.75-0.75V18h2.25A2.758,2.758,0,0,0,22.5,15.25V7.25zM15,10.25h-4.5V8.75H15V10.25zM15,13.25h-4.5v-1.5H15V13.25zM19.5,15.25a1.25,1.25,0,0,1,-1.25,1.25H16.5V15h2.25a0.75,0.75,0,0,0,0,-1.5H16.5v-1.5h1.75a0.75,0.75,0,0,0,0,-1.5H16.5V9.75h2.25a0.75,0.75,0,0,0,0,-1.5H16.5V7.25h3a1.25,1.25,0,0,1,1.25,1.25V15.25z"></path></svg>;

const Hero = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    
    const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsAnimating(true);
        setTimeout(() => {
            window.open(PERSONAL_DETAILS.resumeUrl, '_blank', 'noopener,noreferrer');
            setIsAnimating(false);
        }, 500);
    };

    return (
        <section id="hero" className="relative w-full h-screen mx-auto flex items-center justify-center">
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl sm:text-7xl font-extrabold"
                >
                    Hi, I'm <span className="text-gradient">{PERSONAL_DETAILS.name}</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-4 text-xl sm:text-2xl text-secondary/70"
                >
                    {PERSONAL_DETAILS.role}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-8 flex flex-col sm:flex-row items-center gap-4"
                >
                    <motion.a 
                        href={PERSONAL_DETAILS.resumeUrl}
                        onClick={handleResumeClick}
                        className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-accent"
                        data-hoverable
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ transform: 'perspective(800px)' }}
                    >
                        <motion.span
                            animate={{ rotateX: isAnimating ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'inline-block', transformStyle: 'preserve-3d' }}
                        >
                            Download Resume
                        </motion.span>
                    </motion.a>
                    <div className="flex gap-4">
                        <a href={PERSONAL_DETAILS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border-2 border-secondary/50 hover:bg-secondary/10 transition-colors" data-hoverable>
                            <LinkedInIcon />
                        </a>
                        <a href={PERSONAL_DETAILS.behance} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border-2 border-secondary/50 hover:bg-secondary/10 transition-colors" data-hoverable>
                           <BehanceIcon/>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;