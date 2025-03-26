/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  GPUType,
  GPUType$inboundSchema,
  GPUType$outboundSchema,
} from "./gputype.js";

export type DeploymentUpdate = {
  workflowVersionId?: string | null | undefined;
  machineId?: string | null | undefined;
  machineVersionId?: string | null | undefined;
  concurrencyLimit?: number | null | undefined;
  gpu?: GPUType | null | undefined;
  runTimeout?: number | null | undefined;
  idleTimeout?: number | null | undefined;
  keepWarm?: number | null | undefined;
};

/** @internal */
export const DeploymentUpdate$inboundSchema: z.ZodType<
  DeploymentUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  workflow_version_id: z.nullable(z.string()).optional(),
  machine_id: z.nullable(z.string()).optional(),
  machine_version_id: z.nullable(z.string()).optional(),
  concurrency_limit: z.nullable(z.number().int()).optional(),
  gpu: z.nullable(GPUType$inboundSchema).optional(),
  run_timeout: z.nullable(z.number().int()).optional(),
  idle_timeout: z.nullable(z.number().int()).optional(),
  keep_warm: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "workflow_version_id": "workflowVersionId",
    "machine_id": "machineId",
    "machine_version_id": "machineVersionId",
    "concurrency_limit": "concurrencyLimit",
    "run_timeout": "runTimeout",
    "idle_timeout": "idleTimeout",
    "keep_warm": "keepWarm",
  });
});

/** @internal */
export type DeploymentUpdate$Outbound = {
  workflow_version_id?: string | null | undefined;
  machine_id?: string | null | undefined;
  machine_version_id?: string | null | undefined;
  concurrency_limit?: number | null | undefined;
  gpu?: string | null | undefined;
  run_timeout?: number | null | undefined;
  idle_timeout?: number | null | undefined;
  keep_warm?: number | null | undefined;
};

/** @internal */
export const DeploymentUpdate$outboundSchema: z.ZodType<
  DeploymentUpdate$Outbound,
  z.ZodTypeDef,
  DeploymentUpdate
> = z.object({
  workflowVersionId: z.nullable(z.string()).optional(),
  machineId: z.nullable(z.string()).optional(),
  machineVersionId: z.nullable(z.string()).optional(),
  concurrencyLimit: z.nullable(z.number().int()).optional(),
  gpu: z.nullable(GPUType$outboundSchema).optional(),
  runTimeout: z.nullable(z.number().int()).optional(),
  idleTimeout: z.nullable(z.number().int()).optional(),
  keepWarm: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    workflowVersionId: "workflow_version_id",
    machineId: "machine_id",
    machineVersionId: "machine_version_id",
    concurrencyLimit: "concurrency_limit",
    runTimeout: "run_timeout",
    idleTimeout: "idle_timeout",
    keepWarm: "keep_warm",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeploymentUpdate$ {
  /** @deprecated use `DeploymentUpdate$inboundSchema` instead. */
  export const inboundSchema = DeploymentUpdate$inboundSchema;
  /** @deprecated use `DeploymentUpdate$outboundSchema` instead. */
  export const outboundSchema = DeploymentUpdate$outboundSchema;
  /** @deprecated use `DeploymentUpdate$Outbound` instead. */
  export type Outbound = DeploymentUpdate$Outbound;
}

export function deploymentUpdateToJSON(
  deploymentUpdate: DeploymentUpdate,
): string {
  return JSON.stringify(
    DeploymentUpdate$outboundSchema.parse(deploymentUpdate),
  );
}

export function deploymentUpdateFromJSON(
  jsonString: string,
): SafeParseResult<DeploymentUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeploymentUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeploymentUpdate' from JSON`,
  );
}
