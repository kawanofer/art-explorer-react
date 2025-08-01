import theme from "../../assets/theme/CustomTheme";
import styled from "styled-components";

export const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 1.1rem;
  color: ${theme.textPrimary};
`;

export const Description = styled.div`
  font-weight: normal;
  font-size: 1rem;
  color: ${theme.textSecondary};
`;

export const DialogTitle = styled.div`
  color: ${theme.textPrimary};
  font-family: ${theme.fontFamilySerif};
  font-weight: bold;
`;
