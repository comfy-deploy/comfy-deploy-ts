/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Error in creating workflow
 */
export type PostV1WorkflowsResponseBodyData = {
    error: string;
};

/**
 * Error in creating workflow
 */
export class PostV1WorkflowsResponseBody extends Error {
    error: string;

    /** The original data that was passed to this error instance. */
    data$: PostV1WorkflowsResponseBodyData;

    constructor(err: PostV1WorkflowsResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.error = err.error;

        this.name = "PostV1WorkflowsResponseBody";
    }
}

/** @internal */
export const PostV1WorkflowsResponseBody$inboundSchema: z.ZodType<
    PostV1WorkflowsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        error: z.string(),
    })
    .transform((v) => {
        return new PostV1WorkflowsResponseBody(v);
    });

/** @internal */
export type PostV1WorkflowsResponseBody$Outbound = {
    error: string;
};

/** @internal */
export const PostV1WorkflowsResponseBody$outboundSchema: z.ZodType<
    PostV1WorkflowsResponseBody$Outbound,
    z.ZodTypeDef,
    PostV1WorkflowsResponseBody
> = z
    .instanceof(PostV1WorkflowsResponseBody)
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
export namespace PostV1WorkflowsResponseBody$ {
    /** @deprecated use `PostV1WorkflowsResponseBody$inboundSchema` instead. */
    export const inboundSchema = PostV1WorkflowsResponseBody$inboundSchema;
    /** @deprecated use `PostV1WorkflowsResponseBody$outboundSchema` instead. */
    export const outboundSchema = PostV1WorkflowsResponseBody$outboundSchema;
    /** @deprecated use `PostV1WorkflowsResponseBody$Outbound` instead. */
    export type Outbound = PostV1WorkflowsResponseBody$Outbound;
}
