import React, { Suspense } from 'react';
import { Text, View } from 'react-native';
import { Canvas3DProps } from '../../types/burger.types';

/**
 * Componente Canvas3D
 * Wrapper para el canvas de Three.js
 * 
 * NOTA: Este es un componente placeholder.
 * Para React Native, necesitarás usar expo-gl y expo-three
 * o react-three-fiber con react-native-webview para renderizar 3D
 */
export default function Canvas3D({
    children,
    cameraPosition = [3, 2, 3],
    backgroundColor = '#f0f0f0',
}: Canvas3DProps) {
    return (
        <View
            className="flex-1 w-full h-full"
            style={{ backgroundColor }}
        >
            {/* 
        IMPORTANTE: React Three Fiber no funciona directamente en React Native
        Necesitas usar una de estas opciones:
        
        1. expo-gl + expo-three (recomendado para Expo)
        2. react-three-fiber con WebView
        3. Usar una vista web embebida
        
        Por ahora, este es un placeholder que muestra el concepto
      */}
            <View className="flex-1 items-center justify-center bg-gradient-to-br from-sky-100 to-blue-200">
                <View className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                    <Text className="text-2xl font-bold text-gray-800 text-center mb-4">
                        🍔 Vista 3D
                    </Text>
                    <Text className="text-gray-600 text-center mb-2">
                        Canvas de Three.js
                    </Text>
                    <Text className="text-sm text-gray-500 text-center">
                        Posición cámara: [{cameraPosition.join(', ')}]
                    </Text>
                </View>

                {/* Aquí se renderizarían los children (modelos 3D) */}
                <Suspense fallback={
                    <View className="absolute inset-0 items-center justify-center">
                        <Text className="text-white text-lg">Cargando modelos 3D...</Text>
                    </View>
                }>
                    {children}
                </Suspense>
            </View>
        </View>
    );
}
