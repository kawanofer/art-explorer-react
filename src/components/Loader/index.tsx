import React from "react";
import * as S from "./styles";

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message = "Loading..." }) => {
  return (
    <S.LoaderContainer>
      <S.LoaderText>{message}</S.LoaderText>
    </S.LoaderContainer>
  );
};

export default Loader;
