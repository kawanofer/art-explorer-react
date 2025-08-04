import { Dialog, Link } from "@mui/material";
import styled from "styled-components";

export const StyledDialog = styled(Dialog)`
  & .MuiDialog-paper {
    background-color: ${({ theme }) => theme.colorBackground};
    color: ${({ theme }) => theme.colorTextPrimary};
    margin: 16px;
    max-height: calc(100% - 32px);

    @media (max-width: 600px) {
      margin: 8px;
      max-height: calc(100% - 16px);
    }
  }

  & .MuiDialogTitle-root {
    background-color: ${({ theme }) => theme.surface};
    border-bottom: 1px solid ${({ theme }) => theme.colorDivider};
  }

  & .MuiDialogContent-root {
    background-color: ${({ theme }) => theme.colorBackground};
    padding: 16px;

    @media (max-width: 600px) {
      padding: 12px;
    }
  }

  & .MuiIconButton-root {
    color: ${({ theme }) => theme.colorTextSecondary};

    &:hover {
      background-color: ${({ theme }) => theme.colorBorder};
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colorPrimary} !important;

  &:hover {
    color: ${({ theme }) => theme.colorPrimaryHover} !important;
  }
`;

export const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colorTextPrimary};
`;

export const Description = styled.div`
  font-weight: normal;
  font-size: 1rem;
  color: ${({ theme }) => theme.colorTextSecondary};
`;

export const DialogTitle = styled.div`
  color: ${({ theme }) => theme.colorTextPrimary};
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

export const AnimatedImageDiv = styled.div`
  border-radius: 4px;
  display: block;
  height: 100%;
  left: 0;
  object-fit: contain;
  position: absolute;
  top: 0;
  width: 100%;
`;
