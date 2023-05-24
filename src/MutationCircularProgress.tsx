import * as React from 'react';
import { CircularProgress, CircularProgressProps } from '@mui/material';
import { UseMutationResult } from '@tanstack/react-query';

type MutationCircularProgressProps = CircularProgressProps & {
  mutation: UseMutationResult<any, unknown, void, unknown>;
}

export function MutationCircularProgress(props: MutationCircularProgressProps){
  const { mutation, ...circularProgressProps } = props;

  if(!mutation.isLoading) {
    return null;
  }

  return (
    <CircularProgress {...circularProgressProps} />
  );
}
