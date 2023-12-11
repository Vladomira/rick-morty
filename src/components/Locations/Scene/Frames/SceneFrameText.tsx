import React, { useState } from "react";
import { RoundedBox, Text, Text3D, useCursor } from "@react-three/drei";
import { GOLDENRATIO, FrameTextProps } from "@/src/types/Locations";

function SceneFrameText({ name, type }: FrameTextProps) {
  const [hovered, setHover] = useState(false);
  useCursor(hovered);
  return (
    <group>
      <mesh position={[0.61, 1.52, 0]}>
        <planeGeometry attach="geometry" args={[0.29, 0.23]} />{" "}
        <meshBasicMaterial attach="material" color="yellow" />{" "}
      </mesh>
      <Text
        maxWidth={0.2}
        anchorX="left"
        anchorY="top"
        position={[0.53, 1.55, 0]}
        fontSize={0.035}
        color={"blue"}
      >
        {name}
      </Text>

      <Text
        maxWidth={0.1}
        anchorX="left"
        anchorY="top"
        position={[0.53, GOLDENRATIO, 0]}
        fontSize={0.03}
        color={"blue"}
      >
        {type}
      </Text>

      <mesh
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        position={[0.53, 1.3, 0]}
      >
        <RoundedBox
          rotation={[0.2, -0.2, 0]}
          args={[0.67, 0.15, 0.009]}
          radius={0.014}
          smoothness={4}
        >
          <meshBasicMaterial color="black" />
        </RoundedBox>
        <Text3D
          font="/Inter_Bold.json"
          size={0.03}
          scale={hovered ? 1.1 : 1}
          curveSegments={28}
          height={0.03}
          lineHeight={3}
          rotation={[0.2, -0.2, 0]}
          bevelEnabled
          bevelSize={0.001}
          bevelThickness={0.02}
          letterSpacing={0.01}
        >
          View more
          <meshStandardMaterial color={"yellow"} />
        </Text3D>
      </mesh>
    </group>
  );
}
export default SceneFrameText;
