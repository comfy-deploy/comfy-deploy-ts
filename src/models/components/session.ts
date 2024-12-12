/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Session = {
  sessionId: string;
  gpuEventId: string;
  url: string;
};

/** @internal */
export const Session$inboundSchema: z.ZodType<Session, z.ZodTypeDef, unknown> =
  z.object({
    session_id: z.string(),
    gpu_event_id: z.string(),
    url: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "session_id": "sessionId",
      "gpu_event_id": "gpuEventId",
    });
  });

/** @internal */
export type Session$Outbound = {
  session_id: string;
  gpu_event_id: string;
  url: string;
};

/** @internal */
export const Session$outboundSchema: z.ZodType<
  Session$Outbound,
  z.ZodTypeDef,
  Session
> = z.object({
  sessionId: z.string(),
  gpuEventId: z.string(),
  url: z.string(),
}).transform((v) => {
  return remap$(v, {
    sessionId: "session_id",
    gpuEventId: "gpu_event_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Session$ {
  /** @deprecated use `Session$inboundSchema` instead. */
  export const inboundSchema = Session$inboundSchema;
  /** @deprecated use `Session$outboundSchema` instead. */
  export const outboundSchema = Session$outboundSchema;
  /** @deprecated use `Session$Outbound` instead. */
  export type Outbound = Session$Outbound;
}

export function sessionToJSON(session: Session): string {
  return JSON.stringify(Session$outboundSchema.parse(session));
}

export function sessionFromJSON(
  jsonString: string,
): SafeParseResult<Session, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Session$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Session' from JSON`,
  );
}