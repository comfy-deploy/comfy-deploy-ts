/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type WorkflowRunVersionRequestInputs =
  | string
  | number
  | number
  | boolean
  | Array<any>;

/**
 * The GPU to override the machine's default GPU
 */
export const WorkflowRunVersionRequestGpu = {
  T4: "T4",
  L4: "L4",
  A10G: "A10G",
  A100: "A100",
  A10080Gb: "A100-80GB",
  H100: "H100",
} as const;
/**
 * The GPU to override the machine's default GPU
 */
export type WorkflowRunVersionRequestGpu = ClosedEnum<
  typeof WorkflowRunVersionRequestGpu
>;

export type WorkflowRunVersionRequest = {
  /**
   * The inputs to the workflow
   */
  inputs?:
    | { [k: string]: string | number | number | boolean | Array<any> }
    | undefined;
  webhook?: string | undefined;
  webhookIntermediateStatus?: boolean | undefined;
  /**
   * The GPU to override the machine's default GPU
   */
  gpu?: WorkflowRunVersionRequestGpu | undefined;
  workflowVersionId: string;
  machineId?: string | null | undefined;
};

/** @internal */
export const WorkflowRunVersionRequestInputs$inboundSchema: z.ZodType<
  WorkflowRunVersionRequestInputs,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.string(),
  z.number().int(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type WorkflowRunVersionRequestInputs$Outbound =
  | string
  | number
  | number
  | boolean
  | Array<any>;

/** @internal */
export const WorkflowRunVersionRequestInputs$outboundSchema: z.ZodType<
  WorkflowRunVersionRequestInputs$Outbound,
  z.ZodTypeDef,
  WorkflowRunVersionRequestInputs
> = z.union([
  z.string(),
  z.number().int(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowRunVersionRequestInputs$ {
  /** @deprecated use `WorkflowRunVersionRequestInputs$inboundSchema` instead. */
  export const inboundSchema = WorkflowRunVersionRequestInputs$inboundSchema;
  /** @deprecated use `WorkflowRunVersionRequestInputs$outboundSchema` instead. */
  export const outboundSchema = WorkflowRunVersionRequestInputs$outboundSchema;
  /** @deprecated use `WorkflowRunVersionRequestInputs$Outbound` instead. */
  export type Outbound = WorkflowRunVersionRequestInputs$Outbound;
}

export function workflowRunVersionRequestInputsToJSON(
  workflowRunVersionRequestInputs: WorkflowRunVersionRequestInputs,
): string {
  return JSON.stringify(
    WorkflowRunVersionRequestInputs$outboundSchema.parse(
      workflowRunVersionRequestInputs,
    ),
  );
}

export function workflowRunVersionRequestInputsFromJSON(
  jsonString: string,
): SafeParseResult<WorkflowRunVersionRequestInputs, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WorkflowRunVersionRequestInputs$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WorkflowRunVersionRequestInputs' from JSON`,
  );
}

/** @internal */
export const WorkflowRunVersionRequestGpu$inboundSchema: z.ZodNativeEnum<
  typeof WorkflowRunVersionRequestGpu
> = z.nativeEnum(WorkflowRunVersionRequestGpu);

/** @internal */
export const WorkflowRunVersionRequestGpu$outboundSchema: z.ZodNativeEnum<
  typeof WorkflowRunVersionRequestGpu
> = WorkflowRunVersionRequestGpu$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowRunVersionRequestGpu$ {
  /** @deprecated use `WorkflowRunVersionRequestGpu$inboundSchema` instead. */
  export const inboundSchema = WorkflowRunVersionRequestGpu$inboundSchema;
  /** @deprecated use `WorkflowRunVersionRequestGpu$outboundSchema` instead. */
  export const outboundSchema = WorkflowRunVersionRequestGpu$outboundSchema;
}

/** @internal */
export const WorkflowRunVersionRequest$inboundSchema: z.ZodType<
  WorkflowRunVersionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  inputs: z.record(
    z.union([
      z.string(),
      z.number().int(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  webhook: z.string().optional(),
  webhook_intermediate_status: z.boolean().default(false),
  gpu: WorkflowRunVersionRequestGpu$inboundSchema.optional(),
  workflow_version_id: z.string(),
  machine_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "webhook_intermediate_status": "webhookIntermediateStatus",
    "workflow_version_id": "workflowVersionId",
    "machine_id": "machineId",
  });
});

/** @internal */
export type WorkflowRunVersionRequest$Outbound = {
  inputs?:
    | { [k: string]: string | number | number | boolean | Array<any> }
    | undefined;
  webhook?: string | undefined;
  webhook_intermediate_status: boolean;
  gpu?: string | undefined;
  workflow_version_id: string;
  machine_id?: string | null | undefined;
};

/** @internal */
export const WorkflowRunVersionRequest$outboundSchema: z.ZodType<
  WorkflowRunVersionRequest$Outbound,
  z.ZodTypeDef,
  WorkflowRunVersionRequest
> = z.object({
  inputs: z.record(
    z.union([
      z.string(),
      z.number().int(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  webhook: z.string().optional(),
  webhookIntermediateStatus: z.boolean().default(false),
  gpu: WorkflowRunVersionRequestGpu$outboundSchema.optional(),
  workflowVersionId: z.string(),
  machineId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    webhookIntermediateStatus: "webhook_intermediate_status",
    workflowVersionId: "workflow_version_id",
    machineId: "machine_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowRunVersionRequest$ {
  /** @deprecated use `WorkflowRunVersionRequest$inboundSchema` instead. */
  export const inboundSchema = WorkflowRunVersionRequest$inboundSchema;
  /** @deprecated use `WorkflowRunVersionRequest$outboundSchema` instead. */
  export const outboundSchema = WorkflowRunVersionRequest$outboundSchema;
  /** @deprecated use `WorkflowRunVersionRequest$Outbound` instead. */
  export type Outbound = WorkflowRunVersionRequest$Outbound;
}

export function workflowRunVersionRequestToJSON(
  workflowRunVersionRequest: WorkflowRunVersionRequest,
): string {
  return JSON.stringify(
    WorkflowRunVersionRequest$outboundSchema.parse(workflowRunVersionRequest),
  );
}

export function workflowRunVersionRequestFromJSON(
  jsonString: string,
): SafeParseResult<WorkflowRunVersionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WorkflowRunVersionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WorkflowRunVersionRequest' from JSON`,
  );
}
