import React from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ToggleButton, Tooltip } from '@mui/material';

import { useTheme } from '@src/hooks/useTheme';

import * as S from './styles';

export default function ThemeColor() {
  const { currentTheme, toggleTheme } = useTheme();

  const handleThemeChange = (newTheme: 'light' | 'dark' | null) => {
    if (newTheme !== null && newTheme !== currentTheme) {
      toggleTheme();
    }
  };

  return (
    <S.StyledToggleButtonGroup
      value={currentTheme}
      exclusive
      onChange={handleThemeChange}
      aria-label="theme selector"
      size="small"
    >
      <ToggleButton value="light" aria-label="light theme">
        <Tooltip title="Tema claro">
          <LightModeIcon />
        </Tooltip>
      </ToggleButton>
      <ToggleButton value="dark" aria-label="dark theme">
        <Tooltip title="Tema escuro">
          <DarkModeIcon />
        </Tooltip>
      </ToggleButton>
    </S.StyledToggleButtonGroup>
  );
}
