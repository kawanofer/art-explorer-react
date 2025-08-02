import React, { useState } from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

import * as S from "./styles";

interface SearchBoxProps {
  onSearch?: (query: string, searchType: string) => void;
}

const searchTypes = [
  { value: "artist", label: "Artista" },
  { value: "department", label: "Departamento" },
];

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("artist");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query, searchType);
    }
  };

  return (
    <S.Container>
      <S.StyledTextField
        label="Pesquisar arte"
        variant="outlined"
        fullWidth
        value={query}
        onChange={handleInputChange}
      />

      <S.RadioGroupWrapper>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={searchType}
          onChange={(_, value) => setSearchType(value)}
        >
          {searchTypes.map((item) => (
            <FormControlLabel
              key={item.value}
              value={item.value}
              control={<Radio />}
              label={item.label}
            />
          ))}
        </RadioGroup>

        <S.StyledButton onClick={handleSubmit} variant="contained">
          Procurar
        </S.StyledButton>
      </S.RadioGroupWrapper>
      <S.StyledDivider />
    </S.Container>
  );
}
