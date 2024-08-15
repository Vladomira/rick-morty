import { Vector3 } from "three";

import { GOLDENRATIO } from "../constants/goldenratio";

const originalScreenWidth = 1920;

export function scaleParameters(newScreenWidth: number) {
  const newX = (1 * newScreenWidth) / originalScreenWidth;
  const newY = (GOLDENRATIO * newScreenWidth) / originalScreenWidth;
  const newZ = (0.005 * newScreenWidth) / originalScreenWidth;

  if (newScreenWidth > 768) return new Vector3(newX, newY, newZ);
  if (newScreenWidth < 768) return new Vector3(0.4, 0.6, 0.05);
}

export function makeFrameSize({
  isActive,
  windowWidth,
}: {
  isActive: boolean;
  windowWidth: number | undefined;
}) {
  if (!isActive && windowWidth) {
    return scaleParameters(windowWidth);
  }
  if (windowWidth && isActive && windowWidth > 768) {
    return new Vector3(1, GOLDENRATIO, 0.05);
  }
  if (windowWidth && isActive && windowWidth < 768) {
    return new Vector3(1, GOLDENRATIO, 0.05);
  }
}
