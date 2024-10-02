/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type EventUpdate = {
  event?: string | null | undefined;
  data?: any | null | undefined;
};

/** @internal */
export const EventUpdate$inboundSchema: z.ZodType<
  EventUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  event: z.nullable(z.string()).optional(),
  data: z.nullable(z.any()).optional(),
});

/** @internal */
export type EventUpdate$Outbound = {
  event?: string | null | undefined;
  data?: any | null | undefined;
};

/** @internal */
export const EventUpdate$outboundSchema: z.ZodType<
  EventUpdate$Outbound,
  z.ZodTypeDef,
  EventUpdate
> = z.object({
  event: z.nullable(z.string()).optional(),
  data: z.nullable(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventUpdate$ {
  /** @deprecated use `EventUpdate$inboundSchema` instead. */
  export const inboundSchema = EventUpdate$inboundSchema;
  /** @deprecated use `EventUpdate$outboundSchema` instead. */
  export const outboundSchema = EventUpdate$outboundSchema;
  /** @deprecated use `EventUpdate$Outbound` instead. */
  export type Outbound = EventUpdate$Outbound;
}
