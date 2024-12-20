/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ModelInput,
  ModelInput$inboundSchema,
  ModelInput$Outbound,
  ModelInput$outboundSchema,
} from "./modelinput.js";
import {
  ModelOutput,
  ModelOutput$inboundSchema,
  ModelOutput$Outbound,
  ModelOutput$outboundSchema,
} from "./modeloutput.js";

export type ModelWithMetadata = {
  id: string;
  name: string;
  isComfyui?: boolean | undefined;
  previewImage?: string | null | undefined;
  inputs: Array<ModelInput>;
  outputs: Array<ModelOutput>;
  tags?: Array<string> | undefined;
  falId?: string | null | undefined;
  costPerMegapixel?: number | null | undefined;
};

/** @internal */
export const ModelWithMetadata$inboundSchema: z.ZodType<
  ModelWithMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  is_comfyui: z.boolean().default(false),
  preview_image: z.nullable(z.string()).optional(),
  inputs: z.array(ModelInput$inboundSchema),
  outputs: z.array(ModelOutput$inboundSchema),
  tags: z.array(z.string()).optional(),
  fal_id: z.nullable(z.string()).optional(),
  cost_per_megapixel: z.nullable(z.number()).optional(),
}).transform((v) => {
  return remap$(v, {
    "is_comfyui": "isComfyui",
    "preview_image": "previewImage",
    "fal_id": "falId",
    "cost_per_megapixel": "costPerMegapixel",
  });
});

/** @internal */
export type ModelWithMetadata$Outbound = {
  id: string;
  name: string;
  is_comfyui: boolean;
  preview_image?: string | null | undefined;
  inputs: Array<ModelInput$Outbound>;
  outputs: Array<ModelOutput$Outbound>;
  tags?: Array<string> | undefined;
  fal_id?: string | null | undefined;
  cost_per_megapixel?: number | null | undefined;
};

/** @internal */
export const ModelWithMetadata$outboundSchema: z.ZodType<
  ModelWithMetadata$Outbound,
  z.ZodTypeDef,
  ModelWithMetadata
> = z.object({
  id: z.string(),
  name: z.string(),
  isComfyui: z.boolean().default(false),
  previewImage: z.nullable(z.string()).optional(),
  inputs: z.array(ModelInput$outboundSchema),
  outputs: z.array(ModelOutput$outboundSchema),
  tags: z.array(z.string()).optional(),
  falId: z.nullable(z.string()).optional(),
  costPerMegapixel: z.nullable(z.number()).optional(),
}).transform((v) => {
  return remap$(v, {
    isComfyui: "is_comfyui",
    previewImage: "preview_image",
    falId: "fal_id",
    costPerMegapixel: "cost_per_megapixel",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModelWithMetadata$ {
  /** @deprecated use `ModelWithMetadata$inboundSchema` instead. */
  export const inboundSchema = ModelWithMetadata$inboundSchema;
  /** @deprecated use `ModelWithMetadata$outboundSchema` instead. */
  export const outboundSchema = ModelWithMetadata$outboundSchema;
  /** @deprecated use `ModelWithMetadata$Outbound` instead. */
  export type Outbound = ModelWithMetadata$Outbound;
}

export function modelWithMetadataToJSON(
  modelWithMetadata: ModelWithMetadata,
): string {
  return JSON.stringify(
    ModelWithMetadata$outboundSchema.parse(modelWithMetadata),
  );
}

export function modelWithMetadataFromJSON(
  jsonString: string,
): SafeParseResult<ModelWithMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ModelWithMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ModelWithMetadata' from JSON`,
  );
}
