import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  padding: 24px;
`;

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
