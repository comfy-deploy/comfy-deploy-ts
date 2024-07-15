/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Error in retrieving the specific workflow
 */
export type GetApiV1WorkflowsWorkflowIdOutputsResponseBodyData = {
    error: string;
};

/**
 * Error in retrieving the specific workflow
 */
export class GetApiV1WorkflowsWorkflowIdOutputsResponseBody extends Error {
    error: string;

    /** The original data that was passed to this error instance. */
    data$: GetApiV1WorkflowsWorkflowIdOutputsResponseBodyData;

    constructor(err: GetApiV1WorkflowsWorkflowIdOutputsResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.error = err.error;

        this.name = "GetApiV1WorkflowsWorkflowIdOutputsResponseBody";
    }
}

/** @internal */
export const GetApiV1WorkflowsWorkflowIdOutputsResponseBody$inboundSchema: z.ZodType<
    GetApiV1WorkflowsWorkflowIdOutputsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        error: z.string(),
    })
    .transform((v) => {
        return new GetApiV1WorkflowsWorkflowIdOutputsResponseBody(v);
    });

/** @internal */
export type GetApiV1WorkflowsWorkflowIdOutputsResponseBody$Outbound = {
    error: string;
};

/** @internal */
export const GetApiV1WorkflowsWorkflowIdOutputsResponseBody$outboundSchema: z.ZodType<
    GetApiV1WorkflowsWorkflowIdOutputsResponseBody$Outbound,
    z.ZodTypeDef,
    GetApiV1WorkflowsWorkflowIdOutputsResponseBody
> = z
    .instanceof(GetApiV1WorkflowsWorkflowIdOutputsResponseBody)
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
export namespace GetApiV1WorkflowsWorkflowIdOutputsResponseBody$ {
    /** @deprecated use `GetApiV1WorkflowsWorkflowIdOutputsResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetApiV1WorkflowsWorkflowIdOutputsResponseBody$inboundSchema;
    /** @deprecated use `GetApiV1WorkflowsWorkflowIdOutputsResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetApiV1WorkflowsWorkflowIdOutputsResponseBody$outboundSchema;
    /** @deprecated use `GetApiV1WorkflowsWorkflowIdOutputsResponseBody$Outbound` instead. */
    export type Outbound = GetApiV1WorkflowsWorkflowIdOutputsResponseBody$Outbound;
}