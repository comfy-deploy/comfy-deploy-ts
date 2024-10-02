/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ApiRoutesTypesWorkflowRunOutputModel1,
  ApiRoutesTypesWorkflowRunOutputModel1$inboundSchema,
  ApiRoutesTypesWorkflowRunOutputModel1$Outbound,
  ApiRoutesTypesWorkflowRunOutputModel1$outboundSchema,
} from "./apiroutestypesworkflowrunoutputmodel1.js";

export type WorkflowInputs = {};

export type WorkflowApi = {};

export type WorkflowRunModel = {
  id: string;
  workflowVersionId: string | null;
  workflowInputs: WorkflowInputs | null;
  workflowId: string;
  workflowApi: WorkflowApi | null;
  machineId: string | null;
  origin: string;
  status: string;
  endedAt?: Date | null | undefined;
  createdAt: Date;
  updatedAt: Date;
  queuedAt?: Date | null | undefined;
  startedAt?: Date | null | undefined;
  gpuEventId: string | null;
  gpu: string | null;
  machineVersion: string | null;
  machineType: string | null;
  modalFunctionCallId: string | null;
  userId: string | null;
  orgId: string | null;
  liveStatus: string | null;
  progress?: number | undefined;
  isRealtime?: boolean | undefined;
  webhook: string | null;
  webhookStatus: string | null;
  webhookIntermediateStatus?: boolean | undefined;
  outputs?: Array<ApiRoutesTypesWorkflowRunOutputModel1> | undefined;
  number: number;
  duration: number | null;
  coldStartDuration: number | null;
  coldStartDurationTotal: number | null;
  runDuration: number | null;
};

/** @internal */
export const WorkflowInputs$inboundSchema: z.ZodType<
  WorkflowInputs,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type WorkflowInputs$Outbound = {};

/** @internal */
export const WorkflowInputs$outboundSchema: z.ZodType<
  WorkflowInputs$Outbound,
  z.ZodTypeDef,
  WorkflowInputs
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowInputs$ {
  /** @deprecated use `WorkflowInputs$inboundSchema` instead. */
  export const inboundSchema = WorkflowInputs$inboundSchema;
  /** @deprecated use `WorkflowInputs$outboundSchema` instead. */
  export const outboundSchema = WorkflowInputs$outboundSchema;
  /** @deprecated use `WorkflowInputs$Outbound` instead. */
  export type Outbound = WorkflowInputs$Outbound;
}

/** @internal */
export const WorkflowApi$inboundSchema: z.ZodType<
  WorkflowApi,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type WorkflowApi$Outbound = {};

/** @internal */
export const WorkflowApi$outboundSchema: z.ZodType<
  WorkflowApi$Outbound,
  z.ZodTypeDef,
  WorkflowApi
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowApi$ {
  /** @deprecated use `WorkflowApi$inboundSchema` instead. */
  export const inboundSchema = WorkflowApi$inboundSchema;
  /** @deprecated use `WorkflowApi$outboundSchema` instead. */
  export const outboundSchema = WorkflowApi$outboundSchema;
  /** @deprecated use `WorkflowApi$Outbound` instead. */
  export type Outbound = WorkflowApi$Outbound;
}

/** @internal */
export const WorkflowRunModel$inboundSchema: z.ZodType<
  WorkflowRunModel,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  workflow_version_id: z.nullable(z.string()),
  workflow_inputs: z.nullable(z.lazy(() => WorkflowInputs$inboundSchema)),
  workflow_id: z.string(),
  workflow_api: z.nullable(z.lazy(() => WorkflowApi$inboundSchema)),
  machine_id: z.nullable(z.string()),
  origin: z.string(),
  status: z.string(),
  ended_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  queued_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  started_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  gpu_event_id: z.nullable(z.string()),
  gpu: z.nullable(z.string()),
  machine_version: z.nullable(z.string()),
  machine_type: z.nullable(z.string()),
  modal_function_call_id: z.nullable(z.string()),
  user_id: z.nullable(z.string()),
  org_id: z.nullable(z.string()),
  live_status: z.nullable(z.string()),
  progress: z.number().default(0),
  is_realtime: z.boolean().default(false),
  webhook: z.nullable(z.string()),
  webhook_status: z.nullable(z.string()),
  webhook_intermediate_status: z.boolean().default(false),
  outputs: z.array(ApiRoutesTypesWorkflowRunOutputModel1$inboundSchema)
    .optional(),
  number: z.number().int(),
  duration: z.nullable(z.number()),
  cold_start_duration: z.nullable(z.number()),
  cold_start_duration_total: z.nullable(z.number()),
  run_duration: z.nullable(z.number()),
}).transform((v) => {
  return remap$(v, {
    "workflow_version_id": "workflowVersionId",
    "workflow_inputs": "workflowInputs",
    "workflow_id": "workflowId",
    "workflow_api": "workflowApi",
    "machine_id": "machineId",
    "ended_at": "endedAt",
    "created_at": "createdAt",
    "updated_at": "updatedAt",
    "queued_at": "queuedAt",
    "started_at": "startedAt",
    "gpu_event_id": "gpuEventId",
    "machine_version": "machineVersion",
    "machine_type": "machineType",
    "modal_function_call_id": "modalFunctionCallId",
    "user_id": "userId",
    "org_id": "orgId",
    "live_status": "liveStatus",
    "is_realtime": "isRealtime",
    "webhook_status": "webhookStatus",
    "webhook_intermediate_status": "webhookIntermediateStatus",
    "cold_start_duration": "coldStartDuration",
    "cold_start_duration_total": "coldStartDurationTotal",
    "run_duration": "runDuration",
  });
});

