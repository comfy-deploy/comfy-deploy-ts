/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * error
 */
export type GetDeploymentResponseBodyData = {
    error: string;
};

/**
 * error
 */
export class GetDeploymentResponseBody extends Error {
    error: string;

    /** The original data that was passed to this error instance. */
    data$: GetDeploymentResponseBodyData;

    constructor(err: GetDeploymentResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.error = err.error;

        this.name = "GetDeploymentResponseBody";
    }
}

/** @internal */
export const GetDeploymentResponseBody$inboundSchema: z.ZodType<
    GetDeploymentResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        error: z.string(),
    })
    .transform((v) => {
        return new GetDeploymentResponseBody(v);
    });

/** @internal */
export type GetDeploymentResponseBody$Outbound = {
    error: string;
};

/** @internal */
export const GetDeploymentResponseBody$outboundSchema: z.ZodType<
    GetDeploymentResponseBody$Outbound,
    z.ZodTypeDef,
    GetDeploymentResponseBody
> = z
    .instanceof(GetDeploymentResponseBody)
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
export namespace GetDeploymentResponseBody$ {
    /** @deprecated use `GetDeploymentResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetDeploymentResponseBody$inboundSchema;
    /** @deprecated use `GetDeploymentResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetDeploymentResponseBody$outboundSchema;
    /** @deprecated use `GetDeploymentResponseBody$Outbound` instead. */
    export type Outbound = GetDeploymentResponseBody$Outbound;
}
