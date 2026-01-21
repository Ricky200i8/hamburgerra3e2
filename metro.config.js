const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Agregar soporte para archivos 3D (.glb, .gltf)
config.resolver.assetExts.push('glb', 'gltf', 'bin', 'obj', 'mtl');

module.exports = withNativeWind(config, { input: './global.css' });