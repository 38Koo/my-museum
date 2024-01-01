import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";

export const FlashLoading = () => {
  return (
    <Canvas>
      <mesh>
        <torusGeometry args={[3, 0.5, 12, 48, 5.5]} />
        <meshPhysicalMaterial
          roughness={0.3}
          metalness={0.6}
          color={0x049ef4}
        />
      </mesh>
    </Canvas>
  );
};
