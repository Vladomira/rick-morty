"use client";
import React, { useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { BallTriangle } from "react-loader-spinner";
import { List } from "./List";
import {
  CharactersFullData,
  CharacterListItem,
  CharactersListProps,
} from "../../types/CharactersData";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { characters } from "@/src/service/queries/queries.graphql";
import ScrollButtons from "../ScrollButtons.tsx";
import { AnimatePresence } from "framer-motion";

const CharactersList = ({
  charactersData,
  charactersCount,
}: CharactersListProps) => {
  const [page, setPage] = useState<number>(2);
  const { data }: CharactersFullData = useSuspenseQuery(characters, {
    variables: { page },
  });
  const [items, setItems] = useState<CharacterListItem[]>(charactersData);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const itemsPerPage = 20;
  const pagesCount = Math.floor(charactersCount / itemsPerPage);

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
    const results = data.characters.results;
    if (!data) {
      return console.error("something went wrong");
    }
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
