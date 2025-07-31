import React from "react";
import { Pagination as MuiPagination } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as S from "./styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage?: number;
  totalItems?: number;
  showFirstLast?: boolean;
  showPageNumbers?: boolean;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .MuiPaginationItem-root": {
            color: "#6b7280",
            "&.Mui-selected": {
              backgroundColor: "#1976d2",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            },
            "&:hover": {
              backgroundColor: "#f3f4f6",
            },
          },
        },
      },
    },
  },
});

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage = 12,
  totalItems,
  showFirstLast = true,
  showPageNumbers = true,
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
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
      {totalItems && (
        <S.PaginationInfo>
          <span>
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{" "}
            items
          </span>
        </S.PaginationInfo>
      )}
    </S.PaginationContainer>
  );
};

export default Pagination;
