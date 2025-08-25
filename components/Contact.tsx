import React from 'react';
import { motion as motionUntyped } from 'framer-motion';
import { PERSONAL_DETAILS } from '../constants';

const motion = motionUntyped as any;

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        {children}
    </h2>
);

const Contact = () => {
    return (
        <section id="contact" className="relative">
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* The animated map component was previously here but was unused and has been removed to resolve a runtime error. */}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto text-center relative z-10"
            >
                <SectionTitle>Get In Touch</SectionTitle>
                <p className="max-w-xl mx-auto text-lg text-secondary/80 mb-8">
                    My inbox is always open. Whether you have a question, a project proposal, or just want to say hello, I'll get back to you!
                </p>
                <motion.a
                    href={`mailto:${PERSONAL_DETAILS.email}`}
                    className="inline-block px-8 py-3 text-lg font-medium rounded-md text-primary bg-accent hover:opacity-90 transition-opacity"
                    data-hoverable
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Say Hello
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Contact;