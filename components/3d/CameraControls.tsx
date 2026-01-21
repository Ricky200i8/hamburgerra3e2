import { OrbitControls } from '@react-three/drei/native';
import React from 'react';

const CameraControls: React.FC = () => {
    return (
        <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={2}
            maxDistance={10}
        />
    );
};

export default CameraControls;
