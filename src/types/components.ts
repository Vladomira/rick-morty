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
};
export type FiltersItemProps = FiltersProps & {
  setSelected: (prop: string) => void;
  selected: string;
  setOpenOptions: (prop: boolean) => void;
};
