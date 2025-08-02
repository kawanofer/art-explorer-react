import styled from "styled-components";
import { TextField, Button, Divider } from "@mui/material";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const SearchRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;
export const StyledTextField = styled(TextField)`
  background-color: ${({ theme }) => theme.white};

  & .MuiOutlinedInput-root {
    background-color: ${({ theme }) => theme.white};

    & fieldset {
      border-color: ${({ theme }) => theme.border};
    }

    &:hover fieldset {
      border-color: ${({ theme }) => theme.interactivePrimary};
    }

    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.interactivePrimary};
    }
  }

  & .MuiInputBase-input {
    color: ${({ theme }) => theme.textPrimary};
  }

  & .MuiInputLabel-root {
    color: ${({ theme }) => theme.textSecondary};

    &.Mui-focused {
      color: ${({ theme }) => theme.interactivePrimary};
    }
  }
`;

export const RadioGroupWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 16px;

  & .MuiFormControlLabel-label {
    color: ${({ theme }) => theme.textPrimary};
  }

  & .MuiRadio-root {
    color: ${({ theme }) => theme.textSecondary};

    &.Mui-checked {
      color: ${({ theme }) => theme.interactivePrimary};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.interactivePrimary} !important;
  color: ${({ theme }) => theme.white} !important;

  &:hover {
    background-color: ${({ theme }) => theme.interactiveHover} !important;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledDivider = styled(Divider)`
  border-color: ${({ theme }) => theme.border} !important;
`;
