import { useMutation, useQuery } from '@tanstack/react-query';
import * as React from 'react';
import {
  MutationButton,
  MutationLinearProgress,
  MutationCircularProgress,
  QueryAutoComplete,
  QueryRefetchButton,
  QueryRefetchIconButton,
} from 'mui-react-query';
import { sleep } from './sleep';
import { Refresh } from '@mui/icons-material';

export function Home() {

  const query = useQuery({
    queryKey: ['asdf'],
    queryFn: async () => {
      await sleep(1000);
      return [{id: 1, name: 'hello'}, {id: 2, name: 'aasdio'}];
    },
  });

  const mutation = useMutation({
    mutationFn: async () => {
      
      await sleep(1000);
      return 'ok';
    },
  });

  return (
    <div>
      <MutationLinearProgress mutation={mutation} />
      <MutationCircularProgress mutation={mutation} />
      <QueryRefetchButton query={query} variant='contained'>Reload</QueryRefetchButton>
      <QueryRefetchIconButton query={query}><Refresh /></QueryRefetchIconButton>
      <MutationButton onClick={() => mutation.mutate()} mutation={mutation} variant='contained'>Start loading</MutationButton>
      <QueryAutoComplete query={query} getOptionLabel={(o) => o.name} />
      
    </div>
  );
}

