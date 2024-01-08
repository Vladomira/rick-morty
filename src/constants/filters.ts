export type FilterName = "gender" | "status" | "species" | "None";
export type GenderValue = "Male" | "Female" | "genderless" | "unknown" | "None";
export type StatusValue = "Alive" | "Dead" | "unknown";
export type SpeciesValue =
  | "Human"
  | "Alien"
  | "Humanoid"
  | "Cronenberg"
  | "Robot"
  | "Mythological Creature"
  | "None";

export type FiltersSet = {
  name: FilterName;
  values: (GenderValue | StatusValue | SpeciesValue)[];
};

export const filtersArray: FiltersSet[] = [
  {
    name: "gender",
    values: ["Male", "Female", "genderless", "unknown", "None"],
  },
  { name: "status", values: ["Alive", "Dead", "unknown", "None"] },
  {
    name: "species",
    values: [
      "Human",
      "Alien",
      "Humanoid",
      "Cronenberg",
      "Robot",
      "Mythological Creature",
      "None",
    ],
  },
];
