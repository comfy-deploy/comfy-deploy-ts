/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Error in retrieving machines
 */
export type GetApiV1MachinesResponseBodyData = {
    error: string;
};

/**
 * Error in retrieving machines
 */
export class GetApiV1MachinesResponseBody extends Error {
    error: string;

    /** The original data that was passed to this error instance. */
    data$: GetApiV1MachinesResponseBodyData;

    constructor(err: GetApiV1MachinesResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.error = err.error;

        this.name = "GetApiV1MachinesResponseBody";
    }
}

/** @internal */
export const GetApiV1MachinesResponseBody$inboundSchema: z.ZodType<
    GetApiV1MachinesResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        error: z.string(),
    })
    .transform((v) => {
        return new GetApiV1MachinesResponseBody(v);
    });

/** @internal */
export type GetApiV1MachinesResponseBody$Outbound = {
    error: string;
};

/** @internal */
export const GetApiV1MachinesResponseBody$outboundSchema: z.ZodType<
    GetApiV1MachinesResponseBody$Outbound,
    z.ZodTypeDef,
    GetApiV1MachinesResponseBody
> = z
    .instanceof(GetApiV1MachinesResponseBody)
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
export namespace GetApiV1MachinesResponseBody$ {
    /** @deprecated use `GetApiV1MachinesResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetApiV1MachinesResponseBody$inboundSchema;
    /** @deprecated use `GetApiV1MachinesResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetApiV1MachinesResponseBody$outboundSchema;
    /** @deprecated use `GetApiV1MachinesResponseBody$Outbound` instead. */
    export type Outbound = GetApiV1MachinesResponseBody$Outbound;
}
