import * as React from 'react';
import { LinearProgress as  MuiLinearProgress, LinearProgressProps } from '@mui/material';
import { Mutation, Query } from './types';

type MutationLinearProgressProps = LinearProgressProps & ({
  mutation: Mutation;
} | { query: Query })

export function LinearProgress(props: MutationLinearProgressProps){
  if(('mutation' in props && props.mutation.isLoading) || ('query' in props && props.query.isLoading)) {
    return <MuiLinearProgress {...props} />;
  }

  return null;
}
