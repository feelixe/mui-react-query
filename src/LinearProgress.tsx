import * as React from 'react';
import { LinearProgress as  MuiLinearProgress, LinearProgressProps } from '@mui/material';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';

type MutationLinearProgressProps = LinearProgressProps & ({
  mutation: UseMutationResult<any, unknown, void, unknown>;
} | { query: UseQueryResult })

export function LinearProgress(props: MutationLinearProgressProps){
  if(('mutation' in props && props.mutation.isLoading) || ('query' in props && props.query.isLoading)) {
    return <MuiLinearProgress {...props} />;
  }

  return null;
}
