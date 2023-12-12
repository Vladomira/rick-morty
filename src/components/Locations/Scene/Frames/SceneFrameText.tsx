import React, { useState } from "react";
import { RoundedBox, Text, Text3D, useCursor } from "@react-three/drei";
import { FrameTextProps } from "@/src/types/Locations";
import { gradientShaderMaterial } from "@/src/constants/bg-scene-text";

function SceneFrameText({ name, type }: FrameTextProps) {
  const [hovered, setHover] = useState(false);
  useCursor(hovered);
  return (
    <group>
      <mesh position={[0.8, 1.45, 0]}>
        <planeGeometry attach="geometry" args={[0.6, 0.37]} />{" "}
        <primitive attach="material" object={gradientShaderMaterial} />
      </mesh>

      <Text
        maxWidth={0.4}
        anchorX="left"
        anchorY="top"
        position={[0.53, 1.58, 0]}
        fontSize={0.06}
        color={"#feff26"}
      >
        {type}
      </Text>

      <Text
        maxWidth={0.4}
        anchorX="left"
        anchorY="top"
        position={[0.53, 1.44, 0]}
        fontSize={0.05}
        castShadow={true}
        color={"#FEF08A"}
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
