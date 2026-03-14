import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Sparkles, Stars } from '@react-three/drei';
import { Bloom, ChromaticAberration, EffectComposer, Noise } from '@react-three/postprocessing';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function FloatingCluster() {
  const group = useRef();
  const rings = useRef([]);
  const count = 18;

  const particles = useMemo(
    () =>
      new Array(count).fill(null).map((_, index) => ({
        position: [
          THREE.MathUtils.randFloatSpread(18),
          THREE.MathUtils.randFloatSpread(16),
          THREE.MathUtils.randFloatSpread(12),
        ],
        scale: THREE.MathUtils.randFloat(0.18, 0.7),
        speed: THREE.MathUtils.randFloat(0.2, 0.9),
        seed: index + 1,
      })),
    [],
  );

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.06;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.08;

    rings.current.forEach((mesh, index) => {
      if (!mesh) return;
      mesh.rotation.x += delta * (0.06 + index * 0.01);
      mesh.rotation.z += delta * (0.05 + index * 0.015);
      mesh.position.y = Math.sin(state.clock.elapsedTime * 0.8 + index) * 0.18;
    });
  });

  return (
    <group ref={group}>
      <Float speed={2.2} rotationIntensity={1.4} floatIntensity={1.8}>
        <mesh position={[0, 0.2, 0]}>
          <icosahedronGeometry args={[1.55, 10]} />
          <MeshDistortMaterial
            color="#7c5cff"
            roughness={0.15}
            metalness={0.75}
            distort={0.35}
            speed={2.2}
            emissive="#1a0f3a"
          />
        </mesh>
      </Float>

      {[0, 1, 2].map((item, index) => (
        <mesh
          key={item}
          ref={(el) => (rings.current[index] = el)}
          rotation={[Math.PI / 2.4, index * 0.5, index * 0.4]}
          scale={1 + index * 0.28}
        >
          <torusGeometry args={[2.6 + index * 0.35, 0.022, 16, 220]} />
          <meshStandardMaterial
            color={index === 1 ? '#56f0ff' : '#c89bff'}
            emissive={index === 1 ? '#114e61' : '#3e1a63'}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}

      {particles.map((particle) => (
        <Float
          key={particle.seed}
          speed={particle.speed}
          rotationIntensity={1.2}
          floatIntensity={2.2}
          position={particle.position}
        >
          <mesh scale={particle.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={particle.seed % 2 === 0 ? '#56f0ff' : '#ffffff'}
              emissive={particle.seed % 2 === 0 ? '#0f4450' : '#30245f'}
              roughness={0.18}
              metalness={0.92}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

const BackgroundScene = () => {
  return (
    <div className="background-canvas">
      <Canvas camera={{ position: [0, 0, 9], fov: 52 }} dpr={[1, 1.5]}>
        <color attach="background" args={['#050816']} />
        <fog attach="fog" args={['#050816', 10, 24]} />
        <ambientLight intensity={0.85} />
        <directionalLight position={[5, 5, 5]} intensity={2.5} color="#ffffff" />
        <pointLight position={[-6, -2, 4]} intensity={16} color="#6d5efc" />
        <pointLight position={[6, 2, 2]} intensity={12} color="#39d0ff" />
        <Stars radius={80} depth={32} count={2200} factor={5} saturation={0} fade speed={0.8} />
        <Sparkles count={160} scale={[18, 18, 18]} size={3.2} speed={0.3} color="#b6f2ff" />
        <FloatingCluster />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
        <EffectComposer>
          <Bloom mipmapBlur intensity={1.05} luminanceThreshold={0.28} />
          <ChromaticAberration offset={[0.0007, 0.0012]} />
          <Noise opacity={0.02} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default BackgroundScene;
