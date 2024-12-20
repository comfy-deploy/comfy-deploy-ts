/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type WorkflowRunRequestInputs =
  | string
  | number
  | number
  | boolean
  | Array<any>;

/**
 * The GPU to override the machine's default GPU
 */
export const WorkflowRunRequestGpu = {
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
export type WorkflowRunRequestGpu = ClosedEnum<typeof WorkflowRunRequestGpu>;

export type WorkflowApiJson = {};

export type Workflow = {};

export type WorkflowRunRequest = {
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
  gpu?: WorkflowRunRequestGpu | undefined;
  workflowId: string;
  workflowApiJson: WorkflowApiJson;
  workflow?: Workflow | undefined;
  machineId?: string | undefined;
};

/** @internal */
export const WorkflowRunRequestInputs$inboundSchema: z.ZodType<
  WorkflowRunRequestInputs,
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
export type WorkflowRunRequestInputs$Outbound =
  | string
  | number
  | number
  | boolean
  | Array<any>;

/** @internal */
export const WorkflowRunRequestInputs$outboundSchema: z.ZodType<
  WorkflowRunRequestInputs$Outbound,
  z.ZodTypeDef,
  WorkflowRunRequestInputs
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
export namespace WorkflowRunRequestInputs$ {
  /** @deprecated use `WorkflowRunRequestInputs$inboundSchema` instead. */
  export const inboundSchema = WorkflowRunRequestInputs$inboundSchema;
  /** @deprecated use `WorkflowRunRequestInputs$outboundSchema` instead. */
  export const outboundSchema = WorkflowRunRequestInputs$outboundSchema;
  /** @deprecated use `WorkflowRunRequestInputs$Outbound` instead. */
  export type Outbound = WorkflowRunRequestInputs$Outbound;
}

export function workflowRunRequestInputsToJSON(
  workflowRunRequestInputs: WorkflowRunRequestInputs,
): string {
  return JSON.stringify(
    WorkflowRunRequestInputs$outboundSchema.parse(workflowRunRequestInputs),
  );
}

export function workflowRunRequestInputsFromJSON(
  jsonString: string,
): SafeParseResult<WorkflowRunRequestInputs, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WorkflowRunRequestInputs$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WorkflowRunRequestInputs' from JSON`,
  );
}

/** @internal */
export const WorkflowRunRequestGpu$inboundSchema: z.ZodNativeEnum<
  typeof WorkflowRunRequestGpu
> = z.nativeEnum(WorkflowRunRequestGpu);

/** @internal */
export const WorkflowRunRequestGpu$outboundSchema: z.ZodNativeEnum<
  typeof WorkflowRunRequestGpu
> = WorkflowRunRequestGpu$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowRunRequestGpu$ {
  /** @deprecated use `WorkflowRunRequestGpu$inboundSchema` instead. */
  export const inboundSchema = WorkflowRunRequestGpu$inboundSchema;
  /** @deprecated use `WorkflowRunRequestGpu$outboundSchema` instead. */
  export const outboundSchema = WorkflowRunRequestGpu$outboundSchema;
}

/** @internal */
export const WorkflowApiJson$inboundSchema: z.ZodType<
  WorkflowApiJson,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type WorkflowApiJson$Outbound = {};

/** @internal */
export const WorkflowApiJson$outboundSchema: z.ZodType<
  WorkflowApiJson$Outbound,
  z.ZodTypeDef,
  WorkflowApiJson
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowApiJson$ {
  /** @deprecated use `WorkflowApiJson$inboundSchema` instead. */
  export const inboundSchema = WorkflowApiJson$inboundSchema;
  /** @deprecated use `WorkflowApiJson$outboundSchema` instead. */
  export const outboundSchema = WorkflowApiJson$outboundSchema;
  /** @deprecated use `WorkflowApiJson$Outbound` instead. */
  export type Outbound = WorkflowApiJson$Outbound;
}

