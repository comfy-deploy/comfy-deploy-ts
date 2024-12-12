/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ApiRoutesTypesMachineGpu2,
  ApiRoutesTypesMachineGpu2$inboundSchema,
  ApiRoutesTypesMachineGpu2$outboundSchema,
} from "./apiroutestypesmachinegpu2.js";

export type CreateSessionBody = {
  machineId: string;
  /**
   * The GPU to use
   */
  gpu?: ApiRoutesTypesMachineGpu2 | null | undefined;
  /**
   * The timeout in minutes
   */
  timeout?: number | null | undefined;
  /**
   * Whether to create the session asynchronously
   */
  waitForServer?: boolean | undefined;
};

/** @internal */
export const CreateSessionBody$inboundSchema: z.ZodType<
  CreateSessionBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  machine_id: z.string(),
  gpu: z.nullable(ApiRoutesTypesMachineGpu2$inboundSchema).optional(),
  timeout: z.nullable(z.number().int()).optional(),
  wait_for_server: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    "machine_id": "machineId",
    "wait_for_server": "waitForServer",
  });
});

/** @internal */
export type CreateSessionBody$Outbound = {
  machine_id: string;
  gpu?: string | null | undefined;
  timeout?: number | null | undefined;
  wait_for_server: boolean;
};

/** @internal */
export const CreateSessionBody$outboundSchema: z.ZodType<
  CreateSessionBody$Outbound,
  z.ZodTypeDef,
  CreateSessionBody
> = z.object({
  machineId: z.string(),
  gpu: z.nullable(ApiRoutesTypesMachineGpu2$outboundSchema).optional(),
  timeout: z.nullable(z.number().int()).optional(),
  waitForServer: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    machineId: "machine_id",
    waitForServer: "wait_for_server",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSessionBody$ {
  /** @deprecated use `CreateSessionBody$inboundSchema` instead. */
  export const inboundSchema = CreateSessionBody$inboundSchema;
  /** @deprecated use `CreateSessionBody$outboundSchema` instead. */
  export const outboundSchema = CreateSessionBody$outboundSchema;
  /** @deprecated use `CreateSessionBody$Outbound` instead. */
  export type Outbound = CreateSessionBody$Outbound;
}

export function createSessionBodyToJSON(
  createSessionBody: CreateSessionBody,
): string {
  return JSON.stringify(
    CreateSessionBody$outboundSchema.parse(createSessionBody),
  );
}

export function createSessionBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateSessionBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSessionBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSessionBody' from JSON`,
  );
}