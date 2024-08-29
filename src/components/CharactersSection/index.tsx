"use client";

import React, { useRef } from "react";

import { CharactersList } from "./CharactersList";
import { CharactersListProps } from "@/src/types/CharactersData";
import { AnimatePresence } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import { BallTriangle } from "react-loader-spinner";

import { useCharactersPagination } from "@/src/hooks/useCharactersPagination";

import InfoMessage from "../InfoMessage";
import ScrollButtons from "../ScrollButtons.tsx";

const CharactersSection = ({ charactersData, count }: CharactersListProps) => {
  const { items, getMoreCharacters, hasMore, error } = useCharactersPagination(
    charactersData,
    count
  );
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={"container m-auto"} ref={sectionRef}>
      {error && <InfoMessage message={error.message} />}
      {!error && items?.length > 0 && (
        <>
          <InfiniteScroll
            dataLength={items.length}
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
            <CharactersList items={items} />
          </InfiniteScroll>
          <AnimatePresence>
            {items.length > 20 && <ScrollButtons sectionRef={sectionRef} />}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default CharactersSection;
