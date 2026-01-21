import { Canvas } from '@react-three/fiber/native';
import React, { Suspense } from 'react';
import { View } from 'react-native';
import { CAMERA_CONFIG, LIGHTS_CONFIG } from '../../constants/burgerParts';
import { Canvas3DProps } from '../../types/burger.types';

const Canvas3D: React.FC<Canvas3DProps> = ({
    children,
    cameraPosition = CAMERA_CONFIG.position,
    backgroundColor,
    style
}) => {
    return (
        <View className="flex-1 w-full" style={[{ backgroundColor: backgroundColor || '#f5f5f7' }, style]}>
            <Canvas
                camera={{
                    position: cameraPosition,
                    fov: CAMERA_CONFIG.fov,
                }}
                onCreated={(state) => {
                    // Ajustes iniciales de renderizado si son necesarios
                    const _gl = state.gl.getContext();
                    const pixelStorei = _gl.pixelStorei.bind(_gl);
                    _gl.pixelStorei = function (...args) {
                        const [parameter] = args;
                        switch (parameter) {
                            case _gl.UNPACK_FLIP_Y_WEBGL:
                                return pixelStorei(...args);
                        }
                    };
                }}
            >
                {/* Iluminación */}
                <ambientLight intensity={LIGHTS_CONFIG.ambient.intensity} />
                <directionalLight
                    position={LIGHTS_CONFIG.directional.position}
                    intensity={LIGHTS_CONFIG.directional.intensity}
                />
                <pointLight
                    position={LIGHTS_CONFIG.point.position}
                    intensity={LIGHTS_CONFIG.point.intensity}
                />

                {/* Contenido (Modelo + Controles) */}
                <Suspense fallback={null}>
                    {children}
                </Suspense>
            </Canvas>
        </View>
    );
};

export default Canvas3D;
