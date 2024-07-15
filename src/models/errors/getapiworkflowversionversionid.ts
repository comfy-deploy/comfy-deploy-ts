/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Error when uploading the workflow
 */
export type GetApiWorkflowVersionVersionIdResponseBodyData = {
    error: string;
};

/**
 * Error when uploading the workflow
 */
export class GetApiWorkflowVersionVersionIdResponseBody extends Error {
    error: string;

    /** The original data that was passed to this error instance. */
    data$: GetApiWorkflowVersionVersionIdResponseBodyData;

    constructor(err: GetApiWorkflowVersionVersionIdResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.error = err.error;

        this.name = "GetApiWorkflowVersionVersionIdResponseBody";
    }
}

/** @internal */
export const GetApiWorkflowVersionVersionIdResponseBody$inboundSchema: z.ZodType<
    GetApiWorkflowVersionVersionIdResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        error: z.string(),
    })
    .transform((v) => {
        return new GetApiWorkflowVersionVersionIdResponseBody(v);
    });

/** @internal */
export type GetApiWorkflowVersionVersionIdResponseBody$Outbound = {
    error: string;
};

/** @internal */
export const GetApiWorkflowVersionVersionIdResponseBody$outboundSchema: z.ZodType<
    GetApiWorkflowVersionVersionIdResponseBody$Outbound,
    z.ZodTypeDef,
    GetApiWorkflowVersionVersionIdResponseBody
> = z
    .instanceof(GetApiWorkflowVersionVersionIdResponseBody)
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
export namespace GetApiWorkflowVersionVersionIdResponseBody$ {
    /** @deprecated use `GetApiWorkflowVersionVersionIdResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetApiWorkflowVersionVersionIdResponseBody$inboundSchema;
    /** @deprecated use `GetApiWorkflowVersionVersionIdResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetApiWorkflowVersionVersionIdResponseBody$outboundSchema;
    /** @deprecated use `GetApiWorkflowVersionVersionIdResponseBody$Outbound` instead. */
    export type Outbound = GetApiWorkflowVersionVersionIdResponseBody$Outbound;
}
