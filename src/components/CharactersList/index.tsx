'use client';
import axios from 'axios';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { BallTriangle } from 'react-loader-spinner';

import { List } from './List';
import style from '../../../styles/Home.module.scss';
import { baseURL } from '../../service/api';
import { CharacterFullData } from '../../types/CharactersData';
import { Condition } from '../../types/common';
type CharactersListProps = {
  characters: CharacterFullData[];
};

const CharactersList = ({ characters }: CharactersListProps) => {
  const [page, setPage] = useState<number>(2);
  const [items, setItems] = useState<CharacterFullData[]>(characters);
  const [loadMore, setLoadMore] = useState(true);
  const [condition, setCondition] = useState<Condition>('idle');

  const getMoreCharacters = async () => {
    setCondition('pending');
    if (page < 41) {
      setPage(prev => {
        return prev + 1;
      });
    } else {
      return;
    }
    const { data } = await axios.get(`${baseURL}/?page=${page}`);
    if (!data) {
      setCondition('rejected');
      return console.error('something went wrong');
    }
    setTimeout(() => {
      setItems((prev: CharacterFullData[]) => [...prev, ...data.results]);
    }, 2000);
    setCondition('resolved');
  };
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={getMoreCharacters}
      scrollThreshold={'100%'}
      hasMore={loadMore}
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
