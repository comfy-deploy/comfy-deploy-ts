/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { ComfyDeployCore } from "../core.js";
import { sessionIncreaseTimeout } from "../funcs/sessionIncreaseTimeout.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useComfyDeployContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type SessionIncreaseTimeoutMutationVariables = {
  request: components.IncreaseTimeoutBody;
  options?: RequestOptions;
};

export type SessionIncreaseTimeoutMutationData = any;

/**
 * Increase Timeout
 */
export function useSessionIncreaseTimeoutMutation(
  options?: MutationHookOptions<
    SessionIncreaseTimeoutMutationData,
    Error,
    SessionIncreaseTimeoutMutationVariables
  >,
): UseMutationResult<
  SessionIncreaseTimeoutMutationData,
  Error,
  SessionIncreaseTimeoutMutationVariables
> {
  const client = useComfyDeployContext();
  return useMutation({
    ...buildSessionIncreaseTimeoutMutation(client, options),
    ...options,
  });
}

export function mutationKeySessionIncreaseTimeout(): MutationKey {
  return ["comfydeploy", "Session", "increaseTimeout"];
}

export function buildSessionIncreaseTimeoutMutation(
  client$: ComfyDeployCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: SessionIncreaseTimeoutMutationVariables,
  ) => Promise<SessionIncreaseTimeoutMutationData>;
} {
  return {
    mutationKey: mutationKeySessionIncreaseTimeout(),
    mutationFn: function sessionIncreaseTimeoutMutationFn({
      request,
      options,
    }): Promise<SessionIncreaseTimeoutMutationData> {
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
      return unwrapAsync(sessionIncreaseTimeout(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
