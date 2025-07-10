import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MacbookModel } from './MacbookModel';

const MacbookModelContainer = () => {
  return (
    <Canvas style={{ width: '100%', height: '500px' }}>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5}>
          <MacbookModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
        <PerspectiveCamera position={[-1,0,18.]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default MacbookModelContainer;
