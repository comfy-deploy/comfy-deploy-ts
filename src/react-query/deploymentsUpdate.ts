/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { ComfyDeployCore } from "../core.js";
import { deploymentsUpdate } from "../funcs/deploymentsUpdate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useComfyDeployContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type DeploymentsUpdateMutationVariables = {
  request: operations.UpdateDeploymentDeploymentDeploymentIdPatchRequest;
  options?: RequestOptions;
};

export type DeploymentsUpdateMutationData = components.DeploymentModel;

/**
 * Update Deployment
 */
export function useDeploymentsUpdateMutation(
  options?: MutationHookOptions<
    DeploymentsUpdateMutationData,
    Error,
    DeploymentsUpdateMutationVariables
  >,
): UseMutationResult<
  DeploymentsUpdateMutationData,
  Error,
  DeploymentsUpdateMutationVariables
> {
  const client = useComfyDeployContext();
  return useMutation({
    ...buildDeploymentsUpdateMutation(client, options),
    ...options,
  });
}

export function mutationKeyDeploymentsUpdate(): MutationKey {
  return ["comfydeploy", "Deployments", "update"];
}

export function buildDeploymentsUpdateMutation(
  client$: ComfyDeployCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: DeploymentsUpdateMutationVariables,
  ) => Promise<DeploymentsUpdateMutationData>;
} {
  return {
    mutationKey: mutationKeyDeploymentsUpdate(),
    mutationFn: function deploymentsUpdateMutationFn({
      request,
      options,
    }): Promise<DeploymentsUpdateMutationData> {
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
      return unwrapAsync(deploymentsUpdate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
