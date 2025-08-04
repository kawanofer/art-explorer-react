import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.white};
  padding: 1rem;
  text-align: center;
`;
