/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { ComfyDeployCore } from "../core.js";
import { runWorkflowSync } from "../funcs/runWorkflowSync.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useComfyDeployContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type RunWorkflowSyncMutationVariables = {
  request: components.WorkflowRunRequest;
  options?: RequestOptions;
};

export type RunWorkflowSyncMutationData = Array<
  components.WorkflowRunOutputModel
>;

/**
 * Workflow - Sync
 *
 * @remarks
 * Create a new workflow run with the given parameters.
 */
export function useRunWorkflowSyncMutation(
  options?: MutationHookOptions<
    RunWorkflowSyncMutationData,
    Error,
    RunWorkflowSyncMutationVariables
  >,
): UseMutationResult<
  RunWorkflowSyncMutationData,
  Error,
  RunWorkflowSyncMutationVariables
> {
  const client = useComfyDeployContext();
  return useMutation({
    ...buildRunWorkflowSyncMutation(client, options),
    ...options,
  });
}

export function mutationKeyRunWorkflowSync(): MutationKey {
  return ["comfydeploy", "workflow", "sync"];
}

export function buildRunWorkflowSyncMutation(
  client$: ComfyDeployCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: RunWorkflowSyncMutationVariables,
  ) => Promise<RunWorkflowSyncMutationData>;
} {
  return {
    mutationKey: mutationKeyRunWorkflowSync(),
    mutationFn: function runWorkflowSyncMutationFn({
      request,
      options,
    }): Promise<RunWorkflowSyncMutationData> {
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
      return unwrapAsync(runWorkflowSync(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
