import { CharacterEpisode } from "./CharactersData";

export interface Children {
  children: React.ReactNode;
}

export type LocationItem = {
  name?: string;
  count?: number;
  id?: string | number;
};

export interface TitleBoxProps {
  type: string;
  name: string;
  dimension: string;
  residentsQuantity: number;
}

export interface CloseBtnProps {
  setCloseImg: (prop: string) => void;
  closeImg: string;
  setIsOpen: () => void;
  toggleButtonImages: { opened: string; closed: string };
}
export type FiltersProps = {
  values: string[];
  name: string;
  setCurrentPage: (prop: number) => void;
};
export type FiltersItemProps = FiltersProps & {
  setSelected: (prop: string) => void;
  selected: string;
  setOpenOptions: (prop: boolean) => void;
};

export interface FiltersInstance {
  name: string;
  gender: string;
  status: string;
  species: string;
}
export type CharacterInfoBoxProps = {
  src?: string;
  imgName: string;
  infoItems: string[];
  bg?: string;
  id?: string;
  episode?: CharacterEpisode[];
};
