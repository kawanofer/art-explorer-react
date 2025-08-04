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
  background-color: ${({ theme }) => theme.colorBackground};

  & .MuiOutlinedInput-root {
    background-color: ${({ theme }) => theme.colorBackground};

    & fieldset {
      border-color: ${({ theme }) => theme.colorDivider};
    }

    &:hover fieldset {
      border-color: ${({ theme }) => theme.colorPrimary};
    }

    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.colorPrimary};
    }
  }

  & .MuiInputBase-input {
    color: ${({ theme }) => theme.colorTextPrimary};
  }

  & .MuiInputLabel-root {
    color: ${({ theme }) => theme.colorTextSecondary};

    &.Mui-focused {
      color: ${({ theme }) => theme.colorPrimary};
    }
  }
`;

export const RadioGroupWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 16px;

  & .MuiFormControlLabel-label {
    color: ${({ theme }) => theme.colorTextPrimary};
  }

  & .MuiRadio-root {
    color: ${({ theme }) => theme.colorTextSecondary};

    &.Mui-checked {
      color: ${({ theme }) => theme.colorPrimary};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colorPrimary} !important;
  color: ${({ theme }) => theme.colorBackground} !important;

  &:hover {
    background-color: ${({ theme }) => theme.colorPrimaryHover} !important;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledDivider = styled(Divider)`
  border-color: ${({ theme }) => theme.colorDivider} !important;
`;
