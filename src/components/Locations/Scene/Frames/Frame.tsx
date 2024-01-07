import { memo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useCursor, Image, PositionalAudio } from "@react-three/drei";
import { easing } from "maath";
import { GOLDENRATIO, FrameItemProps } from "@/src/types/Locations";
import SceneFrameText from "./SceneFrameText";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import { scaleParameters } from "@/src/helpers/scaleParameters";

const Frame = memo(function Frame({
  imageData,
  location,
  objectId,
}: FrameItemProps) {
  const [zoomSound, setZoomSound] = useState<boolean>(false);
  const image = useRef<THREE.Mesh>(null);
  const frame =
    useRef<THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>>(null);

  const [hovered, setHover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const name = location.id;
  const windowWidth = useWindowSize();

  const isActive = objectId === name;
  useCursor(hovered);

  useFrame((state, dt) => {
    if (!image.current) return;
    (image.current.material as any).zoom =
      2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
    easing.damp3(
      image.current.scale,
      [
        0.85 * (!isActive && hovered ? 0.96 : 1),
        0.9 * (!isActive && hovered ? 0.98 : 1),
        1,
      ],
      0.1,
      dt
    );
    if (frame.current) {
      easing.dampC(
        frame.current.material.color,
        hovered ? "#E0ACF9" : "#ECCFFB",
        0.1,
        dt
      );
    }
  });
  return (
    <group position={imageData.position} rotation={imageData.rotation}>
      <mesh
        name={name}
        onPointerOver={() => setHover(true)}
        onClick={() => setZoomSound(!zoomSound)}
        onPointerOut={() => setHover(false)}
        scale={
          windowWidth ? scaleParameters(windowWidth) : [1, GOLDENRATIO, 0.05]
        }
        position={[0, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />

        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>

        <Image
          raycast={() => null}
          ref={image}
          position={[0, 0, 0.7]}
          url={`/assets/locations/${imageData.url}.jpg`}
        />
      </mesh>
      {isActive && <SceneFrameText name={location.name} type={location.type} />}
      {zoomSound && (
        <PositionalAudio
          autoplay
          loop={false}
          url="/sounds/zoom.mp3"
          distance={3}
          onEnded={() => setZoomSound(false)}
        />
      )}
    </group>
  );
});

export default Frame;
