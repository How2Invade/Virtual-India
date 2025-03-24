import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

interface ThreeDViewerProps {
  modelPath: string;
}

function Model({ modelPath }: { modelPath: string }) {
  // This is a placeholder as we don't have actual 3D models
  // In a real application, you would load GLTF models using useGLTF
  const mesh = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.PI / 5;
    }
  }, []);

  return (
    <mesh ref={mesh} scale={[1, 1, 1]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#8b5cf6" />
    </mesh>
  );
}

const ThreeDViewer: React.FC<ThreeDViewerProps> = ({ modelPath }) => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-gray-900 border border-gray-800">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <Suspense fallback={null}>
          <Model modelPath={modelPath} />
          <Environment preset="city" />
        </Suspense>
        
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      </Canvas>
      
      <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm text-white p-3 rounded-lg text-sm">
        <p>
          <strong>Controls:</strong> Click and drag to rotate. Scroll to zoom. Shift + drag to pan.
        </p>
      </div>
    </div>
  );
};

export default ThreeDViewer;