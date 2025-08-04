import React, { useEffect, useState } from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { fetchDepartments } from "@src/api/arts";
import { DepartmentProps } from "@src/types/departaments";

import * as S from "./styles";

interface DepartamentBoxProps {
  onChange?: (department: string) => void;
  value?: string;
}

export default function DepartamentBox({
  onChange,
  value = "",
}: DepartamentBoxProps) {
  const [departmentsOptions, setDepartmentsOptions] = useState<
    DepartmentProps[]
  >([]);
  const [selectedDepartment, setSelectedDepartment] = useState<string>(value);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDepartments = async () => {
      setLoading(true);
      setError(null);

      try {
        const departmentList = await fetchDepartments();
        setDepartmentsOptions(departmentList);
      } catch (err) {
        setError("Erro ao carregar departamentos");
        console.error("Error loading departments:", err);
      } finally {
        setLoading(false);
      }
    };

    loadDepartments();
  }, []);

  useEffect(() => {
    setSelectedDepartment(value);
  }, [value]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value;
    setSelectedDepartment(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  if (error) {
    return (
      <S.Container>
        <S.ErrorMessage>{error}</S.ErrorMessage>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.StyledFormControl>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="department-select-label">Departamento</InputLabel>
          <S.StyledSelect
            disabled={loading}
            id="department-select"
            label="Departamento"
            labelId="department-select-label"
            onChange={handleChange}
            value={selectedDepartment}
          >
            <MenuItem value="">
              <em>Selecione um departamento</em>
            </MenuItem>
            {departmentsOptions.map((department) => (
              <MenuItem
                key={department.departmentId}
                value={department.departmentId}
              >
                {department.departmentId} - {department.displayName}
              </MenuItem>
            ))}
          </S.StyledSelect>
        </FormControl>
      </S.StyledFormControl>
    </S.Container>
  );
}
