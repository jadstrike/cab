"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Move star shape creation outside component
const createStarShape = () => {
  const starShape = new THREE.Shape();
  const numberOfPoints = 5;
  const outerRadius = 1;
  const innerRadius = 0.5;

  for (let i = 0; i <= numberOfPoints * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (i * Math.PI) / numberOfPoints;
    if (i === 0) {
      starShape.moveTo(radius * Math.cos(angle), radius * Math.sin(angle));
    } else {
      starShape.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
    }
  }
  return starShape;
};

function Star() {
  const starRef = useRef<THREE.Mesh>(null);
  const starShape = useMemo(() => createStarShape(), []);

  return (
    <mesh ref={starRef} rotation={[0, 0, Math.PI / 2]}>
      <shapeGeometry args={[starShape]} />
      <meshStandardMaterial color="#FF0000" side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function Star3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Star />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
}
