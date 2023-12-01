import { LocationImage } from "@/src/types/Locations";
import { Euler, Vector3 } from "three";

export const locationImagesArr: LocationImage[] = [
   // Front

   {
      position: new Vector3(-0.4, 0, 3),
      rotation: new Euler(0, 0, 0),
      url: "earth-(c-137)",
   },
   {
      position: new Vector3(0.9, 0, 3.4),
      rotation: new Euler(0, 0, 0),
      url: "earth-(replacement-dimension)",
   },
   {
      position: new Vector3(0, 0, 1.5),
      rotation: new Euler(0, 0, 0),
      url: "post-apocalyptic-earth",
   },

   {
      position: new Vector3(-1.6, 1.6, 2.5),
      rotation: new Euler(0, Math.PI / 2.7, 0),
      url: "nuptia-4",
   },

   {
      position: new Vector3(-0.6, 1.8, 1.5),
      rotation: new Euler(0, 0, 0),
      url: "venzenulon-7",
   },
   {
      position: new Vector3(0.65, 1.8, 1.5),
      rotation: new Euler(0, 0, 0),
      url: "bepis-9",
   },

   // Back
   {
      position: new Vector3(-0.8, 0, -0.6),
      rotation: new Euler(0, 0, 0),
      url: "bird-world",
   },
   {
      position: new Vector3(0.8, 0, -0.6),
      rotation: new Euler(0, 0, 0),
      url: "citadel-of-ricks",
   },

   // Left
   {
      position: new Vector3(-1.75, 0, 0.25),
      rotation: new Euler(0, Math.PI / 2.5, 0),
      url: "gromflom-prime", //?
   },
   {
      position: new Vector3(-2.15, 0, 1.5),
      rotation: new Euler(0, Math.PI / 2.5, 0),
      url: "mr.-goldenfold's-dream",
   },
   {
      position: new Vector3(-2, 0, 2.75),
      rotation: new Euler(0, Math.PI / 2.5, 0),
      url: "st.-gloopy-noops-hospital",
   },
   {
      position: new Vector3(-2, 0, 3.7),
      rotation: new Euler(0, Math.PI / 2.5, 0),
      url: "purge-planet",
   },
   // Right

   {
      position: new Vector3(1.75, 2, 0.25),
      rotation: new Euler(0, -Math.PI / 2.5, 0),
      url: "giant's-town",
   },
   {
      position: new Vector3(1.9, 2, 1.5),
      rotation: new Euler(0, -Math.PI / 2.5, 0),
      url: "worldender's-lair",
   },
   {
      position: new Vector3(1.9, 2, 2.5),
      rotation: new Euler(0, -Math.PI / 2.5, 0),
      url: "cronenberg-earth",
   },

   {
      position: new Vector3(2.3, 2, 3),
      rotation: new Euler(0, -Math.PI / 2.5, 0),
      url: "earth-(5-126)",
   },

   //***  */
   {
      position: new Vector3(1.75, 0, 0.25),
      rotation: new Euler(0, -Math.PI / 2.5, 0),
      url: "abadango",
   },
   {
      position: new Vector3(2.15, 0, 1.5),
      rotation: new Euler(0, -Math.PI / 2.5, 0),
      url: "interdimensional-cable", //change
   },
   {
      position: new Vector3(2, 0, 2.75),
      rotation: new Euler(0, -Math.PI / 2.5, 0),
      url: "anatomy-park",
   },
   {
      position: new Vector3(2, 0, 3.8),
      rotation: new Euler(0, -Math.PI / 2.5, 0),
      url: "immortality-field-resort",
   },
];
