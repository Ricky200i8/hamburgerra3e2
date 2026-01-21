import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface ControlPanelProps {
    onToggleAssembly: () => void;
    onToggleRotation: () => void;
    onReset: () => void;
    isAutoRotating: boolean;
    assemblyProgress: number;
}

export default function ControlPanel({
    onToggleAssembly,
    onToggleRotation,
    onReset,
    isAutoRotating,
    assemblyProgress,
}: ControlPanelProps) {
    const isAssembled = assemblyProgress > 0.5;

    return (
        <View className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-2xl">
            <View className="px-6 py-4">
                {/* Título */}
                <Text className="text-xl font-bold text-gray-800 text-center mb-4">
                    🍔 Controles
                </Text>

                {/* Botones de control */}
                <View className="flex-row justify-around items-center gap-3">
                    {/* Botón Ensamblar/Desensamblar */}
                    <TouchableOpacity
                        onPress={onToggleAssembly}
                        className={`flex-1 py-4 px-4 rounded-2xl shadow-lg ${isAssembled
                                ? 'bg-gradient-to-r from-red-500 to-pink-500'
                                : 'bg-gradient-to-r from-green-500 to-emerald-500'
                            }`}
                        activeOpacity={0.8}
                    >
                        <Text className="text-white font-bold text-center text-base">
                            {isAssembled ? '📤 Desensamblar' : '📥 Ensamblar'}
                        </Text>
                    </TouchableOpacity>

                    {/* Botón Rotación */}
                    <TouchableOpacity
                        onPress={onToggleRotation}
                        className={`flex-1 py-4 px-4 rounded-2xl shadow-lg ${isAutoRotating
                                ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                                : 'bg-gradient-to-r from-gray-500 to-gray-600'
                            }`}
                        activeOpacity={0.8}
                    >
                        <Text className="text-white font-bold text-center text-base">
                            {isAutoRotating ? '⏸️ Pausar' : '▶️ Rotar'}
                        </Text>
                    </TouchableOpacity>

                    {/* Botón Reset */}
                    <TouchableOpacity
                        onPress={onReset}
                        className="py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg"
                        activeOpacity={0.8}
                    >
                        <Text className="text-white font-bold text-center text-base">
                            🔄
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Indicador de progreso */}
                <View className="mt-4">
                    <View className="flex-row justify-between items-center mb-2">
                        <Text className="text-sm text-gray-600 font-medium">
                            Estado de ensamblaje
                        </Text>
                        <Text className="text-sm text-gray-800 font-bold">
                            {Math.round(assemblyProgress * 100)}%
                        </Text>
                    </View>
                    <View className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <View
                            className="h-full bg-gradient-to-r from-orange-500 to-yellow-400"
                            style={{ width: `${assemblyProgress * 100}%` }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}
