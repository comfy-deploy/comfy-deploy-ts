/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  LogDataContent,
  LogDataContent$inboundSchema,
  LogDataContent$Outbound,
  LogDataContent$outboundSchema,
} from "./logdatacontent.js";

export type LogUpdateEvent = {
  event?: "log_update" | undefined;
  data: LogDataContent;
};

/** @internal */
export const LogUpdateEvent$inboundSchema: z.ZodType<
  LogUpdateEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  event: z.literal("log_update").default("log_update"),
  data: z.string().transform((v, ctx) => {
    try {
      return JSON.parse(v);
    } catch (err) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `malformed json: ${err}`,
      });
      return z.NEVER;
    }
  }).pipe(LogDataContent$inboundSchema),
});

/** @internal */
export type LogUpdateEvent$Outbound = {
  event: "log_update";
  data: LogDataContent$Outbound;
};

/** @internal */
export const LogUpdateEvent$outboundSchema: z.ZodType<
  LogUpdateEvent$Outbound,
  z.ZodTypeDef,
  LogUpdateEvent
> = z.object({
  event: z.literal("log_update").default("log_update" as const),
  data: LogDataContent$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LogUpdateEvent$ {
  /** @deprecated use `LogUpdateEvent$inboundSchema` instead. */
  export const inboundSchema = LogUpdateEvent$inboundSchema;
  /** @deprecated use `LogUpdateEvent$outboundSchema` instead. */
  export const outboundSchema = LogUpdateEvent$outboundSchema;
  /** @deprecated use `LogUpdateEvent$Outbound` instead. */
  export type Outbound = LogUpdateEvent$Outbound;
}

export function logUpdateEventToJSON(logUpdateEvent: LogUpdateEvent): string {
  return JSON.stringify(LogUpdateEvent$outboundSchema.parse(logUpdateEvent));
}

export function logUpdateEventFromJSON(
  jsonString: string,
): SafeParseResult<LogUpdateEvent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LogUpdateEvent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LogUpdateEvent' from JSON`,
  );
}
