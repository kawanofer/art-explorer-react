import React from 'react';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchBox from './index';

// Mock crítico do DepartamentBox
jest.mock('../DepartamentBox', () => ({
  __esModule: true,
  default: ({ onChange }: { onChange: (value: number) => void }) => (
    <div data-testid="department-box">
      <button data-testid="select-dept-1" onClick={() => onChange(1)}>
        Select Dept 1
      </button>
      <button data-testid="select-dept-2" onClick={() => onChange(2)}>
        Select Dept 2
      </button>
    </div>
  ),
}));

describe('SearchBox - Critical Tests', () => {
  const mockOnSearch = jest.fn();
  const user = userEvent.setup();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Initial State & Rendering', () => {
    it('should render in artist mode by default', () => {
      render(<SearchBox onSearch={mockOnSearch} />);

      // CRÍTICO: Deve iniciar no modo artista
      expect(screen.getByLabelText('Pesquisar arte')).toBeInTheDocument();
      expect(screen.getByLabelText('Artista')).toBeChecked();
      expect(screen.getByLabelText('Departamento')).not.toBeChecked();
      expect(screen.queryByTestId('department-box')).not.toBeInTheDocument();
    });

    it('should render all essential UI elements', () => {
      render(<SearchBox onSearch={mockOnSearch} />);

      // CRÍTICO: Elementos essenciais devem estar presentes
      expect(screen.getByLabelText('Artista')).toBeInTheDocument();
      expect(screen.getByLabelText('Departamento')).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'Procurar' })
      ).toBeInTheDocument();
    });
  });

  describe('Search Type Toggle', () => {
    it('should switch to department mode and show DepartamentBox', async () => {
      render(<SearchBox onSearch={mockOnSearch} />);

      // CRÍTICO: Toggle deve funcionar
      await user.click(screen.getByLabelText('Departamento'));

      await waitFor(() => {
        expect(
          screen.queryByLabelText('Pesquisar arte')
        ).not.toBeInTheDocument();
        expect(screen.getByTestId('department-box')).toBeInTheDocument();
      });

      expect(screen.getByLabelText('Departamento')).toBeChecked();
      expect(screen.getByLabelText('Artista')).not.toBeChecked();
    });

    it('should switch back to artist mode and hide DepartamentBox', async () => {
      render(<SearchBox onSearch={mockOnSearch} />);

      // Ir para departamento
      await user.click(screen.getByLabelText('Departamento'));
      await waitFor(() => {
        expect(screen.getByTestId('department-box')).toBeInTheDocument();
      });

      // CRÍTICO: Voltar para artista deve esconder departamento
      await user.click(screen.getByLabelText('Artista'));

      await waitFor(() => {
        expect(screen.getByLabelText('Pesquisar arte')).toBeInTheDocument();
        expect(screen.queryByTestId('department-box')).not.toBeInTheDocument();
      });
    });
  });

  describe('Artist Search Functionality', () => {
    it('should capture and submit artist search query', async () => {
      render(<SearchBox onSearch={mockOnSearch} />);

      const searchInput = screen.getByLabelText('Pesquisar arte');
      const searchButton = screen.getByRole('button', { name: 'Procurar' });

      // CRÍTICO: Input deve capturar texto
      await user.type(searchInput, 'Leonardo da Vinci');
      expect(searchInput).toHaveValue('Leonardo da Vinci');

      // CRÍTICO: Submit deve chamar onSearch com parâmetros corretos
      await user.click(searchButton);

      expect(mockOnSearch).toHaveBeenCalledTimes(1);
      expect(mockOnSearch).toHaveBeenCalledWith(
        'Leonardo da Vinci',
        'artist',
        undefined
      );
    });
  });

  describe('Department Search Functionality', () => {
    it('should handle department selection and submit', async () => {
      render(<SearchBox onSearch={mockOnSearch} />);

      // Mudar para modo departamento
      await user.click(screen.getByLabelText('Departamento'));

      await waitFor(() => {
        expect(screen.getByTestId('department-box')).toBeInTheDocument();
      });

      // CRÍTICO: Seleção de departamento deve funcionar
      await user.click(screen.getByTestId('select-dept-2'));

      const searchButton = screen.getByRole('button', { name: 'Procurar' });
      await user.click(searchButton);

      expect(mockOnSearch).toHaveBeenCalledWith('', 'department', 2);
    });
  });

  describe('Integration with DepartamentBox', () => {
    it('should properly communicate with DepartamentBox onChange', async () => {
      render(<SearchBox onSearch={mockOnSearch} />);

      await user.click(screen.getByLabelText('Departamento'));

      await waitFor(() => {
        expect(screen.getByTestId('department-box')).toBeInTheDocument();
      });

      // CRÍTICO: Mudança no DepartamentBox deve ser capturada
      await user.click(screen.getByTestId('select-dept-2'));

      const searchButton = screen.getByRole('button', { name: 'Procurar' });
      await user.click(searchButton);

      expect(mockOnSearch).toHaveBeenCalledWith('', 'department', 2);
    });

    it('should handle department value type conversion', async () => {
      render(<SearchBox onSearch={mockOnSearch} />);

      await user.click(screen.getByLabelText('Departamento'));

      await waitFor(() => {
        expect(screen.getByTestId('department-box')).toBeInTheDocument();
      });

      // Simular valor string que deve ser convertido para number
      fireEvent.click(screen.getByTestId('select-dept-1'));

      const searchButton = screen.getByRole('button', { name: 'Procurar' });
      await user.click(searchButton);

      // CRÍTICO: Valor deve ser number, não string
      expect(mockOnSearch).toHaveBeenCalledWith('', 'department', 1);
      expect(typeof mockOnSearch.mock.calls[0][2]).toBe('number');
    });
  });
});
