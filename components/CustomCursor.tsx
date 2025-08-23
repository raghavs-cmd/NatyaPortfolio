import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useSpring(-100, { stiffness: 500, damping: 50 });
    const cursorY = useSpring(-100, { stiffness: 500, damping: 50 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            if (e.target instanceof Element && e.target.closest('[data-hoverable]')) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            if (e.target instanceof Element && e.target.closest('[data-hoverable]')) {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);
        
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, [cursorX, cursorY]);

    const cursorVariants = {
        default: {
            width: 32,
            height: 32,
            border: '2px solid #818cf8', // accent-dark
            backgroundColor: 'rgba(129, 140, 248, 0.1)',
            x: '-50%',
            y: '-50%',
        },
        hovered: {
            width: 50,
            height: 50,
            border: '2px solid #6366f1', // accent-light
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            x: '-50%',
            y: '-50%',
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[100]"
            style={{
                translateX: cursorX,
                translateY: cursorY,
            }}
            variants={cursorVariants}
            animate={isHovering ? 'hovered' : 'default'}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
    );
};

export default CustomCursor;
