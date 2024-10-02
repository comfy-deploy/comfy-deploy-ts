/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type MediaItem = {
  url: string;
  type: string;
  filename: string;
  isPublic: boolean | null;
  subfolder: string | null;
  uploadDuration: number | null;
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
  is_public: z.nullable(z.boolean()),
  subfolder: z.nullable(z.string()),
  upload_duration: z.nullable(z.number()),
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
  is_public: boolean | null;
  subfolder: string | null;
  upload_duration: number | null;
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
  isPublic: z.nullable(z.boolean()),
  subfolder: z.nullable(z.string()),
  uploadDuration: z.nullable(z.number()),
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
