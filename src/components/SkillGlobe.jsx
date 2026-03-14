import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, Stars, Text } from '@react-three/drei';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { techOrbit } from '../data/portfolioData';

function CoreSphere() {
  const outerRef = useRef();
  const innerRef = useRef();

  useFrame((state, delta) => {
    if (outerRef.current) {
      outerRef.current.rotation.y += delta * 0.14;
      outerRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
    }

    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.22;
      innerRef.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.45} floatIntensity={0.45}>
        <mesh ref={outerRef}>
          <icosahedronGeometry args={[1.5, 8]} />
          <meshStandardMaterial
            color="#7c5cff"
            emissive="#24124d"
            emissiveIntensity={1}
            metalness={0.78}
            roughness={0.2}
          />
        </mesh>
      </Float>

      <mesh ref={innerRef} scale={0.58}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshStandardMaterial
          color="#7df0ff"
          emissive="#1b7a8c"
          emissiveIntensity={1.1}
          metalness={0.95}
          roughness={0.08}
        />
      </mesh>

      <Sphere args={[2.2, 48, 48]}>
        <meshBasicMaterial color="#56f0ff" wireframe transparent opacity={0.08} />
      </Sphere>
    </group>
  );
}

function OrbitRing({ radius, rotation, color, speed }) {
  const ref = useRef();

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * speed;
  });

  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, 0.018, 24, 240]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.45}
        metalness={0.9}
        roughness={0.15}
      />
    </mesh>
  );
}

function SkillNode({ item, position, active, setActive }) {
  const ref = useRef();
  const isActive = active === item.name;

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.lookAt(state.camera.position);
  });

  return (
    <group position={position}>
      <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.55}>
        <mesh
          onPointerOver={() => setActive(item.name)}
          onPointerOut={() => setActive(null)}
          scale={isActive ? 1.18 : 1}
        >
          <sphereGeometry args={[0.17, 32, 32]} />
          <meshStandardMaterial
            color={isActive ? '#ffffff' : '#56f0ff'}
            emissive={isActive ? '#7c5cff' : '#0d5d68'}
            emissiveIntensity={isActive ? 1.25 : 0.9}
            metalness={0.88}
            roughness={0.18}
          />
        </mesh>
      </Float>

      <group ref={ref} position={[0, 0.34, 0]}>
        <Text
          fontSize={0.14}
          color={isActive ? '#ffffff' : '#dceaff'}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.004}
          outlineColor="#050816"
          maxWidth={2}
        >
          {item.name}
        </Text>
      </group>
    </group>
  );
}

function SkillConstellation() {
  const groupRef = useRef();
  const [active, setActive] = useState('React');

  const items = useMemo(() => {
    const radius = 3.05;
    const total = techOrbit.length;

    return techOrbit.map((tech, index) => {
      const phi = Math.acos(1 - (2 * (index + 0.5)) / total);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (index + 0.5);

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      return {
        ...tech,
        position: [x, y, z],
      };
    });
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.11;
  });

  return (
    <group ref={groupRef}>
      {items.map((item) => (
        <SkillNode
          key={item.name}
          item={item}
          position={item.position}
          active={active}
          setActive={setActive}
        />
      ))}
    </group>
  );
}

function AmbientParticles() {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(240 * 3);
    for (let i = 0; i < 240; i += 1) {
      arr[i * 3] = THREE.MathUtils.randFloatSpread(12);
      arr[i * 3 + 1] = THREE.MathUtils.randFloatSpread(8);
      arr[i * 3 + 2] = THREE.MathUtils.randFloatSpread(12);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#9fe8ff" size={0.03} sizeAttenuation transparent opacity={0.65} />
    </points>
  );
}

const SkillGlobe = () => {
  return (
    <div className="skill-globe-shell">
      <Canvas camera={{ position: [0, 0, 8.5], fov: 42 }} dpr={[1, 1.5]}>
        <color attach="background" args={['#060916']} />
        <fog attach="fog" args={['#060916', 10, 18]} />

        <ambientLight intensity={0.95} />
        <directionalLight position={[5, 6, 4]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-5, -2, 4]} intensity={18} color="#7c5cff" />
        <pointLight position={[5, 2, 4]} intensity={16} color="#56f0ff" />

        <Stars radius={40} depth={25} count={1200} factor={4} fade speed={0.7} />
        <AmbientParticles />

        <CoreSphere />
        <OrbitRing radius={2.12} rotation={[Math.PI / 2.5, 0, 0]} color="#56f0ff" speed={0.3} />
        <OrbitRing radius={2.48} rotation={[Math.PI / 3.2, 0.4, 0]} color="#b08cff" speed={-0.22} />
        <OrbitRing radius={2.82} rotation={[Math.PI / 1.9, -0.4, 0]} color="#7df9ff" speed={0.18} />

        <SkillConstellation />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.35}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>

      <div className="skill-globe-overlay">
        <span className="eyebrow tiny">Executive-grade stack presentation</span>
        <h3>Modern engineering, presented with depth and restraint.</h3>
        <p>
          A premium 3D constellation of technologies across frontend, backend, cloud, and delivery.
        </p>
      </div>
    </div>
  );
};

export default SkillGlobe;
