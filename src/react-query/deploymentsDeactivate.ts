/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { ComfyDeployCore } from "../core.js";
import { deploymentsDeactivate } from "../funcs/deploymentsDeactivate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useComfyDeployContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type DeploymentsDeactivateMutationVariables = {
  request:
    operations.DeactivateDeploymentDeploymentDeploymentIdDeactivatePostRequest;
  options?: RequestOptions;
};

export type DeploymentsDeactivateMutationData = components.DeploymentModel;

/**
 * Deactivate Deployment
 */
export function useDeploymentsDeactivateMutation(
  options?: MutationHookOptions<
    DeploymentsDeactivateMutationData,
    Error,
    DeploymentsDeactivateMutationVariables
  >,
): UseMutationResult<
  DeploymentsDeactivateMutationData,
  Error,
  DeploymentsDeactivateMutationVariables
> {
  const client = useComfyDeployContext();
  return useMutation({
    ...buildDeploymentsDeactivateMutation(client, options),
    ...options,
  });
}

export function mutationKeyDeploymentsDeactivate(): MutationKey {
  return ["comfydeploy", "Deployments", "deactivate"];
}

export function buildDeploymentsDeactivateMutation(
  client$: ComfyDeployCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: DeploymentsDeactivateMutationVariables,
  ) => Promise<DeploymentsDeactivateMutationData>;
} {
  return {
    mutationKey: mutationKeyDeploymentsDeactivate(),
    mutationFn: function deploymentsDeactivateMutationFn({
      request,
      options,
    }): Promise<DeploymentsDeactivateMutationData> {
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
      return unwrapAsync(deploymentsDeactivate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
