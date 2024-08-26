import { startTransition } from "react";

type IncrementPageProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pagesCount: number;
};

export const incrementPage = ({
  page,
  setPage,
  pagesCount,
}: IncrementPageProps) => {
  if (page < pagesCount) {
    startTransition(() => {
      setPage((prevPage: number) => prevPage + 1);
    });
  }
};
