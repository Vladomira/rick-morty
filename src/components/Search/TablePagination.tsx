import React from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

import {
  arrows,
  paginationItemStyles,
} from "@/src/constants/table/table-pagination";
import {
  getButtonStyles,
  isButtonDisabled,
} from "@/src/constants/table/pagination-styles";

type TableProps = {
  pageCount: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
export default function TablePagination({
  pageCount,
  setPage,
  page,
}: TableProps) {
  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    const target = event.currentTarget as HTMLButtonElement;

    if (target.getAttribute("aria-label") === "Go to next page") {
      setPage((prev: number) => prev + 1);
    } else if (target.getAttribute("aria-label") === "Go to previous page") {
      setPage((prev: number) => prev - 1);
    } else setPage(value);
  };

  return (
    <Stack sx={{ display: "flex", alignItems: "end", marginTop: "25px" }}>
      <Pagination
        count={pageCount}
        variant="outlined"
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: arrows.left, next: arrows.right }}
            {...item}
            selected={item.page === page}
            sx={paginationItemStyles}
            disabled={isButtonDisabled(item.type, page, pageCount)}
            style={getButtonStyles(item.type, page, pageCount)}
          />
        )}
        onChange={(event: React.ChangeEvent<unknown>, value: number) => {
          changePage(event, value);
        }}
      />
    </Stack>
  );
}
