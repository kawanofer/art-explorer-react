import styled from "styled-components";
import { Select } from "@mui/material";

export const Container = styled.div`
  width: 100%;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.textError};
  font-size: 0.875rem;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.textError};
  border-radius: 4px;
  text-align: center;
`;

export const LoadingText = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.75rem;
  margin-top: 4px;
  text-align: center;
`;

export const StyledSelect = styled(Select)`
  background-color: ${({ theme }) => theme.white};

  & .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.border};
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.interactivePrimary};
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.interactivePrimary};
  }

  & .MuiSelect-select {
    color: ${({ theme }) => theme.textPrimary};
    background-color: ${({ theme }) => theme.white};
  }

  & .MuiSelect-icon {
    color: ${({ theme }) => theme.textSecondary};
  }

  &.Mui-disabled {
    background-color: ${({ theme }) => theme.grey};

    & .MuiSelect-select {
      color: ${({ theme }) => theme.textSecondary};
    }
  }

  /* Estilo específico para o dropdown menu */
  & .MuiPaper-root {
    background-color: ${({ theme }) => theme.white};
  }

  & .MuiMenuItem-root {
    color: ${({ theme }) => theme.textPrimary};
    background-color: ${({ theme }) => theme.white};

    &:hover {
      background-color: ${({ theme }) => theme.grey};
    }

    &.Mui-selected {
      background-color: ${({ theme }) => theme.surface};
    }
  }
`;

export const StyledFormControl = styled.div`
  width: 100%;

  & .MuiInputLabel-root {
    color: ${({ theme }) => theme.textSecondary} !important;

    &.Mui-focused {
      color: ${({ theme }) => theme.interactivePrimary} !important;
    }

    &.MuiInputLabel-shrink {
      color: ${({ theme }) => theme.textSecondary} !important;
    }

    &.Mui-focused.MuiInputLabel-shrink {
      color: ${({ theme }) => theme.interactivePrimary} !important;
    }
  }

  & .MuiFormControl-root {
    background-color: transparent;
  }
`;
