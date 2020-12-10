import React, { FC } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import MaterialSelect from '@material-ui/core/Select';

import { FormHelperText } from '@material-ui/core';
import { ISelectOption } from '../../../types';

interface IProps {
  options: ISelectOption[];
  selectedOption: string;
  label: string;
  onSelectOption: (option: string) => void;
  error?: any;
  helperText?: string;
}

const Select: FC<IProps> = ({
  options,
  selectedOption,
  label,
  onSelectOption,
  error,
  helperText,
}) => {
  const onChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onSelectOption(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
      <MaterialSelect
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={selectedOption}
        onChange={onChange}
        fullWidth
        error={error}
      >
        {options.map((option) => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </MaterialSelect>
      {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
