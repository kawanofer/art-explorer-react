import { Select } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colorError};
  font-size: 0.875rem;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.colorError};
  border-radius: 4px;
  text-align: center;
`;

export const LoadingText = styled.div`
  color: ${({ theme }) => theme.colorTextSecondary};
  font-size: 0.75rem;
  margin-top: 4px;
  text-align: center;
`;

export const StyledSelect = styled(Select)`
  background-color: ${({ theme }) => theme.colorBackground};

  & .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colorDivider};
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colorPrimary};
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colorPrimary};
  }

  & .MuiSelect-select {
    color: ${({ theme }) => theme.colorTextPrimary};
    background-color: ${({ theme }) => theme.colorBackground};
  }

  & .MuiSelect-icon {
    color: ${({ theme }) => theme.colorTextSecondary};
  }

  &.Mui-disabled {
    background-color: ${({ theme }) => theme.colorBorder};

    & .MuiSelect-select {
      color: ${({ theme }) => theme.colorTextSecondary};
    }
  }

  /* Estilo específico para o dropdown menu */
  & .MuiPaper-root {
    background-color: ${({ theme }) => theme.colorBackground};
  }

  & .MuiMenuItem-root {
    color: ${({ theme }) => theme.colorTextPrimary};
    background-color: ${({ theme }) => theme.colorBackground};

    &:hover {
      background-color: ${({ theme }) => theme.colorBorder};
    }

    &.Mui-selected {
      background-color: ${({ theme }) => theme.surface};
    }
  }
`;

export const StyledFormControl = styled.div`
  width: 100%;

  & .MuiInputLabel-root {
    color: ${({ theme }) => theme.colorTextSecondary} !important;

    &.Mui-focused {
      color: ${({ theme }) => theme.colorPrimary} !important;
    }

    &.MuiInputLabel-shrink {
      color: ${({ theme }) => theme.colorTextSecondary} !important;
    }

    &.Mui-focused.MuiInputLabel-shrink {
      color: ${({ theme }) => theme.colorPrimary} !important;
    }
  }

  & .MuiFormControl-root {
    background-color: transparent;
  }
`;
