import React, { useState, useEffect } from 'react';
import { motion as motionUntyped, useAnimation } from 'framer-motion';

const motion = motionUntyped as any;

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const controls = useAnimation();

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        controls.start({ rotate: 360, transition: { duration: 0.5 } });
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];
    const scrollToSection = (id: string) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-glass/80 shadow-md' : 'bg-transparent'}`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <motion.a 
                            href="#hero" 
                            onClick={handleLogoClick} 
                            className="text-xl md:text-2xl font-bold text-accent whitespace-nowrap"
                            animate={controls}
                            data-hoverable
                        >Natya Sowparnika</motion.a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollToSection(link); }} className="px-3 py-2 rounded-md text-sm font-medium text-secondary/80 hover:bg-white/10 transition-colors" data-hoverable>
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;