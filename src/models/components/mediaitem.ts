/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type MediaItem = {
  url: string;
  type: string;
  filename: string;
  isPublic?: boolean | null | undefined;
  subfolder?: string | null | undefined;
  uploadDuration?: number | null | undefined;
};

/** @internal */
export const MediaItem$inboundSchema: z.ZodType<
  MediaItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
  type: z.string(),
  filename: z.string(),
  is_public: z.nullable(z.boolean()).optional(),
  subfolder: z.nullable(z.string()).optional(),
  upload_duration: z.nullable(z.number()).optional(),
}).transform((v) => {
  return remap$(v, {
    "is_public": "isPublic",
    "upload_duration": "uploadDuration",
  });
});

/** @internal */
export type MediaItem$Outbound = {
  url: string;
  type: string;
  filename: string;
  is_public?: boolean | null | undefined;
  subfolder?: string | null | undefined;
  upload_duration?: number | null | undefined;
};

/** @internal */
export const MediaItem$outboundSchema: z.ZodType<
  MediaItem$Outbound,
  z.ZodTypeDef,
  MediaItem
> = z.object({
  url: z.string(),
  type: z.string(),
  filename: z.string(),
  isPublic: z.nullable(z.boolean()).optional(),
  subfolder: z.nullable(z.string()).optional(),
  uploadDuration: z.nullable(z.number()).optional(),
}).transform((v) => {
  return remap$(v, {
    isPublic: "is_public",
    uploadDuration: "upload_duration",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaItem$ {
  /** @deprecated use `MediaItem$inboundSchema` instead. */
  export const inboundSchema = MediaItem$inboundSchema;
  /** @deprecated use `MediaItem$outboundSchema` instead. */
  export const outboundSchema = MediaItem$outboundSchema;
  /** @deprecated use `MediaItem$Outbound` instead. */
  export type Outbound = MediaItem$Outbound;
}

export function mediaItemToJSON(mediaItem: MediaItem): string {
  return JSON.stringify(MediaItem$outboundSchema.parse(mediaItem));
}

export function mediaItemFromJSON(
  jsonString: string,
): SafeParseResult<MediaItem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MediaItem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaItem' from JSON`,
  );
}
