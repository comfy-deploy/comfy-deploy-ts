/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ModelRunRequestExecutionMode = {
  Async: "async",
  Sync: "sync",
  SyncFirstResult: "sync_first_result",
  Stream: "stream",
} as const;
export type ModelRunRequestExecutionMode = ClosedEnum<
  typeof ModelRunRequestExecutionMode
>;

export type ModelRunRequestInputs =
  | string
  | number
  | number
  | boolean
  | Array<any>;

export type ModelRunRequest = {
  executionMode?: ModelRunRequestExecutionMode | null | undefined;
  inputs?:
    | { [k: string]: string | number | number | boolean | Array<any> }
    | null
    | undefined;
  webhook?: string | null | undefined;
  webhookIntermediateStatus?: boolean | null | undefined;
  origin?: string | null | undefined;
  batchNumber?: number | null | undefined;
  /**
   * Optional dictionary of batch input parameters. Keys are input names, values are lists of inputs.
   */
  batchInputParams?: { [k: string]: Array<any> } | null | undefined;
  isNativeRun?: boolean | null | undefined;
  gpuEventId?: string | null | undefined;
  modelId: string;
};

/** @internal */
export const ModelRunRequestExecutionMode$inboundSchema: z.ZodNativeEnum<
  typeof ModelRunRequestExecutionMode
> = z.nativeEnum(ModelRunRequestExecutionMode);

/** @internal */
export const ModelRunRequestExecutionMode$outboundSchema: z.ZodNativeEnum<
  typeof ModelRunRequestExecutionMode
> = ModelRunRequestExecutionMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModelRunRequestExecutionMode$ {
  /** @deprecated use `ModelRunRequestExecutionMode$inboundSchema` instead. */
  export const inboundSchema = ModelRunRequestExecutionMode$inboundSchema;
  /** @deprecated use `ModelRunRequestExecutionMode$outboundSchema` instead. */
  export const outboundSchema = ModelRunRequestExecutionMode$outboundSchema;
}

/** @internal */
export const ModelRunRequestInputs$inboundSchema: z.ZodType<
  ModelRunRequestInputs,
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
export type ModelRunRequestInputs$Outbound =
  | string
  | number
  | number
  | boolean
  | Array<any>;

/** @internal */
export const ModelRunRequestInputs$outboundSchema: z.ZodType<
  ModelRunRequestInputs$Outbound,
  z.ZodTypeDef,
  ModelRunRequestInputs
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
export namespace ModelRunRequestInputs$ {
  /** @deprecated use `ModelRunRequestInputs$inboundSchema` instead. */
  export const inboundSchema = ModelRunRequestInputs$inboundSchema;
  /** @deprecated use `ModelRunRequestInputs$outboundSchema` instead. */
  export const outboundSchema = ModelRunRequestInputs$outboundSchema;
  /** @deprecated use `ModelRunRequestInputs$Outbound` instead. */
  export type Outbound = ModelRunRequestInputs$Outbound;
}

export function modelRunRequestInputsToJSON(
  modelRunRequestInputs: ModelRunRequestInputs,
): string {
  return JSON.stringify(
    ModelRunRequestInputs$outboundSchema.parse(modelRunRequestInputs),
  );
}

export function modelRunRequestInputsFromJSON(
  jsonString: string,
): SafeParseResult<ModelRunRequestInputs, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ModelRunRequestInputs$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ModelRunRequestInputs' from JSON`,
  );
}

/** @internal */
export const ModelRunRequest$inboundSchema: z.ZodType<
  ModelRunRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  execution_mode: z.nullable(ModelRunRequestExecutionMode$inboundSchema)
    .optional(),
  inputs: z.nullable(
    z.record(
      z.union([
        z.string(),
        z.number().int(),
        z.number(),
        z.boolean(),
        z.array(z.any()),
      ]),
    ),
  ).optional(),
  webhook: z.nullable(z.string()).optional(),
  webhook_intermediate_status: z.nullable(z.boolean()).optional(),
  origin: z.nullable(z.string()).optional(),
  batch_number: z.nullable(z.number().int()).optional(),
  batch_input_params: z.nullable(z.record(z.array(z.any()))).optional(),
  is_native_run: z.nullable(z.boolean()).optional(),
  gpu_event_id: z.nullable(z.string()).optional(),
  model_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "execution_mode": "executionMode",
    "webhook_intermediate_status": "webhookIntermediateStatus",
    "batch_number": "batchNumber",
    "batch_input_params": "batchInputParams",
    "is_native_run": "isNativeRun",
    "gpu_event_id": "gpuEventId",
    "model_id": "modelId",
  });
});

/** @internal */
export type ModelRunRequest$Outbound = {
  execution_mode?: string | null | undefined;
  inputs?:
    | { [k: string]: string | number | number | boolean | Array<any> }
    | null
    | undefined;
  webhook?: string | null | undefined;
  webhook_intermediate_status?: boolean | null | undefined;
  origin?: string | null | undefined;
  batch_number?: number | null | undefined;
  batch_input_params?: { [k: string]: Array<any> } | null | undefined;
  is_native_run?: boolean | null | undefined;
  gpu_event_id?: string | null | undefined;
  model_id: string;
};

/** @internal */
export const ModelRunRequest$outboundSchema: z.ZodType<
  ModelRunRequest$Outbound,
  z.ZodTypeDef,
  ModelRunRequest
> = z.object({
  executionMode: z.nullable(ModelRunRequestExecutionMode$outboundSchema)
    .optional(),
  inputs: z.nullable(
    z.record(
      z.union([
        z.string(),
        z.number().int(),
        z.number(),
        z.boolean(),
        z.array(z.any()),
      ]),
    ),
  ).optional(),
  webhook: z.nullable(z.string()).optional(),
  webhookIntermediateStatus: z.nullable(z.boolean()).optional(),
  origin: z.nullable(z.string()).optional(),
  batchNumber: z.nullable(z.number().int()).optional(),
  batchInputParams: z.nullable(z.record(z.array(z.any()))).optional(),
  isNativeRun: z.nullable(z.boolean()).optional(),
  gpuEventId: z.nullable(z.string()).optional(),
  modelId: z.string(),
}).transform((v) => {
  return remap$(v, {
    executionMode: "execution_mode",
    webhookIntermediateStatus: "webhook_intermediate_status",
    batchNumber: "batch_number",
    batchInputParams: "batch_input_params",
    isNativeRun: "is_native_run",
    gpuEventId: "gpu_event_id",
    modelId: "model_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModelRunRequest$ {
  /** @deprecated use `ModelRunRequest$inboundSchema` instead. */
  export const inboundSchema = ModelRunRequest$inboundSchema;
  /** @deprecated use `ModelRunRequest$outboundSchema` instead. */
  export const outboundSchema = ModelRunRequest$outboundSchema;
  /** @deprecated use `ModelRunRequest$Outbound` instead. */
  export type Outbound = ModelRunRequest$Outbound;
}

export function modelRunRequestToJSON(
  modelRunRequest: ModelRunRequest,
): string {
  return JSON.stringify(ModelRunRequest$outboundSchema.parse(modelRunRequest));
}

export function modelRunRequestFromJSON(
  jsonString: string,
): SafeParseResult<ModelRunRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ModelRunRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ModelRunRequest' from JSON`,
  );
}
