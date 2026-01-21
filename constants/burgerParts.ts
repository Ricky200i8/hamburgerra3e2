import { BurgerPartConfig } from '../types/burger.types';

/**
 * Configuración de todas las partes de la hamburguesa
 * El orden determina el apilamiento de abajo hacia arriba
 */
export const BURGER_PARTS: BurgerPartConfig[] = [
    {
        name: 'PanAbajo',
        modelPath: require('../assets/objects/PanAbajo.glb'),
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: 1,
        order: 0,
    },
    {
        name: 'Carne',
        modelPath: require('../assets/objects/Carne.glb'),
        position: { x: 0, y: 0.3, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: 1,
        order: 1,
    },
    {
        name: 'Queso',
        modelPath: require('../assets/objects/Queso.glb'),
        position: { x: 0, y: 0.5, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: 1,
        order: 2,
    },
    {
        name: 'Lechuga',
        modelPath: require('../assets/objects/Lechuga.glb'),
        position: { x: 0, y: 0.7, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: 1,
        order: 3,
    },
    {
        name: 'Tocino',
        modelPath: require('../assets/objects/Tocino.glb'),
        position: { x: 0, y: 0.9, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: 1,
        order: 4,
    },
    {
        name: 'PanArriba',
        modelPath: require('../assets/objects/PanArriba.glb'),
        position: { x: 0, y: 1.2, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: 1,
        order: 5,
    },
];

/**
 * Configuración de la cámara
 */
export const CAMERA_CONFIG = {
    position: [3, 2, 3] as [number, number, number],
    fov: 50,
    near: 0.1,
    far: 1000,
};

/**
 * Configuración de animaciones
 */
export const ANIMATION_CONFIG = {
    assemblyDuration: 2, // segundos
    disassemblyDuration: 2,
    rotationSpeed: 0.5,
    partDelay: 0.2, // delay entre cada parte en la animación
};

/**
 * Configuración de luces
 */
export const LIGHTS_CONFIG = {
    ambient: {
        intensity: 0.5,
        color: '#ffffff',
    },
    directional: {
        intensity: 1,
        position: [5, 5, 5] as [number, number, number],
        color: '#ffffff',
    },
    point: {
        intensity: 0.8,
        position: [0, 3, 0] as [number, number, number],
        color: '#ffffff',
    },
};