export function workflowApiJsonToJSON(
  workflowApiJson: WorkflowApiJson,
): string {
  return JSON.stringify(WorkflowApiJson$outboundSchema.parse(workflowApiJson));
}

export function workflowApiJsonFromJSON(
  jsonString: string,
): SafeParseResult<WorkflowApiJson, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WorkflowApiJson$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WorkflowApiJson' from JSON`,
  );
}

/** @internal */
export const Workflow$inboundSchema: z.ZodType<
  Workflow,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type Workflow$Outbound = {};

/** @internal */
export const Workflow$outboundSchema: z.ZodType<
  Workflow$Outbound,
  z.ZodTypeDef,
  Workflow
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Workflow$ {
  /** @deprecated use `Workflow$inboundSchema` instead. */
  export const inboundSchema = Workflow$inboundSchema;
  /** @deprecated use `Workflow$outboundSchema` instead. */
  export const outboundSchema = Workflow$outboundSchema;
  /** @deprecated use `Workflow$Outbound` instead. */
  export type Outbound = Workflow$Outbound;
}

export function workflowToJSON(workflow: Workflow): string {
  return JSON.stringify(Workflow$outboundSchema.parse(workflow));
}

export function workflowFromJSON(
  jsonString: string,
): SafeParseResult<Workflow, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Workflow$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Workflow' from JSON`,
  );
}

/** @internal */
export const WorkflowRunRequest$inboundSchema: z.ZodType<
  WorkflowRunRequest,
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
  gpu: WorkflowRunRequestGpu$inboundSchema.optional(),
  workflow_id: z.string(),
  workflow_api_json: z.lazy(() => WorkflowApiJson$inboundSchema),
  workflow: z.lazy(() => Workflow$inboundSchema).optional(),
  machine_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "webhook_intermediate_status": "webhookIntermediateStatus",
    "workflow_id": "workflowId",
    "workflow_api_json": "workflowApiJson",
    "machine_id": "machineId",
  });
});

/** @internal */
export type WorkflowRunRequest$Outbound = {
  inputs?:
    | { [k: string]: string | number | number | boolean | Array<any> }
    | undefined;
  webhook?: string | undefined;
  webhook_intermediate_status: boolean;
  gpu?: string | undefined;
  workflow_id: string;
  workflow_api_json: WorkflowApiJson$Outbound;
  workflow?: Workflow$Outbound | undefined;
  machine_id?: string | undefined;
};

/** @internal */
export const WorkflowRunRequest$outboundSchema: z.ZodType<
  WorkflowRunRequest$Outbound,
  z.ZodTypeDef,
  WorkflowRunRequest
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
  gpu: WorkflowRunRequestGpu$outboundSchema.optional(),
  workflowId: z.string(),
  workflowApiJson: z.lazy(() => WorkflowApiJson$outboundSchema),
  workflow: z.lazy(() => Workflow$outboundSchema).optional(),
  machineId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    webhookIntermediateStatus: "webhook_intermediate_status",
    workflowId: "workflow_id",
    workflowApiJson: "workflow_api_json",
    machineId: "machine_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowRunRequest$ {
  /** @deprecated use `WorkflowRunRequest$inboundSchema` instead. */
  export const inboundSchema = WorkflowRunRequest$inboundSchema;
  /** @deprecated use `WorkflowRunRequest$outboundSchema` instead. */
  export const outboundSchema = WorkflowRunRequest$outboundSchema;
  /** @deprecated use `WorkflowRunRequest$Outbound` instead. */
  export type Outbound = WorkflowRunRequest$Outbound;
}

export function workflowRunRequestToJSON(
  workflowRunRequest: WorkflowRunRequest,
): string {
  return JSON.stringify(
    WorkflowRunRequest$outboundSchema.parse(workflowRunRequest),
  );
}

export function workflowRunRequestFromJSON(
  jsonString: string,
): SafeParseResult<WorkflowRunRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WorkflowRunRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WorkflowRunRequest' from JSON`,
  );
}
