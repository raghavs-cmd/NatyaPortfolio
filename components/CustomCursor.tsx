import React, { useState, useEffect } from 'react';
import { motion as motionUntyped, useSpring } from 'framer-motion';

const motion = motionUntyped as any;

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    // Spring-animated values for cursor position
    const cursorX = useSpring(-100, { stiffness: 500, damping: 50 });
    const cursorY = useSpring(-100, { stiffness: 500, damping: 50 });

    useEffect(() => {
        // Update cursor position on mouse move
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        // Detect hover over elements with 'data-hoverable' attribute
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

    // Variants for the cursor's appearance (size, color)
    const cursorVariants = {
        default: {
            width: 32,
            height: 32,
            border: '2px solid #818cf8', // accent color
            backgroundColor: 'rgba(129, 140, 248, 0.1)',
        },
        hovered: {
            width: 50,
            height: 50,
            border: '2px solid #6366f1', // darker accent color
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
        }
    };

    return (
        // This parent div tracks the mouse position
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[100]"
            style={{ x: cursorX, y: cursorY } as any}
        >
            {/* This child div handles the cursor's appearance and centering */}
            <motion.div
                className="rounded-full -translate-x-1/2 -translate-y-1/2"
                variants={cursorVariants}
                animate={isHovering ? 'hovered' : 'default'}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
        </motion.div>
    );
};

export default CustomCursor;