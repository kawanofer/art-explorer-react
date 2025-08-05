import React from 'react';

import * as S from './styles';

interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return <S.Title>{children}</S.Title>;
}
