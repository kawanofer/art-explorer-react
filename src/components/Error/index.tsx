import React from "react";
import * as S from "./styles";

interface ErrorProps {
  message?: string;
}

const Error: React.FC<ErrorProps> = ({ message = "An error occurred" }) => {
  return (
    <S.ErrorContainer>
      <S.ErrorText>{message}</S.ErrorText>
    </S.ErrorContainer>
  );
};

export default Error;
