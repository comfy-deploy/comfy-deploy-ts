/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Error when uploading the workflow
 */
export type GetApiDeploymentIdInputsResponseBodyData = {
    error: string;
};

/**
 * Error when uploading the workflow
 */
export class GetApiDeploymentIdInputsResponseBody extends Error {
    error: string;

    /** The original data that was passed to this error instance. */
    data$: GetApiDeploymentIdInputsResponseBodyData;

    constructor(err: GetApiDeploymentIdInputsResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.error = err.error;

        this.name = "GetApiDeploymentIdInputsResponseBody";
    }
}

/** @internal */
export const GetApiDeploymentIdInputsResponseBody$inboundSchema: z.ZodType<
    GetApiDeploymentIdInputsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        error: z.string(),
    })
    .transform((v) => {
        return new GetApiDeploymentIdInputsResponseBody(v);
    });

/** @internal */
export type GetApiDeploymentIdInputsResponseBody$Outbound = {
    error: string;
};

/** @internal */
export const GetApiDeploymentIdInputsResponseBody$outboundSchema: z.ZodType<
    GetApiDeploymentIdInputsResponseBody$Outbound,
    z.ZodTypeDef,
    GetApiDeploymentIdInputsResponseBody
> = z
    .instanceof(GetApiDeploymentIdInputsResponseBody)
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
export namespace GetApiDeploymentIdInputsResponseBody$ {
    /** @deprecated use `GetApiDeploymentIdInputsResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetApiDeploymentIdInputsResponseBody$inboundSchema;
    /** @deprecated use `GetApiDeploymentIdInputsResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetApiDeploymentIdInputsResponseBody$outboundSchema;
    /** @deprecated use `GetApiDeploymentIdInputsResponseBody$Outbound` instead. */
    export type Outbound = GetApiDeploymentIdInputsResponseBody$Outbound;
}