/** @internal */
export type WorkflowRunModel$Outbound = {
  id: string;
  workflow_version_id: string | null;
  workflow_inputs: WorkflowInputs$Outbound | null;
  workflow_id: string;
  workflow_api: WorkflowApi$Outbound | null;
  machine_id: string | null;
  origin: string;
  status: string;
  ended_at?: string | null | undefined;
  created_at: string;
  updated_at: string;
  queued_at?: string | null | undefined;
  started_at?: string | null | undefined;
  gpu_event_id: string | null;
  gpu: string | null;
  machine_version: string | null;
  machine_type: string | null;
  modal_function_call_id: string | null;
  user_id: string | null;
  org_id: string | null;
  live_status: string | null;
  progress: number;
  is_realtime: boolean;
  webhook: string | null;
  webhook_status: string | null;
  webhook_intermediate_status: boolean;
  outputs?: Array<ApiRoutesTypesWorkflowRunOutputModel1$Outbound> | undefined;
  number: number;
  duration: number | null;
  cold_start_duration: number | null;
  cold_start_duration_total: number | null;
  run_duration: number | null;
};

/** @internal */
export const WorkflowRunModel$outboundSchema: z.ZodType<
  WorkflowRunModel$Outbound,
  z.ZodTypeDef,
  WorkflowRunModel
> = z.object({
  id: z.string(),
  workflowVersionId: z.nullable(z.string()),
  workflowInputs: z.nullable(z.lazy(() => WorkflowInputs$outboundSchema)),
  workflowId: z.string(),
  workflowApi: z.nullable(z.lazy(() => WorkflowApi$outboundSchema)),
  machineId: z.nullable(z.string()),
  origin: z.string(),
  status: z.string(),
  endedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  createdAt: z.date().transform(v => v.toISOString()),
  updatedAt: z.date().transform(v => v.toISOString()),
  queuedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  startedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  gpuEventId: z.nullable(z.string()),
  gpu: z.nullable(z.string()),
  machineVersion: z.nullable(z.string()),
  machineType: z.nullable(z.string()),
  modalFunctionCallId: z.nullable(z.string()),
  userId: z.nullable(z.string()),
  orgId: z.nullable(z.string()),
  liveStatus: z.nullable(z.string()),
  progress: z.number().default(0),
  isRealtime: z.boolean().default(false),
  webhook: z.nullable(z.string()),
  webhookStatus: z.nullable(z.string()),
  webhookIntermediateStatus: z.boolean().default(false),
  outputs: z.array(ApiRoutesTypesWorkflowRunOutputModel1$outboundSchema)
    .optional(),
  number: z.number().int(),
  duration: z.nullable(z.number()),
  coldStartDuration: z.nullable(z.number()),
  coldStartDurationTotal: z.nullable(z.number()),
  runDuration: z.nullable(z.number()),
}).transform((v) => {
  return remap$(v, {
    workflowVersionId: "workflow_version_id",
    workflowInputs: "workflow_inputs",
    workflowId: "workflow_id",
    workflowApi: "workflow_api",
    machineId: "machine_id",
    endedAt: "ended_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    queuedAt: "queued_at",
    startedAt: "started_at",
    gpuEventId: "gpu_event_id",
    machineVersion: "machine_version",
    machineType: "machine_type",
    modalFunctionCallId: "modal_function_call_id",
    userId: "user_id",
    orgId: "org_id",
    liveStatus: "live_status",
    isRealtime: "is_realtime",
    webhookStatus: "webhook_status",
    webhookIntermediateStatus: "webhook_intermediate_status",
    coldStartDuration: "cold_start_duration",
    coldStartDurationTotal: "cold_start_duration_total",
    runDuration: "run_duration",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowRunModel$ {
  /** @deprecated use `WorkflowRunModel$inboundSchema` instead. */
  export const inboundSchema = WorkflowRunModel$inboundSchema;
  /** @deprecated use `WorkflowRunModel$outboundSchema` instead. */
  export const outboundSchema = WorkflowRunModel$outboundSchema;
  /** @deprecated use `WorkflowRunModel$Outbound` instead. */
  export type Outbound = WorkflowRunModel$Outbound;
}
