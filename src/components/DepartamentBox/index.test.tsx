import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { fetchDepartments } from '@src/api/arts';

import { DepartmentProps } from '@src/types/departaments';

import DepartamentBox from './index';

// Mock da API
jest.mock('@src/api/arts', () => ({
  fetchDepartments: jest.fn(),
}));

const mockFetchDepartments = fetchDepartments as jest.MockedFunction<
  typeof fetchDepartments
>;

// Mock de departamentos para testes
const mockDepartments: DepartmentProps[] = [
  {
    departmentId: 1,
    displayName: 'American Decorative Arts',
  },
  {
    departmentId: 3,
    displayName: 'Ancient Near Eastern Art',
  },
  {
    departmentId: 4,
    displayName: 'Arms and Armor',
  },
  {
    departmentId: 5,
    displayName: 'Arts of Africa, Oceania, and the Americas',
  },
];

describe('DepartamentBox Component', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    jest.clearAllMocks();
    mockFetchDepartments.mockResolvedValue(mockDepartments);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('Rendering', () => {
    it('should render the department select with label', async () => {
      render(<DepartamentBox />);

      // Verificar se o label está presente
      expect(screen.getByLabelText('Departamento')).toBeInTheDocument();

      // Verificar se o select está presente
      expect(screen.getByRole('combobox')).toBeInTheDocument();

      // Aguardar carregamento dos departamentos
      await waitFor(() => {
        expect(mockFetchDepartments).toHaveBeenCalledTimes(1);
      });

      // Aguardar até que o select não esteja mais desabilitado
      await waitFor(() => {
        expect(screen.getByRole('combobox')).not.toBeDisabled();
      });
    });

    it('should render default option when departments are loaded', async () => {
      render(<DepartamentBox />);

      // Aguardar carregamento completo
      await waitFor(() => {
        expect(screen.getByRole('combobox')).not.toBeDisabled();
      });

      const select = screen.getByRole('combobox');
      await user.click(select);

      await waitFor(() => {
        expect(
          screen.getByText('Selecione um departamento')
        ).toBeInTheDocument();
      });
    });
  });
});
