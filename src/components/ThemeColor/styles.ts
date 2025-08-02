import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { ToggleButtonGroup } from "@mui/material";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledToggleButtonGroup = muiStyled(ToggleButtonGroup)(() => ({
  "& .MuiToggleButton-root": {
    backgroundColor: "#FFFFFF",
    color: "#333333",
    border: "1px solid #DDDDDD",
    "&:hover": {
      backgroundColor: "#F5F5F5",
    },
    "&.Mui-selected": {
      backgroundColor: "#E9E9E9",
      color: "#B8860B",
      "&:hover": {
        backgroundColor: "#E9E9E9",
      },
    },
  },
}));
