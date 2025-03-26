/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { blobLikeSchema } from "../../types/blobs.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type BodyUploadAssetFileAssetsUploadPostFile = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

export type BodyUploadAssetFileAssetsUploadPost = {
  file: BodyUploadAssetFileAssetsUploadPostFile | Blob;
};

/** @internal */
export const BodyUploadAssetFileAssetsUploadPostFile$inboundSchema: z.ZodType<
  BodyUploadAssetFileAssetsUploadPostFile,
  z.ZodTypeDef,
  unknown
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/** @internal */
export type BodyUploadAssetFileAssetsUploadPostFile$Outbound = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/** @internal */
export const BodyUploadAssetFileAssetsUploadPostFile$outboundSchema: z.ZodType<
  BodyUploadAssetFileAssetsUploadPostFile$Outbound,
  z.ZodTypeDef,
  BodyUploadAssetFileAssetsUploadPostFile
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BodyUploadAssetFileAssetsUploadPostFile$ {
  /** @deprecated use `BodyUploadAssetFileAssetsUploadPostFile$inboundSchema` instead. */
  export const inboundSchema =
    BodyUploadAssetFileAssetsUploadPostFile$inboundSchema;
  /** @deprecated use `BodyUploadAssetFileAssetsUploadPostFile$outboundSchema` instead. */
  export const outboundSchema =
    BodyUploadAssetFileAssetsUploadPostFile$outboundSchema;
  /** @deprecated use `BodyUploadAssetFileAssetsUploadPostFile$Outbound` instead. */
  export type Outbound = BodyUploadAssetFileAssetsUploadPostFile$Outbound;
}

export function bodyUploadAssetFileAssetsUploadPostFileToJSON(
  bodyUploadAssetFileAssetsUploadPostFile:
    BodyUploadAssetFileAssetsUploadPostFile,
): string {
  return JSON.stringify(
    BodyUploadAssetFileAssetsUploadPostFile$outboundSchema.parse(
      bodyUploadAssetFileAssetsUploadPostFile,
    ),
  );
}

export function bodyUploadAssetFileAssetsUploadPostFileFromJSON(
  jsonString: string,
): SafeParseResult<
  BodyUploadAssetFileAssetsUploadPostFile,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      BodyUploadAssetFileAssetsUploadPostFile$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'BodyUploadAssetFileAssetsUploadPostFile' from JSON`,
  );
}

/** @internal */
export const BodyUploadAssetFileAssetsUploadPost$inboundSchema: z.ZodType<
  BodyUploadAssetFileAssetsUploadPost,
  z.ZodTypeDef,
  unknown
> = z.object({
  file: z.lazy(() => BodyUploadAssetFileAssetsUploadPostFile$inboundSchema),
});

/** @internal */
export type BodyUploadAssetFileAssetsUploadPost$Outbound = {
  file: BodyUploadAssetFileAssetsUploadPostFile$Outbound | Blob;
};

/** @internal */
export const BodyUploadAssetFileAssetsUploadPost$outboundSchema: z.ZodType<
  BodyUploadAssetFileAssetsUploadPost$Outbound,
  z.ZodTypeDef,
  BodyUploadAssetFileAssetsUploadPost
> = z.object({
  file: z.lazy(() => BodyUploadAssetFileAssetsUploadPostFile$outboundSchema).or(
    blobLikeSchema,
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BodyUploadAssetFileAssetsUploadPost$ {
  /** @deprecated use `BodyUploadAssetFileAssetsUploadPost$inboundSchema` instead. */
  export const inboundSchema =
    BodyUploadAssetFileAssetsUploadPost$inboundSchema;
  /** @deprecated use `BodyUploadAssetFileAssetsUploadPost$outboundSchema` instead. */
  export const outboundSchema =
    BodyUploadAssetFileAssetsUploadPost$outboundSchema;
  /** @deprecated use `BodyUploadAssetFileAssetsUploadPost$Outbound` instead. */
  export type Outbound = BodyUploadAssetFileAssetsUploadPost$Outbound;
}

export function bodyUploadAssetFileAssetsUploadPostToJSON(
  bodyUploadAssetFileAssetsUploadPost: BodyUploadAssetFileAssetsUploadPost,
): string {
  return JSON.stringify(
    BodyUploadAssetFileAssetsUploadPost$outboundSchema.parse(
      bodyUploadAssetFileAssetsUploadPost,
    ),
  );
}

export function bodyUploadAssetFileAssetsUploadPostFromJSON(
  jsonString: string,
): SafeParseResult<BodyUploadAssetFileAssetsUploadPost, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      BodyUploadAssetFileAssetsUploadPost$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BodyUploadAssetFileAssetsUploadPost' from JSON`,
  );
}
