import styled from "styled-components";
import { TextField, Button, Divider } from "@mui/material";

export const Container = styled.div`
  width: 100%;
  padding: 32px 0px;
  background-color: ${({ theme }) => theme.background};
`;

export const RadioGroupWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  gap: 16px;
  align-items: center;

  .MuiFormControlLabel-root {
    color: ${({ theme }) => theme.textPrimary};
  }

  .MuiRadio-root {
    color: ${({ theme }) => theme.textSecondary};

    &.Mui-checked {
      color: ${({ theme }) => theme.interactivePrimary};
    }
  }
`;

export const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.textPrimary};

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

  & .MuiInputLabel-root {
    color: ${({ theme }) => theme.textSecondary};

    &.Mui-focused {
      color: ${({ theme }) => theme.interactivePrimary};
    }
  }
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.interactivePrimary} !important;
  color: ${({ theme }) => theme.white} !important;

  &:hover {
    background-color: ${({ theme }) => theme.interactiveHover} !important;
  }
`;

export const StyledDivider = styled(Divider)`
  &.MuiDivider-root {
    border-color: ${({ theme }) => theme.border};
    margin: 20px 0;
  }
`;
