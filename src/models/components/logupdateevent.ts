/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  LogDataContent,
  LogDataContent$inboundSchema,
  LogDataContent$Outbound,
  LogDataContent$outboundSchema,
} from "./logdatacontent.js";

export const Event = {
  LogUpdate: "log_update",
} as const;
export type Event = ClosedEnum<typeof Event>;

export type LogUpdateEvent = {
  event?: "log_update" | undefined;
  data: LogDataContent;
};

/** @internal */
export const Event$inboundSchema: z.ZodNativeEnum<typeof Event> = z.nativeEnum(
  Event,
);

/** @internal */
export const Event$outboundSchema: z.ZodNativeEnum<typeof Event> =
  Event$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Event$ {
  /** @deprecated use `Event$inboundSchema` instead. */
  export const inboundSchema = Event$inboundSchema;
  /** @deprecated use `Event$outboundSchema` instead. */
  export const outboundSchema = Event$outboundSchema;
}

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
  event: z.literal("log_update").default("log_update"),
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
