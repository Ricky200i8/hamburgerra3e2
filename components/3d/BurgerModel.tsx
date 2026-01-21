import "@/global.css";
import React, { useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import { BURGER_PARTS } from '../../constants/burgerParts';
import { BurgerModelProps } from '../../types/burger.types';
import BurgerPart from './BurgerPart';

/**
 * Componente BurgerModel
 * Ensambla todas las partes de la hamburguesa
 */
export default function BurgerModel({
    animated = true,
    autoRotate = true,
    scale = 1,
}: BurgerModelProps) {
    const groupRef = useRef<any>(null);

    useEffect(() => {
        if (!groupRef.current || !autoRotate) return;

        // Aquí iría la lógica de rotación automática
        // usando requestAnimationFrame o react-spring
        let animationId: number;
        let rotation = 0;

        const animate = () => {
            rotation += 0.01;
            // En Three.js: groupRef.current.rotation.y = rotation;
            animationId = requestAnimationFrame(animate);
        };

        if (autoRotate) {
            animationId = requestAnimationFrame(animate);
        }

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [autoRotate]);

    return (
        <View
            ref={groupRef}
            className="flex-1 items-center justify-center relative"
            style={{
                transform: [{ scale }],
            }}
        >
            {/* Renderizar todas las partes ordenadas */}
            {BURGER_PARTS.sort((a, b) => a.order - b.order).map((partConfig) => (
                <BurgerPart
                    key={partConfig.name}
                    config={partConfig}
                    animated={animated}
                    animationDelay={partConfig.order * 0.1}
                    visible={true}
                />
            ))}

            {/* Indicador visual del modelo completo */}
            <View className="absolute bottom-4 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <Text className="text-sm text-gray-700 font-medium">
                    🍔 Modelo 3D ({BURGER_PARTS.length} partes)
                </Text>
            </View>
        </View>
    );
}
