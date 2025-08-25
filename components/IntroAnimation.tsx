import React from 'react';
import { motion as motionUntyped, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Center, Text3D } from '@react-three/drei';

const motion = motionUntyped as any;

interface IntroAnimationProps {
    isVisible: boolean;
}

const IntroAnimation = ({ isVisible }: IntroAnimationProps) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 bg-primary z-[200] flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, transition: { duration: 1, delay: 0.2, type: 'spring' } }}
                        exit={{ scale: 1.5, opacity: 0, transition: { duration: 0.5 } }}
                        className="w-64 h-64"
                    >
                        <Canvas>
                            <ambientLight intensity={0.8} />
                            <pointLight position={[10, 10, 10]} />
                            <Center>
                                <Text3D font={"https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/fonts/helvetiker_regular.typeface.json"} size={5} height={1}>
                                    NS
                                    <meshStandardMaterial color="#818cf8" />
                                </Text3D>
                            </Center>
                        </Canvas>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroAnimation;