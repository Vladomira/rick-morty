"use client";

import React, { useRef } from "react";

import { List } from "./List";
import { CharactersListProps } from "@/src/types/CharactersData";
import { AnimatePresence } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import { BallTriangle } from "react-loader-spinner";

import { useCharactersPagination } from "@/src/hooks/useCharactersPagination";

import InfoMessage from "../InfoMessage";
import ScrollButtons from "../ScrollButtons.tsx";

const CharactersList = ({ charactersData, count }: CharactersListProps) => {
  const { items, getMoreCharacters, hasMore } = useCharactersPagination(
    charactersData,
    count
  );
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={"container m-auto"} ref={sectionRef}>
      <InfiniteScroll
        dataLength={items?.length}
        next={getMoreCharacters}
        scrollThreshold={"95%"}
        hasMore={hasMore}
        loader={
          <div className="preloader__box">
            <BallTriangle color="yellow" height={100} width={90} />
          </div>
        }
        endMessage={<InfoMessage message="Nothing more to show" />}
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
