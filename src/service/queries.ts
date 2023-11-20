import { gql } from "graphql-tag";

export const GET_CHARACTERS = (page: number = 1) => {
   return gql`
   query {
      characters(page: ${page}) {
         results {
            name
            id
            image
         }
      }
   }
`;
};

export const GET_CHARACTER = (id: string) => {
   return gql`
     query {
     character(id: ${id}) {
      name
      status
      species
      type
      gender
      image


         location {
            name
            type
            dimension
         }
         
         episode {
            name
            air_date
            episode
         }
      }
}
`;
};

export const GET_CHARACTERS_FOR_STATISTICS = gql`
   query {
      characters {
         results {
            name
            id

            episode {
               name
            }

            location {
               name
            }
         }
      }
   }
`;

export const GET_LOCATIONS = gql`
   query {
      locations {
         results {
            name
            type
            dimension
            id
         }
      }
   }
`;
