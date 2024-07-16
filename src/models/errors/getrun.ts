/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Error getting output
 */
export type GetRunRunResponseBodyData = {
    error: string;
};

/**
 * Error getting output
 */
export class GetRunRunResponseBody extends Error {
    error: string;

    /** The original data that was passed to this error instance. */
    data$: GetRunRunResponseBodyData;

    constructor(err: GetRunRunResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.error = err.error;

        this.name = "GetRunRunResponseBody";
    }
}

/**
 * Workflow not found
 */
export type GetRunResponseBodyData = {
    code: string;
    message: string;
};

/**
 * Workflow not found
 */
export class GetRunResponseBody extends Error {
    code: string;

    /** The original data that was passed to this error instance. */
    data$: GetRunResponseBodyData;

    constructor(err: GetRunResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.code = err.code;

        this.name = "GetRunResponseBody";
    }
}

/** @internal */
export const GetRunRunResponseBody$inboundSchema: z.ZodType<
    GetRunRunResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        error: z.string(),
    })
    .transform((v) => {
        return new GetRunRunResponseBody(v);
    });

/** @internal */
export type GetRunRunResponseBody$Outbound = {
    error: string;
};

/** @internal */
export const GetRunRunResponseBody$outboundSchema: z.ZodType<
    GetRunRunResponseBody$Outbound,
    z.ZodTypeDef,
    GetRunRunResponseBody
> = z
    .instanceof(GetRunRunResponseBody)
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
export namespace GetRunRunResponseBody$ {
    /** @deprecated use `GetRunRunResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetRunRunResponseBody$inboundSchema;
    /** @deprecated use `GetRunRunResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetRunRunResponseBody$outboundSchema;
    /** @deprecated use `GetRunRunResponseBody$Outbound` instead. */
    export type Outbound = GetRunRunResponseBody$Outbound;
}

/** @internal */
export const GetRunResponseBody$inboundSchema: z.ZodType<
    GetRunResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        code: z.string(),
        message: z.string(),
    })
    .transform((v) => {
        return new GetRunResponseBody(v);
    });

/** @internal */
export type GetRunResponseBody$Outbound = {
    code: string;
    message: string;
};

/** @internal */
export const GetRunResponseBody$outboundSchema: z.ZodType<
    GetRunResponseBody$Outbound,
    z.ZodTypeDef,
    GetRunResponseBody
> = z
    .instanceof(GetRunResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            code: z.string(),
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRunResponseBody$ {
    /** @deprecated use `GetRunResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetRunResponseBody$inboundSchema;
    /** @deprecated use `GetRunResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetRunResponseBody$outboundSchema;
    /** @deprecated use `GetRunResponseBody$Outbound` instead. */
    export type Outbound = GetRunResponseBody$Outbound;
}
