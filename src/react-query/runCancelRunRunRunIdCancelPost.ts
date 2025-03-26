/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { ComfyDeployCore } from "../core.js";
import { runCancelRunRunRunIdCancelPost } from "../funcs/runCancelRunRunRunIdCancelPost.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useComfyDeployContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type RunCancelRunRunRunIdCancelPostMutationVariables = {
  request: operations.CancelRunRunRunIdCancelPostRequest;
  options?: RequestOptions;
};

export type RunCancelRunRunRunIdCancelPostMutationData = any;

/**
 * Cancel Run
 */
export function useRunCancelRunRunRunIdCancelPostMutation(
  options?: MutationHookOptions<
    RunCancelRunRunRunIdCancelPostMutationData,
    Error,
    RunCancelRunRunRunIdCancelPostMutationVariables
  >,
): UseMutationResult<
  RunCancelRunRunRunIdCancelPostMutationData,
  Error,
  RunCancelRunRunRunIdCancelPostMutationVariables
> {
  const client = useComfyDeployContext();
  return useMutation({
    ...buildRunCancelRunRunRunIdCancelPostMutation(client, options),
    ...options,
  });
}

export function mutationKeyRunCancelRunRunRunIdCancelPost(): MutationKey {
  return ["comfydeploy", "Run", "cancelRunRunRunIdCancelPost"];
}

export function buildRunCancelRunRunRunIdCancelPostMutation(
  client$: ComfyDeployCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: RunCancelRunRunRunIdCancelPostMutationVariables,
  ) => Promise<RunCancelRunRunRunIdCancelPostMutationData>;
} {
  return {
    mutationKey: mutationKeyRunCancelRunRunRunIdCancelPost(),
    mutationFn: function runCancelRunRunRunIdCancelPostMutationFn({
      request,
      options,
    }): Promise<RunCancelRunRunRunIdCancelPostMutationData> {
      const mergedOptions = {
        ...hookOptions,
        ...options,
        fetchOptions: {
          ...hookOptions?.fetchOptions,
          ...options?.fetchOptions,
          signal: combineSignals(
            hookOptions?.fetchOptions?.signal,
            options?.fetchOptions?.signal,
          ),
        },
      };
      return unwrapAsync(runCancelRunRunRunIdCancelPost(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
