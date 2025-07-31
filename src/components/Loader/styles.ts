import styled from "styled-components";
import theme from "../../assets/theme/CustomTheme";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  background: ${theme.grey}cc;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Content = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
