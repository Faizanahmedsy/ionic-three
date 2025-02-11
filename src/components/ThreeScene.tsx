import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ThreeScene = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      {/* Add a simple rotating box */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <mesh rotation={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
