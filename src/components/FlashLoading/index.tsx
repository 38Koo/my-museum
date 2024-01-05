import { Canvas, useFrame } from "@react-three/fiber";
import * as stylex from "@stylexjs/stylex";
import { useRef } from "react";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import { FlashLoadingStyle } from "./index.stylex";

const TorusMesh = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta;
    }
  });

  return (
    <mesh ref={ref} rotation={[0, (145 * Math.PI) / 180, 0]}>
      <torusGeometry args={[3, 0.5, 12, 48, 5.5]} />
      <meshPhysicalMaterial roughness={0.3} metalness={0.6} color={0x049ef4} />
    </mesh>
  );
};

export const FlashLoading = () => {
  return (
    <div {...stylex.props(FlashLoadingStyle.base)}>
      <Canvas
        camera={{ position: [0, 0, 10] }}
        {...stylex.props(FlashLoadingStyle.canvas)}
      >
        <directionalLight color={"0xffffff"} intensity={2} />
        <TorusMesh />
        <Html position={[-1, 0.2, 0]}>
          <div {...stylex.props(FlashLoadingStyle.font)}>Loading...</div>
        </Html>
      </Canvas>
    </div>
  );
};
