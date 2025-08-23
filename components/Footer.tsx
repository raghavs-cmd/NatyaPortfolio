import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_DETAILS } from '../constants';

const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const BehanceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" strokeWidth="0"><path d="M22.5 7.25a0.755,0.755,0,0,0,-0.75-0.75H16.5v-2a0.755,0.755,0,0,0,-0.75-0.75H9.75A0.755,0.755,0,0,0,9,4.5v1.25H6A0.755,0.755,0,0,0,5.25,6.5v12a0.755,0.755,0,0,0,.75,0.75h10.5a0.755,0.755,0,0,0,.75-0.75V18h2.25A2.758,2.758,0,0,0,22.5,15.25V7.25zM15,10.25h-4.5V8.75H15V10.25zM15,13.25h-4.5v-1.5H15V13.25zM19.5,15.25a1.25,1.25,0,0,1,-1.25,1.25H16.5V15h2.25a0.75,0.75,0,0,0,0,-1.5H16.5v-1.5h1.75a0.75,0.75,0,0,0,0,-1.5H16.5V9.75h2.25a0.75,0.75,0,0,0,0,-1.5H16.5V7.25h3a1.25,1.25,0,0,1,1.25,1.25V15.25z"></path></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;

const Footer: React.FC = () => {
    const socialLinks = [
        { name: 'LinkedIn', href: PERSONAL_DETAILS.linkedin, icon: <LinkedInIcon /> },
        { name: 'Behance', href: PERSONAL_DETAILS.behance, icon: <BehanceIcon /> },
        { name: 'Email', href: `mailto:${PERSONAL_DETAILS.email}`, icon: <MailIcon /> },
        { name: 'Phone', href: `tel:${PERSONAL_DETAILS.phone}`, icon: <PhoneIcon /> },
    ];

    return (
        <footer className="bg-glass/80 mt-20 backdrop-blur-sm border-t border-white/5">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center space-x-6 mb-8">
                    {socialLinks.map((link) => (
                        <motion.a 
                            key={link.name} 
                            href={link.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label={link.name}
                            className="text-secondary/70 hover:text-accent"
                            whileHover={{ scale: 1.2, y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            data-hoverable
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </div>
                <p className="text-secondary/60 text-sm">
                    &copy; {new Date().getFullYear()} {PERSONAL_DETAILS.name}. All Rights Reserved.
                </p>
                 <p className="mt-2 text-secondary/50 text-xs">
                    Designed & Built by Natya Sowparnika
                </p>
            </div>
        </footer>
    );
};

export default Footer;