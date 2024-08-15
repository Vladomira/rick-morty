import React, { useState } from "react";

import { gradientShaderMaterial } from "@/src/constants/bg-scene-text";
import { FrameTextProps } from "@/src/types/Locations";
import { RoundedBox, Text, Text3D, useCursor } from "@react-three/drei";

function SceneFrameText({ name, type }: FrameTextProps) {
  const [hovered, setHover] = useState(false);
  useCursor(hovered);
  const isNameShort = name.length <= 22;
  return (
    <group>
      <mesh position={isNameShort ? [0, 0.3, 0.17] : [-0.003, 0.3, 0.17]}>
        <planeGeometry
          attach="geometry"
          args={isNameShort ? [0.7, 0.25] : [0.75, 0.29]}
        />
        <primitive attach="material" object={gradientShaderMaterial} />
      </mesh>
      <Text
        maxWidth={0.4}
        anchorX="left"
        anchorY="top"
        position={name.length <= 22 ? [-0.28, 0.4, 0.17] : [-0.35, 0.4, 0.17]}
        fontSize={0.06}
        color={"rgb(255,24,240)"}
      >
        {type}
      </Text>
      <Text
        maxWidth={0.8}
        anchorX="left"
        anchorY="top"
        position={name.length <= 22 ? [-0.28, 0.3, 0.17] : [-0.35, 0.3, 0.17]}
        fontSize={0.058}
        castShadow={true}
        color="#feff26"
      >
        {name}
      </Text>
      <mesh
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        position={[0, 1.72, 0]}
      >
        <RoundedBox
          rotation={[0, 0, 0]}
          args={[0.6, 0.15, 0.009]}
          radius={0.014}
          smoothness={4}
        >
          <meshBasicMaterial color="black" />
        </RoundedBox>
        <Text3D
          font="/Inter_Bold.json"
          position={[-0.23, -0.02, 0]}
          size={0.05}
          scale={hovered ? 1.1 : 1}
          curveSegments={28}
          height={0.03}
          lineHeight={3}
          rotation={[0.8, 0, 0]}
          bevelEnabled
          bevelSize={0.001}
          bevelThickness={0.02}
          letterSpacing={0.01}
        >
          View more
          <meshStandardMaterial color={"#E0ACF9"} />
        </Text3D>
      </mesh>
    </group>
  );
}
export default SceneFrameText;
