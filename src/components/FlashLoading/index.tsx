import { Canvas, useFrame } from "@react-three/fiber";
import * as stylex from "@stylexjs/stylex";
import { useRef } from "react";
import * as THREE from "three";
import { canvasStyle } from "./index.stylex";

const TorusMesh = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z -= delta;
    }
  });

  if (ref.current) {
    ref.current.rotation.y -= 0.3;
  }

  return (
    <mesh ref={ref}>
      <torusGeometry args={[3, 0.5, 12, 48, 5.5]} />
      <meshPhysicalMaterial roughness={0.3} metalness={0.6} color={0x049ef4} />
    </mesh>
  );
};

export const FlashLoading = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10] }}
      {...stylex.props(canvasStyle.base)}
    >
      <directionalLight color={"0xffffff"} intensity={2} />
      <TorusMesh />
    </Canvas>
  );
};
