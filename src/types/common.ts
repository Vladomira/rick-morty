export type Condition = "idle" | "pending" | "rejected" | "resolved";

export interface Children {
   children: React.ReactNode;
}

export interface LocationsList {
   dataArr: LocationItem[];
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
