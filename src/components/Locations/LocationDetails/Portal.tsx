import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Plane } from "@react-three/drei";

function BackgroundPortal() {
  return (
    <Canvas>
      <Portal />
    </Canvas>
  );
}

const Portal = () => {
  const group = useRef<THREE.Mesh>(null);
  const texture = useLoader(TextureLoader, "/assets/background/portal.jpeg");
  useFrame(() => {
    if (group.current) {
      group.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={group}>
      <Plane
        args={[23, 23]}
        position-z={-4.5} //rotation.z
      >
        <meshBasicMaterial attach="material" map={texture} />
      </Plane>
    </mesh>
  );
};

export default BackgroundPortal;
