import axios from "axios";

import { LocationData } from "../types/Map";

export const baseURL = "https://rickandmortyapi.com/api/character";
export const locationURL = "https://rickandmortyapi.com/api/location";

// export const fetchCharacters = async () => {
//    const { data }: CharacterData = await axios.get(baseURL, {
//       headers: {
//          "Cache-Control": "no-cache",
//          Pragma: "no-cache",
//          Expires: "0",
//       },
//    });

//    return data.results;
// };

// export const fetchCharacterById = async (
//    id: string
// ): Promise<CharacterFullData | undefined> => {
//    try {
//       if (id) {
//          const { data } = await axios.get(`${baseURL}/${id}`);
//          return data;
//       }
//    } catch (error) {
//       console.error("Error fetching character:", error);
//       throw error;
//    }
// };

// export const fetchLocations = async (): Promise<LocationData[]> => {
//    const { data } = await axios.get(locationURL);

//    return data.results;
// };
