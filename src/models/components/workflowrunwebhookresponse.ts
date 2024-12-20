/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type WorkflowRunWebhookResponse = {
  status: string;
};

/** @internal */
export const WorkflowRunWebhookResponse$inboundSchema: z.ZodType<
  WorkflowRunWebhookResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.string(),
});

/** @internal */
export type WorkflowRunWebhookResponse$Outbound = {
  status: string;
};

/** @internal */
export const WorkflowRunWebhookResponse$outboundSchema: z.ZodType<
  WorkflowRunWebhookResponse$Outbound,
  z.ZodTypeDef,
  WorkflowRunWebhookResponse
> = z.object({
  status: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowRunWebhookResponse$ {
  /** @deprecated use `WorkflowRunWebhookResponse$inboundSchema` instead. */
  export const inboundSchema = WorkflowRunWebhookResponse$inboundSchema;
  /** @deprecated use `WorkflowRunWebhookResponse$outboundSchema` instead. */
  export const outboundSchema = WorkflowRunWebhookResponse$outboundSchema;
  /** @deprecated use `WorkflowRunWebhookResponse$Outbound` instead. */
  export type Outbound = WorkflowRunWebhookResponse$Outbound;
}

export function workflowRunWebhookResponseToJSON(
  workflowRunWebhookResponse: WorkflowRunWebhookResponse,
): string {
  return JSON.stringify(
    WorkflowRunWebhookResponse$outboundSchema.parse(workflowRunWebhookResponse),
  );
}

export function workflowRunWebhookResponseFromJSON(
  jsonString: string,
): SafeParseResult<WorkflowRunWebhookResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WorkflowRunWebhookResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WorkflowRunWebhookResponse' from JSON`,
  );
}
