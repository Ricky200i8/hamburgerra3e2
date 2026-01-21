
/**
 * Nombres de las partes de la hamburguesa
 */
export type BurgerPartName =
    | 'PanArriba'
    | 'PanAbajo'
    | 'Carne'
    | 'Queso'
    | 'Lechuga'
    | 'Tocino';

/**
 * Configuración de posición para cada parte
 */
export interface PartPosition {
    x: number;
    y: number;
    z: number;
}

/**
 * Configuración de rotación para cada parte
 */
export interface PartRotation {
    x: number;
    y: number;
    z: number;
}

/**
 * Configuración completa de una parte de la hamburguesa
 */
export interface BurgerPartConfig {
    name: BurgerPartName;
    modelPath: string;
    position: PartPosition;
    rotation?: PartRotation;
    scale?: number;
    order: number; // Orden de apilamiento (0 = abajo, mayor = arriba)
}

/**
 * Props para el componente BurgerPart
 */
export interface BurgerPartProps {
    config: BurgerPartConfig;
    animated?: boolean;
    animationDelay?: number;
    visible?: boolean;
}

/**
 * Props para el componente BurgerModel
 */
export interface BurgerModelProps {
    animated?: boolean;
    autoRotate?: boolean;
    scale?: number;
}

/**
 * Estado de carga de modelos
 */
export interface LoadingState {
    isLoading: boolean;
    progress: number;
    error?: string;
}

/**
 * Props para Canvas3D
 */
export interface Canvas3DProps {
    children: React.ReactNode;
    cameraPosition?: [number, number, number];
    backgroundColor?: string;
}
