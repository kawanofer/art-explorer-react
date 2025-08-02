import styled from "styled-components";
import { Dialog, Link } from "@mui/material";

export const StyledDialog = styled(Dialog)`
  & .MuiDialog-paper {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.textPrimary};
    margin: 16px;
    max-height: calc(100% - 32px);

    @media (max-width: 600px) {
      margin: 8px;
      max-height: calc(100% - 16px);
    }
  }

  & .MuiDialogTitle-root {
    background-color: ${({ theme }) => theme.surface};
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }

  & .MuiDialogContent-root {
    background-color: ${({ theme }) => theme.white};
    padding: 16px;

    @media (max-width: 600px) {
      padding: 12px;
    }
  }

  & .MuiIconButton-root {
    color: ${({ theme }) => theme.textSecondary};

    &:hover {
      background-color: ${({ theme }) => theme.grey};
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.interactivePrimary} !important;

  &:hover {
    color: ${({ theme }) => theme.interactiveHover} !important;
  }
`;

export const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textPrimary};
`;

export const Description = styled.div`
  font-weight: normal;
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export const DialogTitle = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  font-family: ${({ theme }) => theme.fontFamilySerif};
  font-weight: bold;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 100%;
  max-height: 620px;
  border-radius: 8px;
  object-fit: contain;
`;
