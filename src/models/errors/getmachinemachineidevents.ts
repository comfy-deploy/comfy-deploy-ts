/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Error getting gpu events
 */
export type GetMachineMachineIdEventsResponseBodyData = {
    error: string;
};

/**
 * Error getting gpu events
 */
export class GetMachineMachineIdEventsResponseBody extends Error {
    error: string;

    /** The original data that was passed to this error instance. */
    data$: GetMachineMachineIdEventsResponseBodyData;

    constructor(err: GetMachineMachineIdEventsResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.error = err.error;

        this.name = "GetMachineMachineIdEventsResponseBody";
    }
}

/** @internal */
export const GetMachineMachineIdEventsResponseBody$inboundSchema: z.ZodType<
    GetMachineMachineIdEventsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        error: z.string(),
    })
    .transform((v) => {
        return new GetMachineMachineIdEventsResponseBody(v);
    });

/** @internal */
export type GetMachineMachineIdEventsResponseBody$Outbound = {
    error: string;
};

/** @internal */
export const GetMachineMachineIdEventsResponseBody$outboundSchema: z.ZodType<
    GetMachineMachineIdEventsResponseBody$Outbound,
    z.ZodTypeDef,
    GetMachineMachineIdEventsResponseBody
> = z
    .instanceof(GetMachineMachineIdEventsResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            error: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMachineMachineIdEventsResponseBody$ {
    /** @deprecated use `GetMachineMachineIdEventsResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetMachineMachineIdEventsResponseBody$inboundSchema;
    /** @deprecated use `GetMachineMachineIdEventsResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetMachineMachineIdEventsResponseBody$outboundSchema;
    /** @deprecated use `GetMachineMachineIdEventsResponseBody$Outbound` instead. */
    export type Outbound = GetMachineMachineIdEventsResponseBody$Outbound;
}