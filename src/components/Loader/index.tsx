import React from "react";

import { CircularProgress } from "@mui/material";

import * as S from "./styles";

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
