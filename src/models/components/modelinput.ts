/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const Two = {
  ComfyUIDeployExternalText: "ComfyUIDeployExternalText",
  ComfyUIDeployExternalTextAny: "ComfyUIDeployExternalTextAny",
  ComfyUIDeployExternalTextSingleLine: "ComfyUIDeployExternalTextSingleLine",
  ComfyUIDeployExternalImage: "ComfyUIDeployExternalImage",
  ComfyUIDeployExternalImageAlpha: "ComfyUIDeployExternalImageAlpha",
  ComfyUIDeployExternalNumber: "ComfyUIDeployExternalNumber",
  ComfyUIDeployExternalNumberInt: "ComfyUIDeployExternalNumberInt",
  ComfyUIDeployExternalLora: "ComfyUIDeployExternalLora",
  ComfyUIDeployExternalCheckpoint: "ComfyUIDeployExternalCheckpoint",
  ComfyDeployWebscoketImageInput: "ComfyDeployWebscoketImageInput",
  ComfyUIDeployExternalImageBatch: "ComfyUIDeployExternalImageBatch",
  ComfyUIDeployExternalVideo: "ComfyUIDeployExternalVideo",
  ComfyUIDeployExternalBoolean: "ComfyUIDeployExternalBoolean",
  ComfyUIDeployExternalNumberSlider: "ComfyUIDeployExternalNumberSlider",
  ComfyUIDeployExternalNumberSliderInt: "ComfyUIDeployExternalNumberSliderInt",
  ComfyUIDeployExternalEnum: "ComfyUIDeployExternalEnum",
} as const;
export type Two = ClosedEnum<typeof Two>;

export type ClassType = string | Two;

export type ModelInput = {
  inputId: string;
  classType: string | Two;
  required: boolean;
  defaultValue?: any | null | undefined;
  minValue?: any | null | undefined;
  maxValue?: any | null | undefined;
  displayName?: string | null | undefined;
  description?: string | null | undefined;
  enumValues?: Array<string> | null | undefined;
};

/** @internal */
export const Two$inboundSchema: z.ZodNativeEnum<typeof Two> = z.nativeEnum(Two);

/** @internal */
export const Two$outboundSchema: z.ZodNativeEnum<typeof Two> =
  Two$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Two$ {
  /** @deprecated use `Two$inboundSchema` instead. */
  export const inboundSchema = Two$inboundSchema;
  /** @deprecated use `Two$outboundSchema` instead. */
  export const outboundSchema = Two$outboundSchema;
}

/** @internal */
export const ClassType$inboundSchema: z.ZodType<
  ClassType,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), Two$inboundSchema]);

/** @internal */
export type ClassType$Outbound = string | string;

/** @internal */
export const ClassType$outboundSchema: z.ZodType<
  ClassType$Outbound,
  z.ZodTypeDef,
  ClassType
> = z.union([z.string(), Two$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClassType$ {
  /** @deprecated use `ClassType$inboundSchema` instead. */
  export const inboundSchema = ClassType$inboundSchema;
  /** @deprecated use `ClassType$outboundSchema` instead. */
  export const outboundSchema = ClassType$outboundSchema;
  /** @deprecated use `ClassType$Outbound` instead. */
  export type Outbound = ClassType$Outbound;
}

export function classTypeToJSON(classType: ClassType): string {
  return JSON.stringify(ClassType$outboundSchema.parse(classType));
}

export function classTypeFromJSON(
  jsonString: string,
): SafeParseResult<ClassType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ClassType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ClassType' from JSON`,
  );
}

/** @internal */
export const ModelInput$inboundSchema: z.ZodType<
  ModelInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  input_id: z.string(),
  class_type: z.union([z.string(), Two$inboundSchema]),
  required: z.boolean(),
  default_value: z.nullable(z.any()).optional(),
  min_value: z.nullable(z.any()).optional(),
  max_value: z.nullable(z.any()).optional(),
  display_name: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  enum_values: z.nullable(z.array(z.string())).optional(),
}).transform((v) => {
  return remap$(v, {
    "input_id": "inputId",
    "class_type": "classType",
    "default_value": "defaultValue",
    "min_value": "minValue",
    "max_value": "maxValue",
    "display_name": "displayName",
    "enum_values": "enumValues",
  });
});

/** @internal */
export type ModelInput$Outbound = {
  input_id: string;
  class_type: string | string;
  required: boolean;
  default_value?: any | null | undefined;
  min_value?: any | null | undefined;
  max_value?: any | null | undefined;
  display_name?: string | null | undefined;
  description?: string | null | undefined;
  enum_values?: Array<string> | null | undefined;
};

/** @internal */
export const ModelInput$outboundSchema: z.ZodType<
  ModelInput$Outbound,
  z.ZodTypeDef,
  ModelInput
> = z.object({
  inputId: z.string(),
  classType: z.union([z.string(), Two$outboundSchema]),
  required: z.boolean(),
  defaultValue: z.nullable(z.any()).optional(),
  minValue: z.nullable(z.any()).optional(),
  maxValue: z.nullable(z.any()).optional(),
  displayName: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  enumValues: z.nullable(z.array(z.string())).optional(),
}).transform((v) => {
  return remap$(v, {
    inputId: "input_id",
    classType: "class_type",
    defaultValue: "default_value",
    minValue: "min_value",
    maxValue: "max_value",
    displayName: "display_name",
    enumValues: "enum_values",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModelInput$ {
  /** @deprecated use `ModelInput$inboundSchema` instead. */
  export const inboundSchema = ModelInput$inboundSchema;
  /** @deprecated use `ModelInput$outboundSchema` instead. */
  export const outboundSchema = ModelInput$outboundSchema;
  /** @deprecated use `ModelInput$Outbound` instead. */
  export type Outbound = ModelInput$Outbound;
}

export function modelInputToJSON(modelInput: ModelInput): string {
  return JSON.stringify(ModelInput$outboundSchema.parse(modelInput));
}

export function modelInputFromJSON(
  jsonString: string,
): SafeParseResult<ModelInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ModelInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ModelInput' from JSON`,
  );
}
