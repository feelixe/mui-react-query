# MUI React Query

**mui-react-query** is a project that provides Material-UI (MUI) components integrated with React Query.

## Installation

To install mui-react-query, run the following command:

```bash
npm install mui-react-query
```

## Features
- Works with `@tanstack/react-query` and `@trpc/react-query`.

## Components

### `CircularProgress`
A MUI Circular progress spinner component that's only visible while a query or mutation is loading.
```tsx
import { CircularProgress } from 'mui-react-query';

<CircularProgress mutation={myMutation} />
<CircularProgress query={myQuery} showOnFetching={true} />
```

### `GlobalQueryMutationCircularProgress`
A MUI Circular progress spinner component that represents global loading state across all React Query queries and mutations. 
```tsx
import { GlobalQueryMutationCircularProgress } from 'mui-react-query';

<GlobalQueryMutationCircularProgress />
```

### `LinearProgress`
A MUI Linear progress bar component that's only visible while a query or mutation is loading.
```tsx
import { LinearProgress } from 'mui-react-query';

<LinearProgress mutation={myMutation} />
<LinearProgress query={myQuery} />
```

### `MutationButton`
A MUI button that shows a loading spinner while the mutation is loading. Defaults to being disabled during loading aswell.
```tsx
import { MutationButton } from 'mui-react-query';

<MutationButton mutation={myMutation} disabledOnLoading={true} />
```

### `QueryAutoComplete`
A MUI Autocomplete component that integrates with a React Query query's loading state and data.
```tsx
import { QueryAutoComplete } from 'mui-react-query';

<QueryAutoComplete query={myQuery} />
```

### `QueryRefetchButton`
An MUI button that triggers a query to refetch on click. Button defaults to being disabled while query is fetching.
```tsx
import { QueryRefetchButton } from 'mui-react-query';

<QueryRefetchButton query={myQuery} loadingOnFetching={true} disabledOnFetching={true} />
```

### `QueryRefetchIconButton`
An MUI icon button that triggers a query to refetch on click. Button defaults to being disabled while query is fetching.
```tsx
import { QueryRefetchIconButton } from 'mui-react-query';
import { RefreshIcon } from '@mui/icons-material';

<QueryRefetchIconButton query={myQuery} disabledOnFetching={true}>
  <RefreshIcon />
</QueryRefetchIconButton>
```