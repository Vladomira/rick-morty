"use client";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { BallTriangle } from "react-loader-spinner";

import { List } from "./List";
import style from "../../../styles/Home.module.scss";
import {
   CharactersListResult,
   CharacterFullData,
} from "../../types/CharactersData";
import { Condition } from "../../types/common";
import { GET_CHARACTERS } from "@/src/service/queries";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

type CharactersListProps = {
   characters: CharacterFullData[];
};

const CharactersList = ({ characters }: CharactersListProps) => {
   const [page, setPage] = useState<number>(2);
   const [items, setItems] = useState<CharacterFullData[]>(characters);
   const [loadMore, setLoadMore] = useState(true);
   const { data }: CharactersListResult = useSuspenseQuery(
      GET_CHARACTERS(page)
   );
   // const [condition, setCondition] = useState<Condition>('idle');

   const getMoreCharacters = async () => {
      // setCondition('pending');
      if (page < 41) {
         setPage((prev) => {
            return prev + 1;
         });
      } else {
         return;
      }

      const results = data.characters.results;
      if (!data) {
         // setCondition('rejected');
         return console.error("something went wrong");
      }
      setTimeout(() => {
         setItems((prev: CharacterFullData[]) => [...prev, ...results]);
      }, 1000);
      // setCondition('resolved');
   };
   return (
      <InfiniteScroll
         dataLength={items.length}
         next={getMoreCharacters}
         scrollThreshold={"100%"}
         hasMore={loadMore}
         loader={
            <div className={style.preloader}>
               <BallTriangle color="yellow" height={100} width={90} />
            </div>
         }
         endMessage={
            <h4 className={style.header__title}>Nothing more to show</h4>
         }
      >
         <List items={items} />
      </InfiniteScroll>
   );
};

export default CharactersList;
