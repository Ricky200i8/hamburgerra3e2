import React, { useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import { useGLTFLoader } from '../../hooks/useGLTFLoader';
import { BurgerPartProps } from '../../types/burger.types';

/**
 * Componente BurgerPart
 * Representa una parte individual de la hamburguesa
 */
export default function BurgerPart({
    config,
    animated = false,
    animationDelay = 0,
    visible = true,
}: BurgerPartProps) {
    const { model, loadingState } = useGLTFLoader(config.modelPath);
    const meshRef = useRef<any>(null);

    useEffect(() => {
        if (!meshRef.current || !animated) return;

        // Aquí iría la lógica de animación con Three.js
        // Por ejemplo, usando react-spring o animaciones de Three.js
    }, [animated, animationDelay]);

    if (!visible) return null;

    if (loadingState.isLoading) {
        return (
            <View className="items-center justify-center p-2">
                <Text className="text-xs text-gray-500">
                    Cargando {config.name}...
                </Text>
            </View>
        );
    }

    if (loadingState.error) {
        return (
            <View className="items-center justify-center p-2">
                <Text className="text-xs text-red-500">
                    Error: {config.name}
                </Text>
            </View>
        );
    }

    // En una implementación real con Three.js, aquí renderizarías el modelo 3D
    // usando <primitive object={model.scene} /> o similar
    return (
        <View
            className="absolute items-center justify-center"
            style={{
                transform: [
                    { translateX: config.position.x * 50 },
                    { translateY: config.position.y * 50 },
                ],
            }}
        >
            {/* Placeholder visual para la parte */}
            <View className="bg-orange-400 rounded-full w-16 h-16 items-center justify-center shadow-lg border-2 border-orange-600">
                <Text className="text-white font-bold text-xs text-center">
                    {config.name}
                </Text>
            </View>
        </View>
    );
}
