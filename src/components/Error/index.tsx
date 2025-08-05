import React from 'react';

import * as S from './styles';

interface ErrorProps {
  message?: string;
}
export default function Error({
  message = 'Ocorreu um erro inesperado.',
}: ErrorProps) {
  return (
    <S.ErrorContainer>
      <S.ErrorText>{message}</S.ErrorText>
    </S.ErrorContainer>
  );
}
