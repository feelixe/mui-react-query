import * as React from 'react';
import { CircularProgress as MuiCircularProgress, CircularProgressProps } from '@mui/material';
import { Mutation, Query } from './types';

type MutationCircularProgressProps = CircularProgressProps & ({
  mutation: Mutation;
} | { query: Query, showOnFetching?: boolean })

export function CircularProgress(props: MutationCircularProgressProps){
  if('mutation' in props) {
    const { mutation, ...circularProgressProps } = props;
    if(!mutation.isLoading) {
      return null;
    }
    return <MuiCircularProgress {...circularProgressProps} />;
  }
  else if('query' in props) {
    const { query, showOnFetching = false, ...circularProgressProps } = props;
    if(!query.isLoading && (!showOnFetching || !query.isFetching)) {
      return null;
    }
    return <MuiCircularProgress {...circularProgressProps} />;
  }
  return null;
}
