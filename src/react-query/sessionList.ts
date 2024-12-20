/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  InvalidateQueryFilters,
  QueryClient,
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryResult,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { ComfyDeployCore } from "../core.js";
import { sessionList } from "../funcs/sessionList.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useComfyDeployContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type SessionListQueryData = Array<components.GPUEventModel>;

/**
 * Get Machine Sessions
 */
export function useSessionList(
  request: operations.GetMachineSessionsSessionsGetRequest,
  options?: QueryHookOptions<SessionListQueryData>,
): UseQueryResult<SessionListQueryData, Error> {
  const client = useComfyDeployContext();
  return useQuery({
    ...buildSessionListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get Machine Sessions
 */
export function useSessionListSuspense(
  request: operations.GetMachineSessionsSessionsGetRequest,
  options?: SuspenseQueryHookOptions<SessionListQueryData>,
): UseSuspenseQueryResult<SessionListQueryData, Error> {
  const client = useComfyDeployContext();
  return useSuspenseQuery({
    ...buildSessionListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchSessionList(
  queryClient: QueryClient,
  client$: ComfyDeployCore,
  request: operations.GetMachineSessionsSessionsGetRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildSessionListQuery(
      client$,
      request,
    ),
  });
}

export function setSessionListData(
  client: QueryClient,
  queryKeyBase: [parameters: { machineId: string }],
  data: SessionListQueryData,
): SessionListQueryData | undefined {
  const key = queryKeySessionList(...queryKeyBase);

  return client.setQueryData<SessionListQueryData>(key, data);
}

export function invalidateSessionList(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[parameters: { machineId: string }]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["comfydeploy", "Session", "list", ...queryKeyBase],
  });
}

export function invalidateAllSessionList(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["comfydeploy", "Session", "list"],
  });
}

export function buildSessionListQuery(
  client$: ComfyDeployCore,
  request: operations.GetMachineSessionsSessionsGetRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<SessionListQueryData>;
} {
  return {
    queryKey: queryKeySessionList({ machineId: request.machineId }),
    queryFn: async function sessionListQueryFn(
      ctx,
    ): Promise<SessionListQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(sessionList(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeySessionList(
  parameters: { machineId: string },
): QueryKey {
  return ["comfydeploy", "Session", "list", parameters];
}
