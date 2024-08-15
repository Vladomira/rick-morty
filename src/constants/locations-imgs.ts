import { Euler, Vector3 } from "three";

function scaleValue1(originalValue: number, newWidth: number) {
  return originalValue * (newWidth / 1920);
}

function adjustPoint(originalPoint: number, newWidth: number) {
  const widthDifference = 1920 - newWidth;
  const adjustment = widthDifference * 0.0005;
  return originalPoint + adjustment;
}
export const locationImagesArr = (windowWidth: number) => {
  return [
    // Left
    {
      position: new Vector3(
        scaleValue1(-2.8, windowWidth),
        0,
        adjustPoint(3.7, windowWidth)
      ),
      rotation: new Euler(0, Math.PI / 2.6, 0),
      url: "purge-planet",
    },
    {
      position: new Vector3(
        scaleValue1(-2.8, windowWidth),
        0,
        adjustPoint(2.8, windowWidth)
      ),
      rotation: new Euler(0, Math.PI / 2.5, 0),
      url: "st.-gloopy-noops-hospital",
    },
    {
      position: new Vector3(
        scaleValue1(-2.8, windowWidth),
        0,
        adjustPoint(1.9, windowWidth)
      ),
      rotation: new Euler(0, Math.PI / 2.5, 0),
      url: "mr.-goldenfold's-dream",
    },
    {
      position: new Vector3(
        scaleValue1(-2.8, windowWidth),
        0,
        adjustPoint(0.98, windowWidth)
      ),
      rotation: new Euler(0, Math.PI / 2.5, 0),
      url: "gromflom-prime",
    },
    // top left
    {
      position: new Vector3(-3, 2, 2.2),
      rotation: new Euler(0, 0.7, 0),
      url: "nuptia-4",
    },
    {
      position: new Vector3(-2, 2, 1.6),
      rotation: new Euler(0, 0.7, 0),
      url: "bepis-9",
    },

    //Right
    {
      position: new Vector3(
        scaleValue1(2.8, windowWidth),
        0,
        adjustPoint(3.7, windowWidth)
      ),
      rotation: new Euler(0, -Math.PI / 2.5, 0),
      url: "immortality-field-resort",
    },
    {
      position: new Vector3(
        scaleValue1(2.8, windowWidth),
        0,
        adjustPoint(2.8, windowWidth)
      ),
      rotation: new Euler(0, -Math.PI / 2.5, 0),
      url: "anatomy-park",
    },
    {
      position: new Vector3(
        scaleValue1(2.8, windowWidth),
        0,
        adjustPoint(1.9, windowWidth)
      ),
      rotation: new Euler(0, -Math.PI / 2.5, 0),
      url: "interdimensional-cable",
    },
    {
      position: new Vector3(
        scaleValue1(2.8, windowWidth),
        0,
        adjustPoint(0.98, windowWidth)
      ),
      rotation: new Euler(0, -Math.PI / 2.5, 0),
      url: "abadango",
    },
    // Top - Right ***
    {
      position: new Vector3(3, 2, 2.2),

      rotation: new Euler(0, -0.7, 0),
      url: "earth-(5-126)",
    },
    {
      position: new Vector3(2, 2, 1.6),
      rotation: new Euler(0, -0.7, 0),
      url: "cronenberg-earth",
    },

    // Back
    {
      position: new Vector3(-2, 0, -0.9),
      rotation: new Euler(0, 0, 0),
      url: "bird-world",
    },
    {
      position: new Vector3(-0.6, 0, -0.6),
      rotation: new Euler(0, 0, 0),
      url: "giant's-town",
    },
    {
      position: new Vector3(0.6, 0, -0.6),
      rotation: new Euler(0, 0, 0),
      url: "citadel-of-ricks",
    },
    {
      position: new Vector3(1.9, 0, -0.9),
      rotation: new Euler(0, 0, 0),
      url: "worldender's-lair",
    },
    // top back
    {
      position: new Vector3(-0.7, 1.9, 1.5),
      rotation: new Euler(0, 0, 0),
      url: "venzenulon-7",
    },
    {
      position: new Vector3(0.75, 1.6, 2),

      rotation: new Euler(0, 0, 0),
      url: "earth-(replacement-dimension)",
    },
    // Front
    {
      position: new Vector3(-0.75, 0, 2),

      rotation: new Euler(0, 0, 0),
      url: "earth-(c-137)",
    },
    {
      position: new Vector3(0.8, 0, 2),
      rotation: new Euler(0, 0, 0),
      url: "post-apocalyptic-earth",
    },
  ];
};
