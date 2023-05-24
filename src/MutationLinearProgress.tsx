import * as React from 'react';
import { LinearProgress, LinearProgressProps } from '@mui/material';
import { UseMutationResult } from '@tanstack/react-query';

type MutationLinearProgressProps = LinearProgressProps & {
  mutation: UseMutationResult<any, unknown, void, unknown>;
}

export function MutationLinearProgress(props: MutationLinearProgressProps){
  const { mutation, ...circularProgressProps } = props;

  if(!mutation.isLoading) {
    return null;
  }

  return (
    <LinearProgress {...circularProgressProps} />
  );
}
