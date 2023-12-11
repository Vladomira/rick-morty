"use client";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { BallTriangle } from "react-loader-spinner";

import { List } from "./List";
import style from "../../../styles/Home.module.scss";
import {
  CharactersFullData,
  CharacterListItem,
} from "../../types/CharactersData";
// import { Condition } from "../../types/common"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { characters } from "@/src/service/queries.graphql";

type CharactersListProps = {
  charactersData: CharacterListItem[];
};

const CharactersList = ({ charactersData }: CharactersListProps) => {
  const [page, setPage] = useState<number>(2);
  const [items, setItems] = useState<CharacterListItem[]>(charactersData);
  const { data }: CharactersFullData = useSuspenseQuery(characters, {
    variables: { page },
  });
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
      setItems((prev: CharacterListItem[]) => [...prev, ...results]);
    }, 1000);
    // setCondition('resolved');
  };
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={getMoreCharacters}
      scrollThreshold={"100%"}
      hasMore={true}
      loader={
        <div className={style.preloader}>
          <BallTriangle color="yellow" height={100} width={90} />
        </div>
      }
      endMessage={<h4 className={style.header__title}>Nothing more to show</h4>}
    >
      <List items={items} />
    </InfiniteScroll>
  );
};

export default CharactersList;
