import * as React from 'react';
import { AutocompleteProps, ChipTypeMap, Autocomplete as MuiAutoComplete, TextField } from '@mui/material';
import { Query } from './types';

export type QueryAutoCompleteProps<T extends any[],
Multiple extends boolean | undefined = false,
DisableClearable extends boolean | undefined = false,
FreeSolo extends boolean | undefined = false,
ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']> = Partial<AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>> & {
  query: Query
}

export function QueryAutoComplete<
  T extends any[],
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
  >(props: QueryAutoCompleteProps<T[number], Multiple, DisableClearable, FreeSolo, ChipComponent>){
  
  const isLoading = props.query.isLoading;

  const propsWithDefaults: AutocompleteProps<T[number], Multiple, DisableClearable, FreeSolo, ChipComponent> = {
    loading: isLoading,
    options: props.query.data ?? [],
    disablePortal: true,
    renderInput: (params) => <TextField {...params} label="Movie" />,
    ...props,
  };

  return (
    <MuiAutoComplete {...propsWithDefaults} />
  );
}
