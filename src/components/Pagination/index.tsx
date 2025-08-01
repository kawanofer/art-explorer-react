import React from "react";
import { Pagination as MuiPagination } from "@mui/material";
import * as S from "./styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage?: number;
  totalItems?: number;
  showFirstLast?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
}) => {
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    onPageChange(page);
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <S.PaginationContainer>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        showFirstButton={showFirstLast}
        showLastButton={showFirstLast}
        size="large"
        color="primary"
        shape="rounded"
        variant="outlined"
      />
    </S.PaginationContainer>
  );
};

export default Pagination;
