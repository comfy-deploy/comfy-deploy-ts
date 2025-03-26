/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { ComfyDeployCore } from "../core.js";
import { runDeploymentQueue } from "../funcs/runDeploymentQueue.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useComfyDeployContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type RunDeploymentQueueMutationVariables = {
  request: components.DeploymentRunRequest;
  options?: RequestOptions;
};

export type RunDeploymentQueueMutationData = components.CreateRunResponse;

/**
 * Queue Run
 *
 * @remarks
 * Create a new deployment run with the given parameters.
 */
export function useRunDeploymentQueueMutation(
  options?: MutationHookOptions<
    RunDeploymentQueueMutationData,
    Error,
    RunDeploymentQueueMutationVariables
  >,
): UseMutationResult<
  RunDeploymentQueueMutationData,
  Error,
  RunDeploymentQueueMutationVariables
> {
  const client = useComfyDeployContext();
  return useMutation({
    ...buildRunDeploymentQueueMutation(client, options),
    ...options,
  });
}

export function mutationKeyRunDeploymentQueue(): MutationKey {
  return ["comfydeploy", "deployment", "queue"];
}

export function buildRunDeploymentQueueMutation(
  client$: ComfyDeployCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: RunDeploymentQueueMutationVariables,
  ) => Promise<RunDeploymentQueueMutationData>;
} {
  return {
    mutationKey: mutationKeyRunDeploymentQueue(),
    mutationFn: function runDeploymentQueueMutationFn({
      request,
      options,
    }): Promise<RunDeploymentQueueMutationData> {
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
      return unwrapAsync(runDeploymentQueue(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
