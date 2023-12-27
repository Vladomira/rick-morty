export type FilterName = "gender" | "status" | "species";
export type GenderValue = "Male" | "Female" | "genderless" | "unknown";
export type StatusValue = "Alive" | "Dead" | "unknown";
export type SpeciesValue = "Human" | "Alien" | "Humanoid" | "Cronenberg";

export type FiltersSet = {
  name: FilterName;
  values: (GenderValue | StatusValue | SpeciesValue)[];
};

export const filtersArray: FiltersSet[] = [
  { name: "gender", values: ["Male", "Female", "genderless", "unknown"] },
  { name: "status", values: ["Alive", "Dead", "unknown"] },
  {
    name: "species",
    values: ["Human", "Alien", "Humanoid", "Cronenberg"],
  },
];
