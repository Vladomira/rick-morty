export type LocationData = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};
export type CartoonLocation = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: LocationData[];
};
