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
                            Design is my playground, and I show up ready to swing, slide, and build castles out of pixels. I dive into every project with curiosity, creativity, and a passion for making digital experiences not just better but unforgettable. With a background in Computer Science, I speak both design and tech fluently. This means I understand the "how" and the "why" behind every decision. What sets me apart? I bring my whole personality to the process. I’m the teammate who’ll brainstorm bold ideas, obsess over the tiniest details, tell the occasional bad joke, and keep things fun without ever losing focus. My mission is to design experiences that are beautiful, functional, and engaging while making sure that working together feels like the best part of your day.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
