/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { ComfyDeployCore } from "../core.js";
import { runQueue } from "../funcs/runQueue.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useComfyDeployContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type RunQueueMutationVariables = {
  request: operations.CreateRunQueueRunQueuePostData;
  options?: RequestOptions;
};

export type RunQueueMutationData = components.CreateRunResponse;

/**
 * Queue a workflow
 *
 * @remarks
 * Create a new workflow run with the given parameters. This function sets up the run and initiates the execution process. For callback information, see [Callbacks](#tag/callbacks/POST/\{callback_url\}).
 *
 * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export function useRunQueueMutation(
  options?: MutationHookOptions<
    RunQueueMutationData,
    Error,
    RunQueueMutationVariables
  >,
): UseMutationResult<RunQueueMutationData, Error, RunQueueMutationVariables> {
  const client = useComfyDeployContext();
  return useMutation({
    ...buildRunQueueMutation(client, options),
    ...options,
  });
}

export function mutationKeyRunQueue(): MutationKey {
  return ["comfydeploy", "Run", "queue"];
}

export function buildRunQueueMutation(
  client$: ComfyDeployCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: RunQueueMutationVariables,
  ) => Promise<RunQueueMutationData>;
} {
  return {
    mutationKey: mutationKeyRunQueue(),
    mutationFn: function runQueueMutationFn({
      request,
      options,
    }): Promise<RunQueueMutationData> {
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
      return unwrapAsync(runQueue(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
