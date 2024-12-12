/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { ComfyDeployCore } from "../core.js";
import { sessionCancel } from "../funcs/sessionCancel.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useComfyDeployContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type SessionCancelMutationVariables = {
  request: operations.DeleteSessionSessionSessionIdDeleteRequest;
  options?: RequestOptions;
};

export type SessionCancelMutationData = components.DeleteSessionResponse;

/**
 * Delete Session
 */
export function useSessionCancelMutation(
  options?: MutationHookOptions<
    SessionCancelMutationData,
    Error,
    SessionCancelMutationVariables
  >,
): UseMutationResult<
  SessionCancelMutationData,
  Error,
  SessionCancelMutationVariables
> {
  const client = useComfyDeployContext();
  return useMutation({
    ...buildSessionCancelMutation(client, options),
    ...options,
  });
}

export function mutationKeySessionCancel(): MutationKey {
  return ["comfydeploy", "Session", "cancel"];
}

export function buildSessionCancelMutation(
  client$: ComfyDeployCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: SessionCancelMutationVariables,
  ) => Promise<SessionCancelMutationData>;
} {
  return {
    mutationKey: mutationKeySessionCancel(),
    mutationFn: function sessionCancelMutationFn({
      request,
      options,
    }): Promise<SessionCancelMutationData> {
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
      return unwrapAsync(sessionCancel(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
