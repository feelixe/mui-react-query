import * as React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';
import { Query } from './types';

export type QueryRefetchButtonIconProps = Omit<IconButtonProps, 'children'> & {
  disabledOnFetching?: boolean;
  query: Query,
  children: React.ReactElement
};

export function QueryRefetchIconButton(props: QueryRefetchButtonIconProps){
  const { query, disabledOnFetching = true, ...iconButtonProps } = props;

  const refetchHandler = () => {
    query.refetch();
  };

  const propsWithDefaults: IconButtonProps = {
    onClick: refetchHandler,
    disabled: disabledOnFetching && query.isFetching,
    ...iconButtonProps,
  };

  return <IconButton {...propsWithDefaults} />;
}
