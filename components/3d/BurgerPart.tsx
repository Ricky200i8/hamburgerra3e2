import { useGLTF } from '@react-three/drei/native';
import { useFrame } from '@react-three/fiber/native';
import React, { useRef } from 'react';
import { Group } from 'three';
import { BurgerPartProps } from '../../types/burger.types';

const BurgerPart: React.FC<BurgerPartProps> = ({ config, index, isAssembled }) => {
    // Cargar el modelo GLTF
    const { scene } = useGLTF(config.modelPath) as any;
    const meshRef = useRef<Group>(null);

    // Posición inicial (ensamblada)
    const targetY = config.position.y;

    // Altura de "explosión" para la vista desensamblada
    // Calculamos una separación basada en el índice para que se expandan verticalmente
    const explodedY = targetY + (index - 3) * 0.5; // Ajustar factor de separación según necesites

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Animación simple de interpolación hacia la posición objetivo
            const targetPositionY = isAssembled ? targetY : explodedY;

            // Interpolación lineal simple (lerp) para suavidad
            meshRef.current.position.y += (targetPositionY - meshRef.current.position.y) * 5 * delta;

            // Rotación suave si no está ensamblada (opcional visual effect)
            if (!isAssembled) {
                // meshRef.current.rotation.y += delta * 0.2;
            } else {
                // Reset rotación al ensamblar si es necesario
                // meshRef.current.rotation.y += (0 - meshRef.current.rotation.y) * 5 * delta;
            }
        }
    });

    return (
        <primitive
            ref={meshRef}
            object={scene}
            position={[config.position.x, targetY, config.position.z]}
            scale={[config.scale, config.scale, config.scale]}
            rotation={[config.rotation.x, config.rotation.y, config.rotation.z]}
        />
    );
};

export default BurgerPart;
