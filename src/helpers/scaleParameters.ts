import { Vector3 } from "three";
import { GOLDENRATIO } from "../types/Locations";

const originalScreenWidth = 1920;

export function scaleParameters(newScreenWidth: number) {
  const newX = (1 * newScreenWidth) / originalScreenWidth;
  const newY = (GOLDENRATIO * newScreenWidth) / originalScreenWidth;
  const newZ = (0.005 * newScreenWidth) / originalScreenWidth;

  return new Vector3(newX, newY, newZ);
}
