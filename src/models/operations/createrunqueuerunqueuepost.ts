/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateRunQueueRunQueuePostData =
  | components.DeploymentRunRequest
  | components.ModelRunRequest
  | components.WorkflowRunVersionRequest
  | components.WorkflowRunRequest;

/** @internal */
export const CreateRunQueueRunQueuePostData$inboundSchema: z.ZodType<
  CreateRunQueueRunQueuePostData,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.DeploymentRunRequest$inboundSchema,
  components.ModelRunRequest$inboundSchema,
  components.WorkflowRunVersionRequest$inboundSchema,
  components.WorkflowRunRequest$inboundSchema,
]);

/** @internal */
export type CreateRunQueueRunQueuePostData$Outbound =
  | components.DeploymentRunRequest$Outbound
  | components.ModelRunRequest$Outbound
  | components.WorkflowRunVersionRequest$Outbound
  | components.WorkflowRunRequest$Outbound;

/** @internal */
export const CreateRunQueueRunQueuePostData$outboundSchema: z.ZodType<
  CreateRunQueueRunQueuePostData$Outbound,
  z.ZodTypeDef,
  CreateRunQueueRunQueuePostData
> = z.union([
  components.DeploymentRunRequest$outboundSchema,
  components.ModelRunRequest$outboundSchema,
  components.WorkflowRunVersionRequest$outboundSchema,
  components.WorkflowRunRequest$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRunQueueRunQueuePostData$ {
  /** @deprecated use `CreateRunQueueRunQueuePostData$inboundSchema` instead. */
  export const inboundSchema = CreateRunQueueRunQueuePostData$inboundSchema;
  /** @deprecated use `CreateRunQueueRunQueuePostData$outboundSchema` instead. */
  export const outboundSchema = CreateRunQueueRunQueuePostData$outboundSchema;
  /** @deprecated use `CreateRunQueueRunQueuePostData$Outbound` instead. */
  export type Outbound = CreateRunQueueRunQueuePostData$Outbound;
}

export function createRunQueueRunQueuePostDataToJSON(
  createRunQueueRunQueuePostData: CreateRunQueueRunQueuePostData,
): string {
  return JSON.stringify(
    CreateRunQueueRunQueuePostData$outboundSchema.parse(
      createRunQueueRunQueuePostData,
    ),
  );
}

export function createRunQueueRunQueuePostDataFromJSON(
  jsonString: string,
): SafeParseResult<CreateRunQueueRunQueuePostData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateRunQueueRunQueuePostData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateRunQueueRunQueuePostData' from JSON`,
  );
}
