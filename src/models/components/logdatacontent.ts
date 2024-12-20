/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LogDataContent = {
  logs: string;
  /**
   * Timestamp in UTC
   */
  timestamp: Date;
};

/** @internal */
export const LogDataContent$inboundSchema: z.ZodType<
  LogDataContent,
  z.ZodTypeDef,
  unknown
> = z.object({
  logs: z.string(),
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
});

/** @internal */
export type LogDataContent$Outbound = {
  logs: string;
  timestamp: string;
};

/** @internal */
export const LogDataContent$outboundSchema: z.ZodType<
  LogDataContent$Outbound,
  z.ZodTypeDef,
  LogDataContent
> = z.object({
  logs: z.string(),
  timestamp: z.date().transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LogDataContent$ {
  /** @deprecated use `LogDataContent$inboundSchema` instead. */
  export const inboundSchema = LogDataContent$inboundSchema;
  /** @deprecated use `LogDataContent$outboundSchema` instead. */
  export const outboundSchema = LogDataContent$outboundSchema;
  /** @deprecated use `LogDataContent$Outbound` instead. */
  export type Outbound = LogDataContent$Outbound;
}

export function logDataContentToJSON(logDataContent: LogDataContent): string {
  return JSON.stringify(LogDataContent$outboundSchema.parse(logDataContent));
}

export function logDataContentFromJSON(
  jsonString: string,
): SafeParseResult<LogDataContent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LogDataContent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LogDataContent' from JSON`,
  );
}
