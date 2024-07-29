import { Euler, Vector3 } from "three";
import { CharacterInstance } from "./CharactersData";
import { CoreData, FetchApolloError } from "./source";

/**fetch**/
export type LocationsFetchData = FetchApolloError & {
  data: {
    locations: {
      results: LocationItem[];
    };
  };
};

/**components**/
export type LocationItem = CoreData & {
  type: string;
  dimension: string;
  residents: CharacterInstance[];
};
export type LocationData = {
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
