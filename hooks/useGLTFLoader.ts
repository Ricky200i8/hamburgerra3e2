import { useEffect, useState } from 'react';
import { LoadingState } from '../types/burger.types';

/**
 * Hook para cargar modelos GLTF
 * Maneja el estado de carga y errores
 */
export function useGLTFLoader(modelPath: any) {
    const [loadingState, setLoadingState] = useState<LoadingState>({
        isLoading: true,
        progress: 0,
    });
    const [model, setModel] = useState<any>(null);

    useEffect(() => {
        if (!modelPath) {
            setLoadingState({
                isLoading: false,
                progress: 0,
                error: 'No model path provided',
            });
            return;
        }

        // Simular carga del modelo
        // En React Native con Expo, los modelos se cargan de forma diferente
        const loadModel = async () => {
            try {
                setLoadingState({ isLoading: true, progress: 0 });

                // Aquí iría la lógica real de carga con expo-three o similar
                // Por ahora, simulamos la carga
                setLoadingState({ isLoading: true, progress: 50 });

                // Simular delay de carga
                await new Promise(resolve => setTimeout(resolve, 100));

                setModel(modelPath);
                setLoadingState({ isLoading: false, progress: 100 });
            } catch (error) {
                setLoadingState({
                    isLoading: false,
                    progress: 0,
                    error: error instanceof Error ? error.message : 'Failed to load model',
                });
            }
        };

        loadModel();
    }, [modelPath]);

    return { model, loadingState };
}

/**
 * Hook para precargar múltiples modelos
 */
export function useGLTFLoaderMultiple(modelPaths: any[]) {
    const [loadingState, setLoadingState] = useState<LoadingState>({
        isLoading: true,
        progress: 0,
    });
    const [models, setModels] = useState<any[]>([]);

    useEffect(() => {
        const loadModels = async () => {
            try {
                setLoadingState({ isLoading: true, progress: 0 });

                const loadedModels: any[] = [];
                const totalModels = modelPaths.length;

                for (let i = 0; i < modelPaths.length; i++) {
                    // Simular carga de cada modelo
                    await new Promise(resolve => setTimeout(resolve, 50));
                    loadedModels.push(modelPaths[i]);

                    const progress = ((i + 1) / totalModels) * 100;
                    setLoadingState({ isLoading: true, progress });
                }

                setModels(loadedModels);
                setLoadingState({ isLoading: false, progress: 100 });
            } catch (error) {
                setLoadingState({
                    isLoading: false,
                    progress: 0,
                    error: error instanceof Error ? error.message : 'Failed to load models',
                });
            }
        };

        if (modelPaths.length > 0) {
            loadModels();
        }
    }, [modelPaths.length]);

    return { models, loadingState };
}
