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
import { deploymentsGetShareDeploymentShareUsernameSlugGet } from "../funcs/deploymentsGetShareDeploymentShareUsernameSlugGet.js";
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

export type DeploymentsGetShareDeploymentShareUsernameSlugGetQueryData =
  components.DeploymentShareModel;

/**
 * Get Share Deployment
 */
export function useDeploymentsGetShareDeploymentShareUsernameSlugGet(
  request: operations.GetShareDeploymentShareUsernameSlugGetRequest,
  options?: QueryHookOptions<
    DeploymentsGetShareDeploymentShareUsernameSlugGetQueryData
  >,
): UseQueryResult<
  DeploymentsGetShareDeploymentShareUsernameSlugGetQueryData,
  Error
> {
  const client = useComfyDeployContext();
  return useQuery({
    ...buildDeploymentsGetShareDeploymentShareUsernameSlugGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get Share Deployment
 */
export function useDeploymentsGetShareDeploymentShareUsernameSlugGetSuspense(
  request: operations.GetShareDeploymentShareUsernameSlugGetRequest,
  options?: SuspenseQueryHookOptions<
    DeploymentsGetShareDeploymentShareUsernameSlugGetQueryData
  >,
): UseSuspenseQueryResult<
  DeploymentsGetShareDeploymentShareUsernameSlugGetQueryData,
  Error
> {
  const client = useComfyDeployContext();
  return useSuspenseQuery({
    ...buildDeploymentsGetShareDeploymentShareUsernameSlugGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchDeploymentsGetShareDeploymentShareUsernameSlugGet(
  queryClient: QueryClient,
  client$: ComfyDeployCore,
  request: operations.GetShareDeploymentShareUsernameSlugGetRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildDeploymentsGetShareDeploymentShareUsernameSlugGetQuery(
      client$,
      request,
    ),
  });
}

export function setDeploymentsGetShareDeploymentShareUsernameSlugGetData(
  client: QueryClient,
  queryKeyBase: [username: string, slug: string],
  data: DeploymentsGetShareDeploymentShareUsernameSlugGetQueryData,
): DeploymentsGetShareDeploymentShareUsernameSlugGetQueryData | undefined {
  const key = queryKeyDeploymentsGetShareDeploymentShareUsernameSlugGet(
    ...queryKeyBase,
  );

  return client.setQueryData<
    DeploymentsGetShareDeploymentShareUsernameSlugGetQueryData
  >(key, data);
}

export function invalidateDeploymentsGetShareDeploymentShareUsernameSlugGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<[username: string, slug: string]>,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "comfydeploy",
      "Deployments",
      "getShareDeploymentShareUsernameSlugGet",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllDeploymentsGetShareDeploymentShareUsernameSlugGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "comfydeploy",
      "Deployments",
      "getShareDeploymentShareUsernameSlugGet",
    ],
  });
}

export function buildDeploymentsGetShareDeploymentShareUsernameSlugGetQuery(
  client$: ComfyDeployCore,
  request: operations.GetShareDeploymentShareUsernameSlugGetRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<DeploymentsGetShareDeploymentShareUsernameSlugGetQueryData>;
} {
  return {
    queryKey: queryKeyDeploymentsGetShareDeploymentShareUsernameSlugGet(
      request.username,
      request.slug,
    ),
    queryFn:
      async function deploymentsGetShareDeploymentShareUsernameSlugGetQueryFn(
        ctx,
      ): Promise<DeploymentsGetShareDeploymentShareUsernameSlugGetQueryData> {
        const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
        const mergedOptions = {
          ...options,
          fetchOptions: { ...options?.fetchOptions, signal: sig },
        };

        return unwrapAsync(deploymentsGetShareDeploymentShareUsernameSlugGet(
          client$,
          request,
          mergedOptions,
        ));
      },
  };
}

export function queryKeyDeploymentsGetShareDeploymentShareUsernameSlugGet(
  username: string,
  slug: string,
): QueryKey {
  return [
    "comfydeploy",
    "Deployments",
    "getShareDeploymentShareUsernameSlugGet",
    username,
    slug,
  ];
}
