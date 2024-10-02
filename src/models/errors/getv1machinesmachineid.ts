/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Error in retrieving the specific machine
 */
export type GetV1MachinesMachineIdResponseBodyData = {
  error: string;
};

/**
 * Error in retrieving the specific machine
 */
export class GetV1MachinesMachineIdResponseBody extends Error {
  error: string;

  /** The original data that was passed to this error instance. */
  data$: GetV1MachinesMachineIdResponseBodyData;

  constructor(err: GetV1MachinesMachineIdResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "GetV1MachinesMachineIdResponseBody";
  }
}

/** @internal */
export const GetV1MachinesMachineIdResponseBody$inboundSchema: z.ZodType<
  GetV1MachinesMachineIdResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.string(),
})
  .transform((v) => {
    return new GetV1MachinesMachineIdResponseBody(v);
  });

/** @internal */
export type GetV1MachinesMachineIdResponseBody$Outbound = {
  error: string;
};

/** @internal */
export const GetV1MachinesMachineIdResponseBody$outboundSchema: z.ZodType<
  GetV1MachinesMachineIdResponseBody$Outbound,
  z.ZodTypeDef,
  GetV1MachinesMachineIdResponseBody
> = z.instanceof(GetV1MachinesMachineIdResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1MachinesMachineIdResponseBody$ {
  /** @deprecated use `GetV1MachinesMachineIdResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetV1MachinesMachineIdResponseBody$inboundSchema;
  /** @deprecated use `GetV1MachinesMachineIdResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetV1MachinesMachineIdResponseBody$outboundSchema;
  /** @deprecated use `GetV1MachinesMachineIdResponseBody$Outbound` instead. */
  export type Outbound = GetV1MachinesMachineIdResponseBody$Outbound;
}
