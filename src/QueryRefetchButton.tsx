import * as React from 'react';
import { ExtendButton } from '@mui/material';
import { LoadingButton, LoadingButtonTypeMap } from '@mui/lab';
import { Query } from './types';

type LoadingButtonProps = Parameters<ExtendButton<LoadingButtonTypeMap>>[0]

export type QueryRefetchButtonProps = LoadingButtonProps & {
  loadingOnFetching?: boolean;
  disabledOnFetching?: boolean;
  query: Query
};

export function QueryRefetchButton(props: QueryRefetchButtonProps){
  const { query, disabledOnFetching = true, loadingOnFetching = true, ...buttonProps } = props;

  const refetchHandler = () => {
    query.refetch();
  };

  const propsWithDefaults: LoadingButtonProps = {
    onClick: refetchHandler,
    disabled: disabledOnFetching && query.isFetching,
    loading: loadingOnFetching && query.isFetching,
    ...buttonProps,
  };

  return <LoadingButton {...propsWithDefaults} />;
}
