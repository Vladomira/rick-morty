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
