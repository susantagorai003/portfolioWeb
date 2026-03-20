import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float } from '@react-three/drei';

const HeroScene = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      // Rotation
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
      
      // Slight mouse interaction
      meshRef.current.position.x = (state.pointer.x * 0.5);
      meshRef.current.position.y = (state.pointer.y * 0.5);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[1.5, 2]} position={[0, 0, 0]}>
        <MeshDistortMaterial 
          color="#8B5CF6" 
          emissive="#3B82F6"
          emissiveIntensity={0.5}
          wireframe={true} 
          distort={0.4} 
          speed={2} 
          roughness={0.2} 
          metalness={0.8}
        />
      </Icosahedron>
    </Float>
  );
};

export default HeroScene;
