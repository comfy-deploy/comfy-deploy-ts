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
import { deploymentsList } from "../funcs/deploymentsList.js";
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

export type DeploymentsListQueryData = Array<components.DeploymentModel>;

/**
 * Get Deployments
 */
export function useDeploymentsList(
  request: operations.GetDeploymentsDeploymentsGetRequest,
  options?: QueryHookOptions<DeploymentsListQueryData>,
): UseQueryResult<DeploymentsListQueryData, Error> {
  const client = useComfyDeployContext();
  return useQuery({
    ...buildDeploymentsListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get Deployments
 */
export function useDeploymentsListSuspense(
  request: operations.GetDeploymentsDeploymentsGetRequest,
  options?: SuspenseQueryHookOptions<DeploymentsListQueryData>,
): UseSuspenseQueryResult<DeploymentsListQueryData, Error> {
  const client = useComfyDeployContext();
  return useSuspenseQuery({
    ...buildDeploymentsListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchDeploymentsList(
  queryClient: QueryClient,
  client$: ComfyDeployCore,
  request: operations.GetDeploymentsDeploymentsGetRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildDeploymentsListQuery(
      client$,
      request,
    ),
  });
}

export function setDeploymentsListData(
  client: QueryClient,
  queryKeyBase: [
    parameters: {
      environment?: components.DeploymentEnvironment | null | undefined;
    },
  ],
  data: DeploymentsListQueryData,
): DeploymentsListQueryData | undefined {
  const key = queryKeyDeploymentsList(...queryKeyBase);

  return client.setQueryData<DeploymentsListQueryData>(key, data);
}

export function invalidateDeploymentsList(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: {
      environment?: components.DeploymentEnvironment | null | undefined;
    }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["comfydeploy", "Deployments", "list", ...queryKeyBase],
  });
}

export function invalidateAllDeploymentsList(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["comfydeploy", "Deployments", "list"],
  });
}

export function buildDeploymentsListQuery(
  client$: ComfyDeployCore,
  request: operations.GetDeploymentsDeploymentsGetRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<DeploymentsListQueryData>;
} {
  return {
    queryKey: queryKeyDeploymentsList({ environment: request.environment }),
    queryFn: async function deploymentsListQueryFn(
      ctx,
    ): Promise<DeploymentsListQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(deploymentsList(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyDeploymentsList(
  parameters: {
    environment?: components.DeploymentEnvironment | null | undefined;
  },
): QueryKey {
  return ["comfydeploy", "Deployments", "list", parameters];
}
