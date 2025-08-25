import React from 'react';
import { motion as motionUntyped } from 'framer-motion';

const motion = motionUntyped as any;

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        {children}
    </h2>
);

const About = () => {
    return (
        <section id="about">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <SectionTitle>About Me</SectionTitle>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-4xl mx-auto">
                    {/* --- IMAGE PLACEHOLDER --- */}
                    <motion.div 
                        className="relative w-48 h-48 sm:w-60 sm:h-60 flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        {/* 
                          INSTRUCTIONS TO ADD YOUR PHOTO:
                          1. Create a folder named 'assets' in the root directory of your project (the same level as 'index.html').
                          2. Place your profile picture inside this 'assets' folder (e.g., 'natya.jpeg').
                          3. The `src` attribute below is set to "/assets/natya.jpeg". The leading slash means the browser will look for the 'assets' folder from the root of the site.
                          4. If your image has a different name, just update the path below.
                        */}
                        <img
                            src="public/Natya.jpg"
                            alt="Natya Sowparnika"
                            className="w-full h-full rounded-full object-cover border-4 border-accent/30 shadow-lg"
                        />
                    </motion.div>
                    
                    {/* --- TEXT CONTENT --- */}
                    <div className="max-w-lg text-center md:text-left">
                        <p className="text-lg sm:text-xl text-secondary/80 leading-relaxed">
                            I'm Natya, a UI/UX designer who travels to the future. I find every potential user rage-quit before it happens, then I return to build an experience that's not only frustration-proof  but also a genuine pleasure to look at ! In short i create digital experiences that don't require a user manual or deep breathing😊
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
