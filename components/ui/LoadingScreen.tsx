import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { LoadingState } from '../../types/burger.types';

interface LoadingScreenProps {
    loadingState: LoadingState;
}

export default function LoadingScreen({ loadingState }: LoadingScreenProps) {
    const { isLoading, progress, error } = loadingState;

    if (!isLoading && !error) {
        return null;
    }

    return (
        <View className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center z-50">
            <View className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl max-w-sm w-11/12">
                {error ? (
                    <>
                        <Text className="text-2xl font-bold text-red-600 text-center mb-4">
                            ⚠️ Error
                        </Text>
                        <Text className="text-gray-700 text-center mb-4">{error}</Text>
                        <Text className="text-sm text-gray-500 text-center">
                            Por favor, verifica que los modelos 3D estén disponibles
                        </Text>
                    </>
                ) : (
                    <>
                        <Text className="text-3xl font-bold text-gray-800 text-center mb-6">
                            🍔 Cargando Hamburguesa
                        </Text>

                        <View className="mb-6">
                            <ActivityIndicator size="large" color="#f97316" />
                        </View>

                        {/* Barra de progreso */}
                        <View className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-3">
                            <View
                                className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            />
                        </View>

                        <Text className="text-center text-gray-600 font-medium">
                            {Math.round(progress)}%
                        </Text>

                        <Text className="text-sm text-gray-500 text-center mt-4">
                            Preparando los ingredientes...
                        </Text>
                    </>
                )}
            </View>
        </View>
    );
}
