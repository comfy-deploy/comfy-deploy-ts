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
import { searchSearchSearchModelGet } from "../funcs/searchSearchSearchModelGet.js";
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

export type SearchSearchSearchModelGetQueryData =
  components.SearchModelsResponse;

/**
 * Search
 */
export function useSearchSearchSearchModelGet(
  request: operations.SearchSearchModelGetRequest,
  options?: QueryHookOptions<SearchSearchSearchModelGetQueryData>,
): UseQueryResult<SearchSearchSearchModelGetQueryData, Error> {
  const client = useComfyDeployContext();
  return useQuery({
    ...buildSearchSearchSearchModelGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Search
 */
export function useSearchSearchSearchModelGetSuspense(
  request: operations.SearchSearchModelGetRequest,
  options?: SuspenseQueryHookOptions<SearchSearchSearchModelGetQueryData>,
): UseSuspenseQueryResult<SearchSearchSearchModelGetQueryData, Error> {
  const client = useComfyDeployContext();
  return useSuspenseQuery({
    ...buildSearchSearchSearchModelGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchSearchSearchSearchModelGet(
  queryClient: QueryClient,
  client$: ComfyDeployCore,
  request: operations.SearchSearchModelGetRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildSearchSearchSearchModelGetQuery(
      client$,
      request,
    ),
  });
}

export function setSearchSearchSearchModelGetData(
  client: QueryClient,
  queryKeyBase: [parameters: { query: string; provider?: string | undefined }],
  data: SearchSearchSearchModelGetQueryData,
): SearchSearchSearchModelGetQueryData | undefined {
  const key = queryKeySearchSearchSearchModelGet(...queryKeyBase);

  return client.setQueryData<SearchSearchSearchModelGetQueryData>(key, data);
}

export function invalidateSearchSearchSearchModelGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [parameters: { query: string; provider?: string | undefined }]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "comfydeploy",
      "Search",
      "searchSearchModelGet",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllSearchSearchSearchModelGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["comfydeploy", "Search", "searchSearchModelGet"],
  });
}

export function buildSearchSearchSearchModelGetQuery(
  client$: ComfyDeployCore,
  request: operations.SearchSearchModelGetRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<SearchSearchSearchModelGetQueryData>;
} {
  return {
    queryKey: queryKeySearchSearchSearchModelGet({
      query: request.query,
      provider: request.provider,
    }),
    queryFn: async function searchSearchSearchModelGetQueryFn(
      ctx,
    ): Promise<SearchSearchSearchModelGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(searchSearchSearchModelGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeySearchSearchSearchModelGet(
  parameters: { query: string; provider?: string | undefined },
): QueryKey {
  return ["comfydeploy", "Search", "searchSearchModelGet", parameters];
}
