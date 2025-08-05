import React, { useEffect, useState } from 'react';

import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';

import DepartamentBox from '../DepartamentBox';
import * as S from './styles';

interface SearchBoxProps {
  onSearch?: (query: string, searchType: string, department?: number) => void;
}

const searchTypes = [
  { value: 'artist', label: 'Artista' },
  { value: 'department', label: 'Departamento' },
];

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('artist');
  const [showDepartamentBox, setShowDepartmentBox] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<
    number | undefined
  >();

  useEffect(() => {
    setShowDepartmentBox(searchType === 'department');
  }, [searchType]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleDepartmentChange = (department: number) => {
    setSelectedDepartment(department);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query.trim(), searchType, selectedDepartment);
    }
  };

  return (
    <S.Container>
      <S.SearchRow>
        {!showDepartamentBox ? (
          <S.StyledTextField
            label="Pesquisar arte"
            variant="outlined"
            fullWidth
            data-testid="search-input"
            value={query}
            onChange={handleInputChange}
          />
        ) : (
          <DepartamentBox onChange={handleDepartmentChange} />
        )}
      </S.SearchRow>

      <S.RadioGroupWrapper>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={searchType}
          data-testid="search-type-radio-group"
          onChange={(_, value) => setSearchType(value)}
        >
          {searchTypes.map(item => (
            <FormControlLabel
              key={item.value}
              value={item.value}
              control={<Radio />}
              label={item.label}
            />
          ))}
        </RadioGroup>

        <Button onClick={handleSubmit} variant="contained">
          Procurar
        </Button>
      </S.RadioGroupWrapper>
      <S.StyledDivider />
    </S.Container>
  );
}
