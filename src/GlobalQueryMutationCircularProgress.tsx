import { CircularProgress, CircularProgressProps } from '@mui/material';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import * as React from 'react';

export type GlobalQueryMutationCircularProgressProps = CircularProgressProps

export function GlobalQueryMutationCircularProgress(props: GlobalQueryMutationCircularProgressProps) {
  const numFetching = useIsFetching();
  const numMutating = useIsMutating();

  if(numFetching + numMutating <= 0) {
    return null;
  }

  return <CircularProgress {...props} />;
}
