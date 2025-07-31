import React from "react";
import * as S from "./styles";
import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <S.Container>
      <S.Content>
        <CircularProgress />
      </S.Content>
    </S.Container>
  );
};

export default Loader;
