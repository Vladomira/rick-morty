export type LocationData = {
   data: {
      locations: {
         __typename: "Locations";
         results: LocationItem[];
      };
   };
};
export type LocationItem = {
   __typename?: string;
   name: string;
   type: string;
   dimension: string;
   id: string;
};
