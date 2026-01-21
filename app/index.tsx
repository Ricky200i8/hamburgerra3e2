import "@/global.css";
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import BurgerModel from '../components/3d/BurgerModel';
import CameraControls from '../components/3d/CameraControls';
import Canvas3D from '../components/3d/Canvas3D';
import ControlPanel from '../components/ui/ControlPanel';
import LoadingScreen from '../components/ui/LoadingScreen';
import { BURGER_PARTS, CAMERA_CONFIG } from '../constants/burgerParts';
import { useBurgerAnimation } from '../hooks/useBurgerAnimation';
import { useGLTFLoaderMultiple } from '../hooks/useGLTFLoader';

export default function Index() {
  // Hook para manejar animaciones
  const {
    isAutoRotating,
    assemblyProgress,
    toggleAssembly,
    toggleAutoRotate,
    reset,
  } = useBurgerAnimation();

  // Cargar todos los modelos
  const modelPaths = BURGER_PARTS.map(part => part.modelPath);
  const { loadingState } = useGLTFLoaderMultiple(modelPaths);

  return (
    <View className="flex-1 bg-gradient-to-br from-orange-50 to-yellow-50">
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <View className="px-6 py-4 pt-12">
          <Text className="text-3xl font-bold text-gray-800 text-center">
            🍔 Hamburguesa 3D
          </Text>
          <Text className="text-sm text-gray-600 text-center mt-1">
            Visualizador interactivo con Three.js
          </Text>
        </View>
      </View>

      {/* Canvas 3D */}
      <View className="flex-1">
        <Canvas3D
          cameraPosition={CAMERA_CONFIG.position}
          backgroundColor="#fef3c7"
        >
          <BurgerModel
            isAssembled={assemblyProgress > 0.5}
            isAutoRotating={isAutoRotating}
          />
          <CameraControls />
        </Canvas3D>
      </View>

      {/* Panel de controles */}
      <ControlPanel
        onToggleAssembly={toggleAssembly}
        onToggleRotation={toggleAutoRotate}
        onReset={reset}
        isAutoRotating={isAutoRotating}
        assemblyProgress={assemblyProgress}
      />

      {/* Pantalla de carga */}
      <LoadingScreen loadingState={loadingState} />
    </View>
  );
}
