// Polyfill para Reanimated en web
if (typeof window !== 'undefined') {
    // Mock de Reanimated para evitar errores en web
    global._WORKLET = false;
    global._frameTimestamp = null;
    global._setGlobalConsole = () => { };
}
