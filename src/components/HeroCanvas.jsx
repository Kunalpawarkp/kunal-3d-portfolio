import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, MeshTransmissionMaterial, Sparkles } from '@react-three/drei';
import { useRef } from 'react';

function CoreObject() {
  const shell = useRef();
  const inner = useRef();

  useFrame((state, delta) => {
    if (shell.current) {
      shell.current.rotation.x += delta * 0.24;
      shell.current.rotation.y += delta * 0.42;
    }
    if (inner.current) {
      inner.current.rotation.y -= delta * 0.55;
      inner.current.rotation.z += delta * 0.18;
      inner.current.position.y = Math.sin(state.clock.elapsedTime * 1.6) * 0.12;
    }
  });

  return (
    <group>
      <Float speed={2.4} rotationIntensity={1.2} floatIntensity={1.4}>
        <mesh ref={shell}>
          <dodecahedronGeometry args={[1.7, 0]} />
          <MeshTransmissionMaterial
            thickness={0.45}
            roughness={0.05}
            transmission={1}
            ior={1.22}
            chromaticAberration={0.06}
            backside
            color="#88dfff"
          />
        </mesh>
      </Float>

      <mesh ref={inner}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshStandardMaterial color="#7c5cff" emissive="#30195e" metalness={0.9} roughness={0.2} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.55, 0.05, 24, 220]} />
        <meshStandardMaterial color="#56f0ff" emissive="#0b5a65" metalness={0.9} roughness={0.15} />
      </mesh>

      <Html position={[0, -2.55, 0]} center>
        <div className="hero-canvas-badge">Interactive 3D Engineered UI</div>
      </Html>
    </group>
  );
}

const HeroCanvas = () => {
  return (
    <div className="hero-canvas-card panel">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 48 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[4, 4, 6]} intensity={1.9} color="#ffffff" />
        <pointLight position={[-4, -1, 3]} intensity={12} color="#7c5cff" />
        <pointLight position={[3, 3, 2]} intensity={10} color="#56f0ff" />
        <Sparkles count={40} scale={[7, 7, 7]} size={3} speed={0.7} color="#d4f8ff" />
        <CoreObject />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
