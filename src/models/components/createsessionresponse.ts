/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateSessionResponse = {
  sessionId: string;
  url?: string | null | undefined;
};

/** @internal */
export const CreateSessionResponse$inboundSchema: z.ZodType<
  CreateSessionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  session_id: z.string(),
  url: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "session_id": "sessionId",
  });
});

/** @internal */
export type CreateSessionResponse$Outbound = {
  session_id: string;
  url?: string | null | undefined;
};

/** @internal */
export const CreateSessionResponse$outboundSchema: z.ZodType<
  CreateSessionResponse$Outbound,
  z.ZodTypeDef,
  CreateSessionResponse
> = z.object({
  sessionId: z.string(),
  url: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    sessionId: "session_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSessionResponse$ {
  /** @deprecated use `CreateSessionResponse$inboundSchema` instead. */
  export const inboundSchema = CreateSessionResponse$inboundSchema;
  /** @deprecated use `CreateSessionResponse$outboundSchema` instead. */
  export const outboundSchema = CreateSessionResponse$outboundSchema;
  /** @deprecated use `CreateSessionResponse$Outbound` instead. */
  export type Outbound = CreateSessionResponse$Outbound;
}

export function createSessionResponseToJSON(
  createSessionResponse: CreateSessionResponse,
): string {
  return JSON.stringify(
    CreateSessionResponse$outboundSchema.parse(createSessionResponse),
  );
}

export function createSessionResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateSessionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSessionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSessionResponse' from JSON`,
  );
}
