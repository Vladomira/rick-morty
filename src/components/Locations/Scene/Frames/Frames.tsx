import * as THREE from "three";
import { Ref, useEffect, useRef, useState } from "react";
import { GroupProps, ThreeEvent, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { FramesProps, GOLDENRATIO } from "@/src/types/Locations";
import { motion } from "framer-motion-3d";
import { locationImagesArr } from "@/src/constants/locations-imgs";
import Frame from "./Frame";

function Frames({
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
  locations,
  setLocationId,
  setOpenLocationDetails,
}: FramesProps) {
  const ref: Ref<GroupProps> | undefined = useRef(null);
  const clicked = useRef<THREE.Object3D>();
  const [objectId, setObjectId] = useState<string>("");

  useEffect(() => {
    if (!ref.current) return;

    if (objectId && ref.current && ref.current.getObjectByName) {
      clicked.current = ref.current.getObjectByName(objectId);
      if (clicked.current?.parent) {
        clicked.current.parent.updateWorldMatrix(true, true);
        clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
        clicked.current.parent.getWorldQuaternion(q);
      }
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  });

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });
  const onHandleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();

    if (e.object.name === "") {
      setOpenLocationDetails(true);
      setLocationId(objectId);
    } else {
      setObjectId((prev) => (prev === e.object.name ? "" : e.object.name));
    }
  };

  return (
    <motion.group ref={ref} onClick={onHandleClick}>
      {locations?.map((location) => {
        const image = locationImagesArr.find(
          (el) => el.url === location.name.replace(/ /g, "-").toLowerCase()
        );

        if (image) {
          return (
            <Frame
              key={image.url}
              imageData={image}
              location={location}
              objectId={objectId}
            />
          );
        }
      })}
    </motion.group>
  );
}

export default Frames;
