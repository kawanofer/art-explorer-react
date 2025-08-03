import styled from "styled-components";
import { Fab } from "@mui/material";

export const ScrollToTopContainer = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateY(0)" : "translateY(20px)"};

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

export const StyledFab = styled(Fab)`
  background-color: ${({ theme }) => theme.interactivePrimary} !important;
  color: ${({ theme }) => theme.white} !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;

  &:hover {
    background-color: ${({ theme }) => theme.interactiveHover} !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2) !important;
  }

  &:active {
    transform: translateY(0);
  }

  transition: all 0.2s ease !important;

  .MuiSvgIcon-root {
    font-size: 1.5rem;
  }
`;
