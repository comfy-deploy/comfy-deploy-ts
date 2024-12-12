/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ModelOutputClassType = {
  ComfyDeployStdOutputImage: "ComfyDeployStdOutputImage",
  ComfyDeployStdOutputAny: "ComfyDeployStdOutputAny",
} as const;
export type ModelOutputClassType = ClosedEnum<typeof ModelOutputClassType>;

export type ModelOutput = {
  classType: ModelOutputClassType;
  outputId: string;
};

/** @internal */
export const ModelOutputClassType$inboundSchema: z.ZodNativeEnum<
  typeof ModelOutputClassType
> = z.nativeEnum(ModelOutputClassType);

/** @internal */
export const ModelOutputClassType$outboundSchema: z.ZodNativeEnum<
  typeof ModelOutputClassType
> = ModelOutputClassType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModelOutputClassType$ {
  /** @deprecated use `ModelOutputClassType$inboundSchema` instead. */
  export const inboundSchema = ModelOutputClassType$inboundSchema;
  /** @deprecated use `ModelOutputClassType$outboundSchema` instead. */
  export const outboundSchema = ModelOutputClassType$outboundSchema;
}

/** @internal */
export const ModelOutput$inboundSchema: z.ZodType<
  ModelOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  class_type: ModelOutputClassType$inboundSchema,
  output_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "class_type": "classType",
    "output_id": "outputId",
  });
});

/** @internal */
export type ModelOutput$Outbound = {
  class_type: string;
  output_id: string;
};

/** @internal */
export const ModelOutput$outboundSchema: z.ZodType<
  ModelOutput$Outbound,
  z.ZodTypeDef,
  ModelOutput
> = z.object({
  classType: ModelOutputClassType$outboundSchema,
  outputId: z.string(),
}).transform((v) => {
  return remap$(v, {
    classType: "class_type",
    outputId: "output_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModelOutput$ {
  /** @deprecated use `ModelOutput$inboundSchema` instead. */
  export const inboundSchema = ModelOutput$inboundSchema;
  /** @deprecated use `ModelOutput$outboundSchema` instead. */
  export const outboundSchema = ModelOutput$outboundSchema;
  /** @deprecated use `ModelOutput$Outbound` instead. */
  export type Outbound = ModelOutput$Outbound;
}

export function modelOutputToJSON(modelOutput: ModelOutput): string {
  return JSON.stringify(ModelOutput$outboundSchema.parse(modelOutput));
}

export function modelOutputFromJSON(
  jsonString: string,
): SafeParseResult<ModelOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ModelOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ModelOutput' from JSON`,
  );
}