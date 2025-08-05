import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

export const ErrorText = styled.div`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colorError};
  font-weight: 600;
`;
