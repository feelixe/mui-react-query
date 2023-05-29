import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { UseTRPCMutationResult, UseTRPCQueryResult } from '@trpc/react-query/dist/shared';

export type Mutation = UseMutationResult<any, unknown, void, unknown> | UseTRPCMutationResult<any, any, any, any>

export type Query = UseQueryResult | UseTRPCQueryResult<any, any>
