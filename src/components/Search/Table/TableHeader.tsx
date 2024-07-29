import { tableHeaders } from "@/src/constants/table/table-headers";
import { characterKeys, validCharacterKeys } from "@/src/@types/CharactersData";
import { TableHeaderProps } from "@/src/@types/CharactersData";

export default function TableHeader({ buttonAction }: TableHeaderProps) {
  return (
    <thead>
      <tr className="bg-black">
        <CharacterHeaders buttonAction={buttonAction} />
      </tr>
    </thead>
  );
}

function CharacterHeaders({ buttonAction }: TableHeaderProps) {
  return (
    <>
      {tableHeaders.map((el: string) => {
        if (validCharacterKeys.includes(el as characterKeys)) {
          return (
            <th
              className={`table__header--item capitalize superSmall:-rotate-90
             ${el === "episode" && "flex items-center superSmall:flex-col"}
              `}
              key={el}
            >
              {el}
              {el === "episode" && (
                <div className=" flex  superSmall:flex-row">
                  <button
                    type="button"
                    className="table__button"
                    name="descending"
                    onClick={buttonAction}
                  >
                    &#x2193;
                  </button>
                  <button
                    type="button"
                    className="table__button"
                    name="rising"
                    onClick={buttonAction}
                  >
                    &#x2191;
                  </button>
                </div>
              )}
            </th>
          );
        }
      })}
    </>
  );
}
