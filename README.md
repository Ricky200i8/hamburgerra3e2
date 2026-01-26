🍔 HAMBURGERRA3E2 - 3D Render
Este es un proyecto de visualización 3D desarrollado por Ricardo Arias (Curso: 3E1). La aplicación utiliza un entorno móvil moderno para renderizar piezas de una hamburguesa de forma dinámica a partir de modelos tridimensionales.

👤 Información del Proyecto
Autor: Ricardo Arias

Curso: 3E1

Tecnologías: React Native + Expo + Three.js (Fiber)

Estilos: Tailwind CSS (NativeWind)

🛠️ Estructura Técnica (Análisis de Carpetas)
Basado en la arquitectura del sistema, el proyecto se organiza de la siguiente manera:

app/: Utiliza Expo Router. El archivo index.tsx actúa como la vista principal única donde se integra el canvas 3D y la interfaz.

components/3d/: El núcleo del renderizado.

Canvas3D.tsx: Configura el escenario, luces y entorno de Three.js.

BurgerModel.tsx: Componente maestro que orquesta el modelo.

BurgerPart.tsx: Lógica individual para cada pieza de la hamburguesa (pan, carne, etc.).

CameraControls.tsx: Gestión de la perspectiva y movimiento del usuario.

components/ui/:

ControlPanel.tsx: Interfaz de usuario para interactuar con el modelo.

LoadingScreen.tsx: Pantalla de carga para los activos pesados (.glb).

hooks/:

useGLTFLoader.ts: Hook personalizado para la carga eficiente de los modelos.

useBurgerAnimation.ts: Control de las transiciones y movimientos de las piezas.

constants/ & types/: Definiciones estrictas de TypeScript para asegurar que cada parte de la hamburguesa esté correctamente mapeada.

🚀 Características Principales
Carga Dinámica: Uso de archivos .glb almacenados en los assets del proyecto.

Modularidad: Cada parte de la hamburguesa es un componente independiente, lo que permite manipularlas por separado.

Performance: Implementación de hooks personalizados para optimizar la carga de geometría 3D en dispositivos móviles.

Diseño Moderno: Interfaz estilizada íntegramente con Tailwind CSS.