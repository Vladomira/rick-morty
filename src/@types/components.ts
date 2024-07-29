import { CharacterEpisode } from "./CharactersData";
import { CharacterProfile, CoreData } from "./source";

export interface Children {
  children: React.ReactNode;
}

export interface TitleBoxProps extends Pick<CoreData, "name"> {
  type: string;
  dimension: string;
  residentsQuantity: number;
}

export interface CloseBtnProps {
  setCloseImg: (prop: string) => void;
  closeImg: string;
  setIsOpen: () => void;
  toggleButtonImages: { opened: string; closed: string };
}

/**filter**/
export type FiltersProps = Omit<CoreData, "id"> & {
  values: string[];
  setCurrentPage: (prop: number) => void;
};
export type FiltersItemProps = FiltersProps & {
  setSelected: (prop: string) => void;
  selected: string;
  setOpenOptions: (prop: boolean) => void;
};

export type FiltersInstance = CharacterProfile & Pick<CoreData, "name">;
/******/

export type CharacterInfoBoxProps = {
  src?: string;
  imgName: string;
  infoItems: string[];
  bg?: string;
  id?: string;
  episode?: CharacterEpisode[];
};
