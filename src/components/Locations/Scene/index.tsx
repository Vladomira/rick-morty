"use client";

import { useState } from "react";

import Frames from "./Frames/Frames";
import { LocationItem, LocationdetailsProps } from "@/src/types/Locations";
import { Environment, MeshReflectorMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const DynamicLocationDetails = dynamic<LocationdetailsProps>(
  () => import("../LocationDetails")
);

const LocationsScene = ({
  locations,
}: {
  locations: LocationItem[] | undefined;
}) => {
  const [openLocationDetails, setOpenLocationDetails] =
    useState<boolean>(false);
  const [locationId, setLocationId] = useState<string>("");

  return (
    <>
      <div className={"scene "}>
        <Canvas dpr={[1, 1.5]} camera={{ fov: 90, position: [0, 2, 15] }}>
          <color attach="background" args={["#191920"]} />
          <fog attach="fog" args={["#191920", 0, 15]} />
          <group position={[0, -0.5, 0]}>
            <Frames
              locations={locations}
              setOpenLocationDetails={setOpenLocationDetails}
              setLocationId={setLocationId}
            />
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[50, 50]} />
              <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={1}
                mixStrength={80}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#050505"
                metalness={0.5}
                mirror={0}
              />
            </mesh>
          </group>
          <Environment preset="city" />
        </Canvas>
      </div>

      <AnimatePresence>
        {openLocationDetails && (
          <DynamicLocationDetails
            locationId={locationId}
            setIsOpen={() => setOpenLocationDetails(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
export default LocationsScene;
