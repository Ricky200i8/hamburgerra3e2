import { useEffect, useRef, useState } from 'react';
import { ANIMATION_CONFIG } from '../constants/burgerParts';

export type AnimationState = 'idle' | 'assembling' | 'disassembling' | 'rotating';

/**
 * Hook para manejar las animaciones de la hamburguesa
 */
export function useBurgerAnimation() {
    const [animationState, setAnimationState] = useState<AnimationState>('idle');
    const [isAutoRotating, setIsAutoRotating] = useState(true);
    const [assemblyProgress, setAssemblyProgress] = useState(1); // 0 = desarmado, 1 = armado
    const animationFrameRef = useRef<number | undefined>(undefined);

    /**
     * Animar el ensamblaje de la hamburguesa
     */
    const assemble = () => {
        setAnimationState('assembling');
        const startTime = Date.now();
        const duration = ANIMATION_CONFIG.assemblyDuration * 1000;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setAssemblyProgress(progress);

            if (progress < 1) {
                animationFrameRef.current = requestAnimationFrame(animate);
            } else {
                setAnimationState('idle');
            }
        };

        animate();
    };

    /**
     * Animar el desensamblaje de la hamburguesa
     */
    const disassemble = () => {
        setAnimationState('disassembling');
        const startTime = Date.now();
        const duration = ANIMATION_CONFIG.disassemblyDuration * 1000;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setAssemblyProgress(1 - progress);

            if (progress < 1) {
                animationFrameRef.current = requestAnimationFrame(animate);
            } else {
                setAnimationState('idle');
            }
        };

        animate();
    };

    /**
     * Toggle entre ensamblar y desensamblar
     */
    const toggleAssembly = () => {
        if (assemblyProgress > 0.5) {
            disassemble();
        } else {
            assemble();
        }
    };

    /**
     * Toggle rotación automática
     */
    const toggleAutoRotate = () => {
        setIsAutoRotating(prev => !prev);
    };

    /**
     * Reset a estado inicial
     */
    const reset = () => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        setAnimationState('idle');
        setAssemblyProgress(1);
        setIsAutoRotating(true);
    };

    // Cleanup
    useEffect(() => {
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return {
        animationState,
        isAutoRotating,
        assemblyProgress,
        assemble,
        disassemble,
        toggleAssembly,
        toggleAutoRotate,
        reset,
    };
}
