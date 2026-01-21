import React from 'react';
import { Text, View } from 'react-native';

/**
 * Componente CameraControls
 * Controles de cámara para la escena 3D
 * 
 * En una implementación real con Three.js, usarías OrbitControls
 * o controles táctiles personalizados
 */
export default function CameraControls() {
    return (
        <View className="absolute top-4 right-4 bg-white/90 backdrop-blur-lg rounded-2xl p-3 shadow-lg">
            <Text className="text-xs text-gray-600 font-medium text-center">
                📷 Controles
            </Text>
            <Text className="text-xs text-gray-500 text-center mt-1">
                Desliza para rotar
            </Text>
            <Text className="text-xs text-gray-500 text-center">
                Pellizca para zoom
            </Text>
        </View>
    );
}
