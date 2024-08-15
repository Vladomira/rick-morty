"use client";

import React, { useRef, useState } from "react";

import { List } from "./List";
import { handleDataError } from "@/src/helpers/handleDataError";
import { characters } from "@/src/service/queries/queries.graphql";
import {
  CharacterListItem,
  CharactersFetchData,
  CharactersListProps,
} from "@/src/types/CharactersData";
import { useSuspenseQuery } from "@apollo/client";
import { AnimatePresence } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import { BallTriangle } from "react-loader-spinner";

import ScrollButtons from "../ScrollButtons.tsx";

const CharactersList = ({ charactersData, count }: CharactersListProps) => {
  const [page, setPage] = useState<number>(2);
  const { data, error }: CharactersFetchData = useSuspenseQuery(characters, {
    variables: { page },
  });

  const [items, setItems] = useState<CharacterListItem[]>(charactersData);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const itemsPerPage = 20;
  const pagesCount = Math.floor(count / itemsPerPage);

  const changePage = () => {
    if (page < pagesCount) {
      setPage((prev) => {
        return prev + 1;
      });
    } else {
      return;
    }
  };

  const getMoreCharacters = async () => {
    changePage();

    if (error) handleDataError(error);
    const results = data.characters.results;

    setItems((prev: CharacterListItem[]) => [...prev, ...results]);
  };
  return (
    <div className={"container m-auto"} ref={sectionRef}>
      <InfiniteScroll
        dataLength={items?.length}
        next={getMoreCharacters}
        scrollThreshold={"100%"}
        hasMore={page < pagesCount}
        loader={
          <div className="flex justify-center mt-4 ">
            <BallTriangle color="yellow" height={100} width={90} />
          </div>
        }
        endMessage={
          <h4 className="inform__text-box--text ">Nothing more to show</h4>
        }
      >
        <List items={items} />
      </InfiniteScroll>
      <AnimatePresence>
        {items.length > 20 && <ScrollButtons sectionRef={sectionRef} />}
      </AnimatePresence>
    </div>
  );
};

export default CharactersList;
