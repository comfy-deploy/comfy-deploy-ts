/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListAssetsAssetsGetRequest = {
  /**
   * Folder path to list items from
   */
  path?: string | undefined;
};

/** @internal */
export const ListAssetsAssetsGetRequest$inboundSchema: z.ZodType<
  ListAssetsAssetsGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  path: z.string().default("/"),
});

/** @internal */
export type ListAssetsAssetsGetRequest$Outbound = {
  path: string;
};

/** @internal */
export const ListAssetsAssetsGetRequest$outboundSchema: z.ZodType<
  ListAssetsAssetsGetRequest$Outbound,
  z.ZodTypeDef,
  ListAssetsAssetsGetRequest
> = z.object({
  path: z.string().default("/"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAssetsAssetsGetRequest$ {
  /** @deprecated use `ListAssetsAssetsGetRequest$inboundSchema` instead. */
  export const inboundSchema = ListAssetsAssetsGetRequest$inboundSchema;
  /** @deprecated use `ListAssetsAssetsGetRequest$outboundSchema` instead. */
  export const outboundSchema = ListAssetsAssetsGetRequest$outboundSchema;
  /** @deprecated use `ListAssetsAssetsGetRequest$Outbound` instead. */
  export type Outbound = ListAssetsAssetsGetRequest$Outbound;
}

export function listAssetsAssetsGetRequestToJSON(
  listAssetsAssetsGetRequest: ListAssetsAssetsGetRequest,
): string {
  return JSON.stringify(
    ListAssetsAssetsGetRequest$outboundSchema.parse(listAssetsAssetsGetRequest),
  );
}

export function listAssetsAssetsGetRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAssetsAssetsGetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAssetsAssetsGetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAssetsAssetsGetRequest' from JSON`,
  );
}
