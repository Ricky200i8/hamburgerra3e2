import { useFrame } from '@react-three/fiber/native';
import React, { useRef } from 'react';
import { Group } from 'three';
import { BURGER_PARTS } from '../../constants/burgerParts';
import { BurgerModelProps } from '../../types/burger.types';
import BurgerPart from './BurgerPart';

const BurgerModel: React.FC<BurgerModelProps> = ({ isAssembled, isAutoRotating }) => {
    const groupRef = useRef<Group>(null);

    useFrame((state, delta) => {
        if (isAutoRotating && groupRef.current) {
            groupRef.current.rotation.y += delta * 0.5;
        }
    });

    // Precarga eliminada para evitar conflictos de tipos con require() en React Native
    // Los modelos se cargarán individualmente en cada BurgerPart


    return (
        <group ref={groupRef} position={[0, -1, 0]}>
            {/* Ajustamos position para centrar el modelo verticalmente */}
            {BURGER_PARTS.map((part, index) => (
                <BurgerPart
                    key={part.name}
                    config={part}
                    index={index}
                    isAssembled={isAssembled}
                />
            ))}
        </group>
    );
};

export default BurgerModel;
