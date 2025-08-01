import theme from "../../assets/theme/CustomTheme";
import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${theme.white};
`;

export const ErrorText = styled.div`
  font-size: 1.25rem;
  color: ${theme.textError};
  font-weight: 600;
`;
