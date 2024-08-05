/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Error when uploading the workflow
 */
export type GetWorkflowVersionVersionIdResponseBodyData = {
    error: string;
};

/**
 * Error when uploading the workflow
 */
export class GetWorkflowVersionVersionIdResponseBody extends Error {
    error: string;

    /** The original data that was passed to this error instance. */
    data$: GetWorkflowVersionVersionIdResponseBodyData;

    constructor(err: GetWorkflowVersionVersionIdResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.error = err.error;

        this.name = "GetWorkflowVersionVersionIdResponseBody";
    }
}

/** @internal */
export const GetWorkflowVersionVersionIdResponseBody$inboundSchema: z.ZodType<
    GetWorkflowVersionVersionIdResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        error: z.string(),
    })
    .transform((v) => {
        return new GetWorkflowVersionVersionIdResponseBody(v);
    });

/** @internal */
export type GetWorkflowVersionVersionIdResponseBody$Outbound = {
    error: string;
};

/** @internal */
export const GetWorkflowVersionVersionIdResponseBody$outboundSchema: z.ZodType<
    GetWorkflowVersionVersionIdResponseBody$Outbound,
    z.ZodTypeDef,
    GetWorkflowVersionVersionIdResponseBody
> = z
    .instanceof(GetWorkflowVersionVersionIdResponseBody)
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
export namespace GetWorkflowVersionVersionIdResponseBody$ {
    /** @deprecated use `GetWorkflowVersionVersionIdResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetWorkflowVersionVersionIdResponseBody$inboundSchema;
    /** @deprecated use `GetWorkflowVersionVersionIdResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetWorkflowVersionVersionIdResponseBody$outboundSchema;
    /** @deprecated use `GetWorkflowVersionVersionIdResponseBody$Outbound` instead. */
    export type Outbound = GetWorkflowVersionVersionIdResponseBody$Outbound;
}
