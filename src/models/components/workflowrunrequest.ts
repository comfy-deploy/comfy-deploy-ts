/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export const WorkflowRunRequestExecutionMode = {
  Async: "async",
  Sync: "sync",
  SyncFirstResult: "sync_first_result",
  Stream: "stream",
} as const;
export type WorkflowRunRequestExecutionMode = ClosedEnum<
  typeof WorkflowRunRequestExecutionMode
>;

export type WorkflowRunRequestInputs = {};

export type WorkflowApiJson = {};

export type Workflow = {};

export type WorkflowRunRequest = {
  executionMode?: WorkflowRunRequestExecutionMode | null | undefined;
  inputs?: WorkflowRunRequestInputs | null | undefined;
  webhook?: string | null | undefined;
  webhookIntermediateStatus?: boolean | null | undefined;
  origin?: string | null | undefined;
  batchNumber?: number | null | undefined;
  /**
   * Optional dictionary of batch input parameters. Keys are input names, values are lists of inputs.
   */
  batchInputParams?: { [k: string]: Array<any> } | null | undefined;
  isNativeRun?: boolean | null | undefined;
  workflowId: string;
  workflowApiJson: WorkflowApiJson;
  workflow?: Workflow | null | undefined;
  machineId?: string | null | undefined;
};

/** @internal */
export const WorkflowRunRequestExecutionMode$inboundSchema: z.ZodNativeEnum<
  typeof WorkflowRunRequestExecutionMode
> = z.nativeEnum(WorkflowRunRequestExecutionMode);

/** @internal */
export const WorkflowRunRequestExecutionMode$outboundSchema: z.ZodNativeEnum<
  typeof WorkflowRunRequestExecutionMode
> = WorkflowRunRequestExecutionMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowRunRequestExecutionMode$ {
  /** @deprecated use `WorkflowRunRequestExecutionMode$inboundSchema` instead. */
  export const inboundSchema = WorkflowRunRequestExecutionMode$inboundSchema;
  /** @deprecated use `WorkflowRunRequestExecutionMode$outboundSchema` instead. */
  export const outboundSchema = WorkflowRunRequestExecutionMode$outboundSchema;
}

/** @internal */
export const WorkflowRunRequestInputs$inboundSchema: z.ZodType<
  WorkflowRunRequestInputs,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type WorkflowRunRequestInputs$Outbound = {};

/** @internal */
export const WorkflowRunRequestInputs$outboundSchema: z.ZodType<
  WorkflowRunRequestInputs$Outbound,
  z.ZodTypeDef,
  WorkflowRunRequestInputs
> = z.object({});

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

/** @internal */
export const WorkflowRunRequest$inboundSchema: z.ZodType<
  WorkflowRunRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  execution_mode: z.nullable(WorkflowRunRequestExecutionMode$inboundSchema)
    .optional(),
  inputs: z.nullable(z.lazy(() => WorkflowRunRequestInputs$inboundSchema))
    .optional(),
  webhook: z.nullable(z.string()).optional(),
  webhook_intermediate_status: z.nullable(z.boolean()).optional(),
  origin: z.nullable(z.string()).optional(),
  batch_number: z.nullable(z.number().int()).optional(),
  batch_input_params: z.nullable(z.record(z.array(z.any()))).optional(),
  is_native_run: z.nullable(z.boolean()).optional(),
  workflow_id: z.string(),
  workflow_api_json: z.lazy(() => WorkflowApiJson$inboundSchema),
  workflow: z.nullable(z.lazy(() => Workflow$inboundSchema)).optional(),
  machine_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "execution_mode": "executionMode",
    "webhook_intermediate_status": "webhookIntermediateStatus",
    "batch_number": "batchNumber",
    "batch_input_params": "batchInputParams",
    "is_native_run": "isNativeRun",
    "workflow_id": "workflowId",
    "workflow_api_json": "workflowApiJson",
    "machine_id": "machineId",
  });
});

/** @internal */
export type WorkflowRunRequest$Outbound = {
  execution_mode?: string | null | undefined;
  inputs?: WorkflowRunRequestInputs$Outbound | null | undefined;
  webhook?: string | null | undefined;
  webhook_intermediate_status?: boolean | null | undefined;
  origin?: string | null | undefined;
  batch_number?: number | null | undefined;
  batch_input_params?: { [k: string]: Array<any> } | null | undefined;
  is_native_run?: boolean | null | undefined;
  workflow_id: string;
  workflow_api_json: WorkflowApiJson$Outbound;
  workflow?: Workflow$Outbound | null | undefined;
  machine_id?: string | null | undefined;
};

/** @internal */
export const WorkflowRunRequest$outboundSchema: z.ZodType<
  WorkflowRunRequest$Outbound,
  z.ZodTypeDef,
  WorkflowRunRequest
> = z.object({
  executionMode: z.nullable(WorkflowRunRequestExecutionMode$outboundSchema)
    .optional(),
  inputs: z.nullable(z.lazy(() => WorkflowRunRequestInputs$outboundSchema))
    .optional(),
  webhook: z.nullable(z.string()).optional(),
  webhookIntermediateStatus: z.nullable(z.boolean()).optional(),
  origin: z.nullable(z.string()).optional(),
  batchNumber: z.nullable(z.number().int()).optional(),
  batchInputParams: z.nullable(z.record(z.array(z.any()))).optional(),
  isNativeRun: z.nullable(z.boolean()).optional(),
  workflowId: z.string(),
  workflowApiJson: z.lazy(() => WorkflowApiJson$outboundSchema),
  workflow: z.nullable(z.lazy(() => Workflow$outboundSchema)).optional(),
  machineId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    executionMode: "execution_mode",
    webhookIntermediateStatus: "webhook_intermediate_status",
    batchNumber: "batch_number",
    batchInputParams: "batch_input_params",
    isNativeRun: "is_native_run",
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
