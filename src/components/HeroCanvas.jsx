import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, OrbitControls, Sparkles } from '@react-three/drei';
import { useRef } from 'react';

function HeroCore() {
  const shellRef = useRef();
  const coreRef = useRef();
  const ringOneRef = useRef();
  const ringTwoRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (shellRef.current) {
      shellRef.current.rotation.x += delta * 0.18;
      shellRef.current.rotation.y += delta * 0.28;
      shellRef.current.position.y = Math.sin(t * 1.1) * 0.08;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.55;
      coreRef.current.rotation.z += delta * 0.12;
      coreRef.current.position.y = Math.sin(t * 1.6) * 0.12;
    }

    if (ringOneRef.current) {
      ringOneRef.current.rotation.z += delta * 0.2;
      ringOneRef.current.rotation.x = Math.PI / 2.4;
    }

    if (ringTwoRef.current) {
      ringTwoRef.current.rotation.z -= delta * 0.15;
      ringTwoRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.35} floatIntensity={0.45}>
        <mesh ref={shellRef}>
          <icosahedronGeometry args={[1.8, 10]} />
          <MeshTransmissionMaterial
            thickness={0.38}
            roughness={0.04}
            transmission={1}
            ior={1.22}
            chromaticAberration={0.05}
            backside
            samples={6}
            color="#8bdfff"
          />
        </mesh>
      </Float>

      <mesh ref={coreRef} scale={0.72}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#7c5cff"
          emissive="#2d1760"
          emissiveIntensity={1.15}
          metalness={0.92}
          roughness={0.16}
        />
      </mesh>

      <mesh ref={ringOneRef}>
        <torusGeometry args={[2.35, 0.035, 24, 240]} />
        <meshStandardMaterial
          color="#56f0ff"
          emissive="#1d7b88"
          emissiveIntensity={0.7}
          metalness={0.95}
          roughness={0.15}
        />
      </mesh>

      <mesh ref={ringTwoRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.75, 0.028, 24, 220]} />
        <meshStandardMaterial
          color="#b08cff"
          emissive="#5d35b6"
          emissiveIntensity={0.55}
          metalness={0.92}
          roughness={0.16}
        />
      </mesh>
    </group>
  );
}

const HeroCanvas = () => {
  return (
    <div className="hero-canvas-premium">
      <Canvas camera={{ position: [0, 0, 7.2], fov: 42 }} dpr={[1, 1.5]}>
        <color attach="background" args={['#070b18']} />
        <fog attach="fog" args={['#070b18', 8, 16]} />

        <ambientLight intensity={1} />
        <directionalLight position={[4, 5, 5]} intensity={1.9} color="#ffffff" />
        <pointLight position={[-4, -2, 4]} intensity={14} color="#7c5cff" />
        <pointLight position={[4, 2, 4]} intensity={12} color="#56f0ff" />

        <Sparkles count={55} scale={[8, 8, 8]} size={3} speed={0.5} color="#d8f7ff" />

        <HeroCore />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 1.9}
        />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
