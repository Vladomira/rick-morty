import { Euler, Vector3 } from "three";
import { CharacterInstance } from "./CharactersData";
import { ApolloError } from "@apollo/client";

export type LocationData = {
  data: {
    locations: {
      results: LocationItem[];
    };
  };
  loading: boolean;
  error?: ApolloError | undefined;
};
export type LocationItem = {
  name: string;
  type: string;
  dimension: string;
  id: string;
  residents: CharacterInstance[];
};
export type FullLocationData = {
  data: { location: LocationItem };
};

export type LocationImage = {
  position: Vector3 | undefined;
  rotation: Euler | undefined;
  url: string;
};

export type FrameItemProps = {
  location: LocationItem;
  imageData: LocationImage;
  objectId: string;
};

export interface FramesProps {
  q?: THREE.Quaternion;
  p?: THREE.Vector3;
  locations: LocationItem[] | undefined;
  setOpenLocationDetails: (prop: boolean) => void;
  setLocationId: (prop: string) => void;
}
export interface FrameTextProps {
  name: string;
  type: string;
}
export interface LocationdetailsProps {
  setIsOpen: () => void;
  locationId: string;
}

export const GOLDENRATIO = 1.61803398875;
