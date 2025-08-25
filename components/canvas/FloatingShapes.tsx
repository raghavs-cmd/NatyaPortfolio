import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { inSphere } from 'maath/random';
import { Points, PointMaterial, Icosahedron, Dodecahedron } from '@react-three/drei';
import { Group } from 'three';

const Shape = ({ position }: { position: [number, number, number] }) => {
    const ref = useRef<Group>(null!);
    const [hovered, setHovered] = useState(false);
    const [geometryIndex] = useState(Math.floor(Math.random() * 2));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta * 0.1;
            ref.current.rotation.y += delta * 0.1;

            const t = state.clock.getElapsedTime();
            ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.2;
        }
    });

    return (
        <group ref={ref} position={position}>
            {geometryIndex === 0 ? (
                <Icosahedron args={[0.2]} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
                    <meshStandardMaterial color={hovered ? '#6366f1' : '#818cf8'} roughness={0.5} metalness={0.5} />
                </Icosahedron>
            ) : (
                <Dodecahedron args={[0.2]} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
                    <meshStandardMaterial color={hovered ? '#6366f1' : '#818cf8'} roughness={0.5} metalness={0.5} />
                </Dodecahedron>
            )}
        </group>
    );
};

const StarsBackground = () => {
    const ref = useRef<any>(null);
    const [sphere] = useState(() => inSphere(new Float32Array(5001), { radius: 6 }));

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#f8f8f8"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

export const FloatingShapes = () => {
    const groupRef = useRef<Group>(null!);
    // Reduced shape count and increased radius to spread them out
    const [sphere] = useState(() => inSphere(new Float32Array(15 * 3), { radius: 5.5 }));
    
    const positions = [];
    for (let i = 0; i < sphere.length; i += 3) {
        positions.push([sphere[i], sphere[i + 1], sphere[i + 2]]);
    }

    useFrame(({ mouse }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = mouse.x * 0.1;
            groupRef.current.rotation.x = -mouse.y * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            
            <StarsBackground />

            {positions.map((pos, i) => (
                <Shape key={i} position={pos as [number, number, number]} />
            ))}
        </group>
    );
};
