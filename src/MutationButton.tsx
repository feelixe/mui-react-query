import * as React from 'react';
import { ExtendButton } from '@mui/material';
import { LoadingButton, LoadingButtonTypeMap } from '@mui/lab';
import { Mutation } from './types';

type LoadingButtonProps = Parameters<ExtendButton<LoadingButtonTypeMap>>[0]

export type MutationButtonProps = LoadingButtonProps & {
  disabledOnLoading?: boolean;
  mutation: Mutation;
};

export function MutationButton(props: MutationButtonProps){
  const { mutation, disabledOnLoading = true, ...buttonProps } = props;

  const propsWithDefaults: LoadingButtonProps = {
    disabled: disabledOnLoading && mutation.isLoading,
    loading: mutation.isLoading,
    ...buttonProps,
  };
  
  return <LoadingButton {...propsWithDefaults} />;
}
