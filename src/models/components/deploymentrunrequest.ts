/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Inputs = string | number | number | boolean | Array<any>;

/**
 * The GPU to override the machine's default GPU
 */
export const Gpu = {
  Cpu: "CPU",
  T4: "T4",
  L4: "L4",
  A10G: "A10G",
  L40S: "L40S",
  A100: "A100",
  A10080Gb: "A100-80GB",
  H100: "H100",
} as const;
/**
 * The GPU to override the machine's default GPU
 */
export type Gpu = ClosedEnum<typeof Gpu>;

export type DeploymentRunRequest = {
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
  gpu?: Gpu | undefined;
  /**
   * Array of flag strings
   */
  flags?: Array<string> | null | undefined;
  deploymentId: string;
};

/** @internal */
export const Inputs$inboundSchema: z.ZodType<Inputs, z.ZodTypeDef, unknown> = z
  .union([
    z.string(),
    z.number().int(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]);

/** @internal */
export type Inputs$Outbound = string | number | number | boolean | Array<any>;

/** @internal */
export const Inputs$outboundSchema: z.ZodType<
  Inputs$Outbound,
  z.ZodTypeDef,
  Inputs
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
export namespace Inputs$ {
  /** @deprecated use `Inputs$inboundSchema` instead. */
  export const inboundSchema = Inputs$inboundSchema;
  /** @deprecated use `Inputs$outboundSchema` instead. */
  export const outboundSchema = Inputs$outboundSchema;
  /** @deprecated use `Inputs$Outbound` instead. */
  export type Outbound = Inputs$Outbound;
}

export function inputsToJSON(inputs: Inputs): string {
  return JSON.stringify(Inputs$outboundSchema.parse(inputs));
}

export function inputsFromJSON(
  jsonString: string,
): SafeParseResult<Inputs, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Inputs$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Inputs' from JSON`,
  );
}

/** @internal */
export const Gpu$inboundSchema: z.ZodNativeEnum<typeof Gpu> = z.nativeEnum(Gpu);

/** @internal */
export const Gpu$outboundSchema: z.ZodNativeEnum<typeof Gpu> =
  Gpu$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Gpu$ {
  /** @deprecated use `Gpu$inboundSchema` instead. */
  export const inboundSchema = Gpu$inboundSchema;
  /** @deprecated use `Gpu$outboundSchema` instead. */
  export const outboundSchema = Gpu$outboundSchema;
}

/** @internal */
export const DeploymentRunRequest$inboundSchema: z.ZodType<
  DeploymentRunRequest,
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
  gpu: Gpu$inboundSchema.optional(),
  flags: z.nullable(z.array(z.string())).optional(),
  deployment_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "webhook_intermediate_status": "webhookIntermediateStatus",
    "deployment_id": "deploymentId",
  });
});

/** @internal */
export type DeploymentRunRequest$Outbound = {
  inputs?:
    | { [k: string]: string | number | number | boolean | Array<any> }
    | undefined;
  webhook?: string | undefined;
  webhook_intermediate_status: boolean;
  gpu?: string | undefined;
  flags?: Array<string> | null | undefined;
  deployment_id: string;
};

/** @internal */
export const DeploymentRunRequest$outboundSchema: z.ZodType<
  DeploymentRunRequest$Outbound,
  z.ZodTypeDef,
  DeploymentRunRequest
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
  gpu: Gpu$outboundSchema.optional(),
  flags: z.nullable(z.array(z.string())).optional(),
  deploymentId: z.string(),
}).transform((v) => {
  return remap$(v, {
    webhookIntermediateStatus: "webhook_intermediate_status",
    deploymentId: "deployment_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeploymentRunRequest$ {
  /** @deprecated use `DeploymentRunRequest$inboundSchema` instead. */
  export const inboundSchema = DeploymentRunRequest$inboundSchema;
  /** @deprecated use `DeploymentRunRequest$outboundSchema` instead. */
  export const outboundSchema = DeploymentRunRequest$outboundSchema;
  /** @deprecated use `DeploymentRunRequest$Outbound` instead. */
  export type Outbound = DeploymentRunRequest$Outbound;
}

export function deploymentRunRequestToJSON(
  deploymentRunRequest: DeploymentRunRequest,
): string {
  return JSON.stringify(
    DeploymentRunRequest$outboundSchema.parse(deploymentRunRequest),
  );
}

export function deploymentRunRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeploymentRunRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeploymentRunRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeploymentRunRequest' from JSON`,
  );
}
