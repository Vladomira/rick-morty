import React from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

import {
  arrows,
  paginationItemStyles,
} from "@/src/constants/table/table-pagination";

export default function TablePagination({
  pageCount,
  setPage,
  page,
}: {
  pageCount: number;
  page: number;
  setPage: (prop: number) => void;
}) {
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (
  //   event: React.MouseEvent<HTMLButtonElement> | null,
  //   newPage: number
  // ) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

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
            sx={paginationItemStyles(page, pageCount)}
          />
        )}
        onChange={(_, value: number) => setPage(value)}
      />
    </Stack>
  );
}
